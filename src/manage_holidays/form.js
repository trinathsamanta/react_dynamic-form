import React, { Component } from 'react';

import DatePicker from 'react-date-picker'

class HolidayForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            session_name:"",
            format:"dd-MMM-y",
            date: [new Date(),new Date()],
            date1:new Date(),
            Assigndates:[{date: [new Date(),new Date()],name:""}],
            Assigndateserror:[{dateserror:"",nameerror:""}],
            datetype:"single",
            icon:null
        }
    }

    
    
    handleChange=(e,datename)=>{
      
      if(!datename){
        let target = e.target
      let name = target.name
      let value=target.value
      
        this.setState({
          [name]:value
      })
      }
      else{
        this.setState({
          [datename]:e
      }) 
      }
    }

      
    adddates = (e) => {
        e.preventDefault()
          this.setState({
            Assigndates: [...this.state.Assigndates, {date: [new Date(),new Date()],name:""}],
            Assigndateserror: [...this.state.Assigndateserror,{dateserror:"",nameerror:""}]
          },()=>{console.log(this.state.Assigndateserror)});
      }
        handleMember = (e,datename,id) => {
          
            if (["date", "name"].includes(datename||e.target.className) ) {
              let Assigndates = [...this.state.Assigndates]
              console.log(Assigndates,datename,id)
              if(!datename){
                Assigndates[e.target.dataset.id][e.target.className] = e.target.value
              }
              else{
                Assigndates[id][datename] = e
              }
              this.setState({ Assigndates }, () => console.log(this.state.Assigndates))
            } else {
              this.setState({ [e.target.name]: e.target.value })
        }
    }
     
    handleRemoveFields(i){
      
      
      const values = [...this.state.Assigndates];
      values.splice(i, 1);
      this.setState({
        Assigndates:[...values]
      },()=>{console.log(this.state.Assigndates)})
    };


   
    render() { console.log(this.state)
        return (
            <form className="form">
            <div className="form-group">
            <div className="form-row align-items-center">
            <div className="col-sm-3 my-1">
            <h6>Add session</h6>

            <input type="text" className="form-control" name="session_name" onChange={(name,value,target)=>this.handleChange(name,value,target)} value={this.state.session_name} placeholder="session_name"/>
              <span>{this.state.nameError}</span>
              <DatePicker
              value={this.state.date}
              onChange={(date)=>this.handleChange(date,"date")}
              format={this.state.format}
              clearIcon={this.state.icon}
              />

            <DatePicker
            value={this.state.date1}
            onChange={(date)=>this.handleChange(date,"date1")}
            format={this.state.format}
            clearIcon={this.state.icon}
            />
          <br/>
        <h6>Select type of holiday</h6>
        <input type="radio" id="single" name="datetype" onChange={this.handleChange} value="single"/>
        <label htmlFor="single">single</label>
        <input type="radio" id="range" name="datetype" onChange={this.handleChange} value="range"/>
        <label htmlFor="range">range</label><br/>
        <h6>Assign holiday</h6>
        <button className="btn btn-link" onClick={this.adddates}>add </button><br/>
      {
        this.state.Assigndates.map((val, idx)=>{
          let holidayId = `holiday-${idx}`, nameId = `name-${idx}`
          
            return (
              <div key={idx}>
              <table>
              <thead>
                <tr>
                  <th> <label htmlFor={holidayId}>Date of holiday</label> </th>
                  <th> <label htmlFor={nameId}>Holiday Name</label> </th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                <DatePicker
                name={holidayId}
                data-id={idx}
                id={holidayId}
                value={this.state.Assigndates[idx].date}
                onChange={(date,returnValue)=>this.handleMember(date,"date",idx)}
                clearIcon={this.state.icon}
                format={this.state.format}
                className="date"
                /><br/>
                      
                      </td>
                  <td>
                  <input
                        type="text"
                        name={nameId}
                        data-id={idx}
                        id={nameId}
                        onChange={this.handleMember}
                        value={this.state.Assigndates[idx].name} 
                        className="name"
                      /><br/>
                        
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
            
        })
    }
            </div>
            </div>
            </div>
            </form>
        );
    }
}

export default HolidayForm;