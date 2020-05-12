import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { del } from '../redux/action/action';
import Sidebar from '../components/Sidebar';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      company:[],
      companyselected: ""
    }
  }

  componentDidMount(){
    this.setState({
      company:[...this.props.state.companyreducer]
    })
  }

  handleInput = (e) => {
    let target = e.target
    let name = target.name
    let value = target.value

    this.setState({
      [name]: value
    })

  }

  companyoptions() {
    var arr = [];
    for (let i = 0; i < this.state.company.length; i++) {
      arr.push(<option key={i} value={this.state.company[i].name}>{this.state.company[i].name}</option>)
    }
    return arr;
  }

  delete(i) {
    this.props.dispatch(del(i))
  }

  render() { console.log(this.props.state)
    let store=""
    if(this.state.search){
      store = this.props.state.reducer.filter(
        (reducer) => {
          return reducer.companyselected.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      )
    }
    else if(this.state.companyselected){
      store = this.props.state.reducer.filter(
        (reducer) => {
          return reducer.companyselected.toLowerCase().indexOf(this.state.companyselected.toLowerCase()) !== -1;
        }
      )
    }
    else{
      store = this.props.state.reducer
    }
    

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbar">

            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" onChange={this.handleInput} name="search" value={this.state.search} placeholder="Search" />
              <select id="companyselected" name="companyselected" value={this.state.companyselected} onChange={this.handleInput}>
                {
                  this.companyoptions()
                }
              </select>
              <Link to='/production_unit/Form'>
                <button type="button" className="btn btn-info">Add</button>
              </Link>
            </form>
          </div>
        </nav>

        <div div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div class="table-responsive">
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Sl.No</th>
                      <th scope="col">Production unit name</th>
                      <th scope="col">Managers</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      (store).map((i, key) => (
                        <tr key={key}>
                          <th scope="row">{key}</th>
                          <th scope="col"><table><thead>{i.companyselected}</thead><tbody>{i.production}</tbody></table></th>

                          {
                            i.managers.map((idx, k) => (
                              <table key={k}>
                                <thead><tr><td>{idx.name}</td></tr></thead>
                                <tbody><tr><td>{idx.email}</td><td>{idx.phone}</td></tr> </tbody>
                              </table>

                            ))
                          }




                          <td>
                            <Link to={`/production_unit/edit/${key}`}>
                              <button className="btn btn-info">edit</button>
                            </Link>

                            <button className="btn btn-info" onClick={() => this.delete(key)}>delete</button>
                          </td>
                        </tr>
                      ))
                    }


                  </tbody>

                </table>
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


export default connect(mapStatetoProps)(Home)

