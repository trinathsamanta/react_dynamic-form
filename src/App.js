import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Form from './form';
import Home from './Home';
import Edit from './edit';


class App extends Component {
  
  
  render(){

    return(
      
      <div>
      <Router>
      <Switch>
      <Route exact path="/edit/:id" component={Edit}/>
      <Route exact path="/Form" component={Form}/>
      <Route exact path="/" component={Home}/>
      </Switch>
      </Router>
      

      </div>
    )

  }

}

export default App;
