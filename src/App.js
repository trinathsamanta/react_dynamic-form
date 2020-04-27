import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Form from './form';
import Home from './Home';


class App extends Component {
  
  
  render(){

    return(
      
      <div>
      <Router>
      <Switch>
      <Route exact path="/Form" component={Form}/>
      <Route exact path="/" component={Home}/>
      </Switch>
      </Router>
      

      </div>
    )

  }

}

export default App;
