import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { delcompany } from '../redux/action/companyaction';
import Sidebar from '../components/Sidebar';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
  }

  handleInput = (e) => {
    let target = e.target
    let name = target.name
    let value = target.value

    this.setState({
      [name]: value
    })

  }

  delete(i) {
    this.props.dispatch(delcompany(i))
  }

  render() {

    let store = this.props.state.companyreducer.filter(
      (companyreducer) => {
        return companyreducer.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
    console.log(store.country_served)

    return (

      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


          <div className="collapse navbar-collapse" id="navbar">

            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" onChange={this.handleInput} name="search" value={this.state.search} placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

            </form>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div class="card-deck mb-3 text-center">

                {
                  store.map((company, key) => (
                    <div className="card" style={{ width: "15rem", height: "30rem" }} key={key}>
                      <div className="card-body" >
                        <h5 className="card-title" >{company.name}</h5>
                        <p>{company.email}</p>
                        <p>ph:{company.ph}</p>
                        <p>acc_no:{company.acc_no}</p>
                        <p>country:{company.country}</p>
                        <h5>countries to serve</h5>
                        <div >
                          {
                            company.country_served.map((countries, k) => (
                              <div className="card" style={{ width: "5rem", height: "1.5rem" }} key={k}>
                                {countries}
                              </div>
                            ))
                          }
                        </div>

                        <Link to={`/Company/Edit/${key}`}>
                          <button className="btn btn-info">edit</button>
                        </Link>
                        <button className="btn btn-primary" onClick={() => this.delete(key)}>delete</button>
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

const mapStatetoProps = state => ({
  state: state
})


export default connect(mapStatetoProps)(Company)