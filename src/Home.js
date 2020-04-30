import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { del } from './redux/action/action';


class Home extends Component {
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
    this.props.dispatch(del(i))
  }

    render() {
      
      let store = this.props.state.reducer.filter(
        (reducer)=>{
          return reducer.companyselected.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
        }
      )
      console.log(this.props.state)

        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
          
            <div className="collapse navbar-collapse" id="navbar">
              
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" onChange={this.handleInput} name="search" value={this.state.search} placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                <Link to='/form'>
                <button type="button" className="btn btn-info">Add</button>
            </Link>
              </form>
            </div>
          </nav>
            <table className="table table-dark" style={{fontColor:"white"}}>
            <thead>
              <tr>
                <th scope="col">Sl.No</th>
                <th scope="col">Production unit name</th>
                <th scope="col">Managers</th>
                
              </tr>
            </thead>
            <tbody>
            {
              (store).map((i,key)=>(
                <tr key={key}>
                <th scope="row">{key}</th>
                <th scope="col"><table><thead>{i.companyselected}</thead><tbody>{i.production}</tbody></table></th>
                
                {
                  i.managers.map((idx,k)=>(
                    <table key={k}>
                    <thead><tr><td>{idx.name}</td></tr></thead>
                    <tbody><tr><td>{idx.email}</td><td>{idx.phone}</td></tr> </tbody>
                    </table>

                  ))
                }
                 
                  
                
                
                <td>
                <Link to ={`/edit/${key}`}>
                <button className="btn btn-info">edit</button>
                </Link>
            
            <button className="btn btn-info" onClick={()=>this.delete(key)}>delete</button>
            </td>
              </tr>
              ))
            }
              
              
            </tbody>
            
          </table>
          
            </div>
        )
    }
}

const mapStatetoProps = state =>({
  state:state
})


export default connect(mapStatetoProps)(Home)

// <ul>
// {
//   i.Members.map((index,key)=>(
//     <div key={key}>
//     <li>{index}</li>
//     </div>
//   ))
// }
//   </ul>