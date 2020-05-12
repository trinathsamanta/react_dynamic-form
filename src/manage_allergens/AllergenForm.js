import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateallergen, addallergen } from '../redux/action/allergenaction';
import { Link } from 'react-router-dom';

class AllergenForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            Name:"",
            nameError:""
        }
    }
    

    componentDidMount(){
        if(this.props.match.params.id){
            this.setState({
                Name:this.props.state.allergenreducer[this.props.match.params.id].Name
            })
        }
        
    }

    validation=()=>{
        let nameError=""
        let validName=/^[A-Za-z]+([\ A-Za-z]+)*/;
        if(!this.state.Name){
            nameError="allergen name required"
        }
        else if(!validName.test(this.state.Name)){
            nameError="invalid allergen"
        }

        if(nameError){
            this.setState({nameError})
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
            if(this.props.match.params.id){
                this.props.dispatch(updateallergen(this.state,this.props.match.params.id))
            }
            else{
                this.props.dispatch(addallergen(this.state)) 
            }
        }
        else{
            e.preventDefault()
        }
        
        
    }

    render() {console.log(this.props.match.params.id)
        console.log(this.props)
        return (
            <div>
            <form class="form">
            <div class="form-group">
            <div class="form-row align-items-center">
            <div class="col-sm-3 my-1">
            
              <input type="text" class="form-control" id="inlineFormInputName" name="Name" onChange={this.handleInput} value={this.state.Name} placeholder="Allergen"/><span>{this.state.nameError}</span>
              
              <Link to='/Allergens'>
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

export default connect(mapStatetoProps)(AllergenForm)