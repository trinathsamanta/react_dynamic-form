import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { add } from './redux/action/action';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
          company:["kfc","adidas","reebok","iris food"],
          companyselected:"",
          production:'',
          email:'',
          phone:"",
          address1:"",
          address2:"",
          address3:"",
          zip:"",
          country:"",
          countries2serve:[],
          managers: [{name:"", email:"", phone:""}],
          companyerror:"",
          productionerror:"",
          emailerror:"",
          phoneerror:"",
          address1error:"",
          address2error:"",
          address3error:"",
          countryerrror:"",
          managererror: [{nameerror:"",emailerror:"",phoneerror:""}],
          carderror:""
          
          
        }
        
      }
      
      cardvalidation(){
        
        let Validname=/^[A-Za-z]+([\ A-Za-z]+)*/;
        let Validemail=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
        let Validphone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let managerdetails=[...this.state.managers]
        let managerror=[...this.state.managererror]
        for(let i=0;i<managerdetails.length;i++){
          
           
         if(!managerdetails[i].name){
          managerror[i].nameerror='name is required'
         }
         else if(!Validname.test(managerdetails[i].name)){
          managerror[i].nameerror='name is invalid'
         }

         if(!managerdetails[i].email){
          managerror[i].emailerror='email is required'
         }
         else if(!Validemail.test(managerdetails[i].name)){
          managerror[i].emailerror='email is invalid'
         }     
         
         if(!managerdetails[i].phone){
          managerror[i].phoneerror='phone number is required'
         }
         else if(!Validphone.test(managerdetails[i].phone)){
          managerror[i].phoneerror='phone number is invalid'
         } 
         
         if(managerror[i].nameerror||managerror[i].emailerror||managerror[i].phoneerror){
           this.setState({
            managererror:[...managerror],
            
           },()=>{console.log(this.state.managererror)})
           
         }

         }
      }

      validate=()=>{
        let companyerror = '';
        let productionerror = '';
        let emailerror = '';
        let phoneerror = '';
        
        let address1error = '';
        let address2error = '';
        let address3error = '';
        let Validproduction=/\D\S/g;
        let Validemail=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
        let Validphone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        
        
        
        let carderror=this.cardvalidation()


        if(!this.state.company){
          companyerror='company selection required';
        }
        

        if(!this.state.production){
          productionerror='production name is required';
           }
           else if(!Validproduction.test(this.state.production)){
            productionerror='shouldnot have digits or special character'
           }else{
            productionerror=''
           }
           
        if(!this.state.email){
          emailerror='email is required';
         }
         else if(!Validemail.test(this.state.email)){
          emailerror='invalid email'
          }else{
          emailerror=""
          }

        if(!this.state.phone){
          phoneerror='phone number is required';
        }
        else if(!Validphone.test(this.state.phone)){
          phoneerror='invalid '
          }else{
            phoneerror=''
          }
          

        if(!this.state.address1){
          address1error='address1 is required';
        }
       

        if(!this.state.address2){
          address2error='address2 is required';
        }
        

        if(!this.state.address3){
          address3error='address3 is required';
        }
        
         if(companyerror||productionerror||emailerror||phoneerror||address1error||address2error||address3error||carderror){
             this.setState({companyerror,productionerror,emailerror,phoneerror,address1error,address2error,address3error,carderror})
             return false;
         }    
         return true;
      }

      handleChange=e=>{
        
        let target=e.target;
        let name=target.name;
        let value=target.value;

        this.setState({
          [name]:value
        },()=>{console.log(this.state)})

      }

      handleMember = (e) => {
        console.log(e.target.value)
        if (["name", "email","phone"].includes(e.target.className) ) {
          let managers = [...this.state.managers]
          managers[e.target.dataset.id][e.target.className] = e.target.value
          this.setState({ managers }, () => console.log(this.state.managers))
        } else {
          this.setState({ [e.target.name]: e.target.value })
        }
      }

    addmanager = (e) => {
      e.preventDefault()
        this.setState({
          managers: [...this.state.managers, {name:"", email:"", phone:""}],
          managererror: [...this.state.managererror,{nameerror:"",emailerror:"",phoneerror:""}]
        },()=>{console.log(this.state.managererror)});
      }

    handleRemoveFields(i){
      
      
        const values = [...this.state.managers];
        values.splice(i, 1);
        this.setState({
          managers:[...values]
        },()=>{console.log(this.state.managers)})
      };

      handleSubmit=(e)=>{
        const isValid=this.validate();
        if(isValid===false){
          e.preventDefault()
          
        }
        else{
          this.props.dispatch(add(this.state))
        }
                
      }

      render() {
        return (
          <div className="container-fluid">
          
          <div className="col-sm-9 col-md-6">
          
          <form>
          
          <div className="row">
          <div className="col">
            <input inputtype='input' type="text" className="form-control" onChange={this.handleChange} name="production" value={this.state.production}  placeholder="Production Unit Name"/> <span>{this.state.productionerror}</span>
          </div>
          <div className="col">
          
          <select id="company" name="company"  value={this.state.companyselected} onChange={this.handleChange}>
          {
            // this.state.company.map((i,k)=>(
            //   <option value={`${i}`}>{i}</option>
            // ))
          }
          <option value="select the company">select the company</option>
          <option value="Irish Food">Irish Food</option>
          <option value="Adidas">Adidas</option>
          <option value="Reebok">Reebok</option>
          <option value="Kfc">Kfc</option>
    
    </select>
    <span>{this.state.companyerror }</span>
          </div>
          
    </div>
       <div className="row">
          <div className="col">
            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email address"/><p>{this.state.emailerror}</p>
          </div>
          <div className="col">
            <input type="text" name="phone" className="form-control" value={this.state.phone} onChange={this.handleChange} placeholder="Phone"/><p>{this.state.phoneerror}</p>
          </div>
        </div>
        

        <div className="row">
          <div className="col">
            <input type="text" className="form-control" name="address1" value={this.state.address1} onChange={this.handleChange} placeholder="address1"/><p>{this.state.address1error}</p>
          </div>
          <div className="col">
          <input type="text" className="form-control" name="address2" value={this.state.address2} onChange={this.handleChange} placeholder="address2"/><p>{this.state.address2error}</p>
          </div>
          <div className="col">
          <input type="text" className="form-control" name="address3" value={this.state.address3} onChange={this.handleChange} placeholder="address3"/><p>{this.state.address3error}</p>
          </div>
        </div>

        <div >
        <button className="btn btn-link" onClick={this.addmanager}>add user</button><br/>
      {
        this.state.managers.map((val, idx)=>{
          let managernameId = `manager-${idx}`, emailId = `email-${idx}` , phoneId = `phone-${idx}`
          if(idx===0){
            return (
              <div key={idx}>
              <table>
              <thead>
                <tr>
                  <th> <label htmlFor={managernameId}>Manager name</label> </th>
                  <th> <label htmlFor={emailId}>Email</label> </th>
                  <th> <label htmlFor={phoneId}>Phone</label> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <input
                        type="text"
                        name={managernameId}
                        data-id={idx}
                        id={managernameId}
                        onChange={this.handleMember}
                        value={this.state.managers[idx].name} 
                        className="name"
                      /><br/>
                      <span>{this.state.managererror[idx].nameerror}</span>
                      </td>
                  <td>
                  <input
                        type="text"
                        name={emailId}
                        data-id={idx}
                        id={emailId}
                        onChange={this.handleMember}
                        value={this.state.managers[idx].email} 
                        className="email"
                      /><br/>
                      <span>{this.state.managererror[idx].emailerror}</span>
                  </td>
                  <td>
                  <input
                        type="text"
                        name={phoneId}
                        data-id={idx}
                        id={phoneId}
                        onChange={this.handleMember}
                        value={this.state.managers[idx].phone} 
                        className="phone"
                      /><br/>
                      <span>{this.state.managererror[idx].phoneerror}</span>
                  </td>
                  
                </tr>
                
              </tbody>
              
            </table>
              </div>
            )
            }
          else{
            return (
              <div key={idx}>
              <table>
              <thead>
                <tr>
                  <th> <label htmlFor={managernameId}>Manager name</label> </th>
                  <th> <label htmlFor={emailId}>Email</label> </th>
                  <th> <label htmlFor={phoneId}>Phone</label> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <input
                        type="text"
                        name={managernameId}
                        data-id={idx}
                        id={managernameId}
                        onChange={this.handleMember}
                        value={this.state.managers[idx].name} 
                        className="name"
                      />
                      <br/>
                      <span>{this.state.managererror[idx].nameerror}</span>
                      </td>
                  <td>
                  <input
                        type="text"
                        name={emailId}
                        data-id={idx}
                        id={emailId}
                        onChange={this.handleMember}
                        value={this.state.managers[idx].email} 
                        className="email"
                      />
                      <br/>
                      <span>{this.state.managererror[idx].emailerror}</span>
                  </td>
                  <td>
                  <input
                        type="text"
                        name={phoneId}
                        data-id={idx}
                        id={phoneId}
                        onChange={this.handleMember}
                        value={this.state.managers[idx].phone} 
                        className="phone"
                      />
                      <br/>
                      <span>{this.state.managererror[idx].phoneerror}</span>
                  </td>
                  <td>
                  <button className="btn btn-secondary"
              type="button"
              onClick={() => this.handleRemoveFields(idx)}>-</button>
                  </td>
                </tr>
                
                
              </tbody>
              
            </table>
              </div>
            )
          }
      
        })
      }
      
        
        </div>

        <Link to='/'>
        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
        </Link> 
      
    </form>
          
            
          </div>
          </div>
          
           
          
          
        );
      }
}

const mapStatetoProps = state =>({
  state:state
})


export default connect(mapStatetoProps)(Form)