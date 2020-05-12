import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addnutrient } from '../redux/action/nutrientaction';

class NutrientForm extends Component {
    constructor(props) {
        super(props);
        this.state={
        name:"",
        DailyAmt:undefined,
        unit:"",
        nameError:"",
        DailyAmtError:"",
        unitError:"",
        }
    }
    
    validation=()=>{
        let nameError=""
        let unitError=""
        let DailyAmtError=""
        let validName=/^[A-Za-z]+([\ A-Za-z]+)*/;
        if(!this.state.name){
            nameError="nutrient name required"
        }
        else if(!validName.test(this.state.name)){
            nameError="invalid nutrient"
        }

        if(!this.state.DailyAmt||this.state.DailyAmt==="select Daily amt"){
        DailyAmtError="daily amt required"
        }

        if(!this.state.unit||this.state.unit==="select unit"){
            unitError="unit required"
        }

        if(nameError||DailyAmtError||unitError){
            this.setState({nameError,DailyAmtError,unitError})
            return false
        }
        return true
    }

    handleInput=(e)=>{
       let target=e.target
       let name = target.name
       let value = target.value

       this.setState({
           [name]:value
       })
    }

    handleSubmit=(e)=>{
        const valid = this.validation()
        if(valid===true){
            this.props.dispatch(addnutrient(this.state))
        }
        else{
            e.preventDefault()
        }
        
        
    }

    render() { console.log(this.state)
        return (
            <div>
            <form class="form">
            <div class="form-group">
            <div class="form-row align-items-center">
            <div class="col-sm-3 my-1">
            
              <input type="text" class="form-control" id="inlineFormInputName" name="name" onChange={this.handleInput} value={this.state.name} placeholder="Nutrient name"/>
              <span>{this.state.nameError}</span>

              <select id="unit" name="DailyAmt"  value={this.state.DailyAmt} onChange={this.handleInput}>
              <option value="select Daily amt">select Daily amt</option>
              <option value="1">1</option>
              <option value="2">2</option>
              </select>
              <span>{this.state.DailyAmtError}</span>

              <select id="unit" name="unit"  value={this.state.unit} onChange={this.handleInput}>
              <option value="select unit">select unit</option>
              <option value="kcal">kcal</option>
              <option value="gm">gm</option>
              </select>
              <span>{this.state.unitError}</span>
              <Link to='/Nutrient'>
        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
        </Link>         
              </div>
            </div>
            </div>
            
          </form>
            </div>
        )
    }
}

const mapStatetoProps = state =>({
    state:state
  })

export default connect(mapStatetoProps)(NutrientForm)
