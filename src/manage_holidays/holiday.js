import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

class Holiday extends Component {
    constructor(props) {
        super(props);
        this.state={
            search:""
        }
    }
    
    render() {
        return (
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbar">

            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" onChange={this.handleInput} name="search" value={this.state.search} placeholder="Search" />
              
              <Link to='/Holidays/Form'>
                <button type="button" className="btn btn-info">Add</button>
              </Link>
            </form>
          </div>
        </nav>

        <div div className="container-fluid">
          <div className="row">
            <Sidebar />
            </div>
            </div>
            </div>
        );
    }
}

export default Holiday;