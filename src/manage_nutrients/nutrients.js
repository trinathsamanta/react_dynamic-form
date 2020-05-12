import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { delnutrient } from '../redux/action/nutrientaction';
import Sidebar from '../components/Sidebar';

class Nutrients extends Component {
    constructor(props) {
        super(props);
        this.state={
          search:""
        }
      }
      
      handleInput=(e)=>{
      let target=e.target
      let name=target.name
      let value=target.value
    
      this.setState({
        [name]:value
      })
    
      }
    
      delete(i){
        this.props.dispatch(delnutrient(i))
      }
    
        render() {
          
          let store = this.props.state.nutrientreducer.filter(
            (nutrientreducer)=>{
              return nutrientreducer.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
            }
          )
          console.log(this.props.state)
    
            return (
              
                <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
              
                <div className="collapse navbar-collapse" id="navbar">
                  
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" onChange={this.handleInput} name="search" value={this.state.search} placeholder="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <Link to='/Nutrient/Form'>
                    <button type="button" className="btn btn-info">Add</button>
                </Link>
                  </form>
                </div>
              </nav>
                <div className="container-fluid">
                <div className="row">

            <Sidebar />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div class="card-deck mb-3 text-center">
              
              {
                store.map((nutrient,key)=>(
                  <div className="card" style={{width: "10rem",height:"10rem"}} key={key}>
                  <div className="card-body" >
                <h5 className="card-title">{nutrient.name}({nutrient.unit})</h5>
                
                <Link to ={`/Nutrient/Edit/${key}`}>
                <button className="btn btn-info">edit</button>
                </Link>
                <button className="btn btn-primary" onClick={()=>this.delete(key)}>delete</button>
              </div>
              </div>
                ))
              }
              
           
              </div>
            </main>
              </div>
                
                </div>
                
                </div>
                
              
            )
        }
    }
    
    const mapStatetoProps = state =>({
      state:state
    })
    
    
    export default connect(mapStatetoProps)(Nutrients)