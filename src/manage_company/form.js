import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatecompany } from '../redux/action/companyaction';
import { Link } from 'react-router-dom';

class CompanyForm extends Component {
    constructor(props) {
        super(props);
        this.state={   
            name:"",
            email:"",
            ph:undefined,
            acc_no:undefined,
            country:"",
            country_served:[],
            nameError:""
        }
    }
    
    componentDidMount(){
        
        this.setState({
            name:this.props.state.companyreducer[this.props.match.params.id].name,
            email:this.props.state.companyreducer[this.props.match.params.id].email,
            ph:this.props.state.companyreducer[this.props.match.params.id].ph,
            acc_no:this.props.state.companyreducer[this.props.match.params.id].acc_no,
            country:this.props.state.companyreducer[this.props.match.params.id].country,
            country_served:this.props.state.companyreducer[this.props.match.params.id].country_served
        })
    }
    validation=()=>{
        let nameError=""
        let validName=/^[A-Za-z]+([\ A-Za-z]+)*/;
        if(!this.state.name){
            nameError="company name required"
        }
        else if(!validName.test(this.state.name)){
            nameError="invalid name"
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
            
                this.props.dispatch(updatecompany(this.state,this.props.match.params.id))
            
            
                
            
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
            
              <input type="text" class="form-control" id="inlineFormInputName" name="name" onChange={this.handleInput} value={this.state.name} placeholder="company"/><span>{this.state.nameError}</span>
              
              <Link to='/Company'>
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

export default connect(mapStatetoProps)(CompanyForm);