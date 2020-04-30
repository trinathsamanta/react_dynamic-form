import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form2 from './form2'
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    
    // componentDidMount(){
    //      let datadetails =[this.props.state.reducer[this.props.match.params.id]]
    //   this.setState({
    //     data:[...datadetails]
    //   })  
    // }

    render() { 
        return (
            <div>
                <Form2 id={this.props.match.params.id}/>
            </div>
        )
    }
}


const mapStatetoProps=state=>({
    state:state
})

export default connect(mapStatetoProps)(Edit)