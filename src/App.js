import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Form from './manage_production_unit/form';
import Home from './manage_production_unit';

import DashboardIndex from './dashboard';
import AllergensIndex from './manage_allergens';
import AllergenForm from './manage_allergens/AllergenForm';


import NutrientForm from './manage_nutrients/nutrientForm';
import NutrientIndex from './manage_nutrients';
import Companyindex from './manage_company';
import CompanyForm from './manage_company/form';
import Holidayindex from './manage_holidays';



class App extends Component {
  
  
  render(){

    return(
      
      <div>
      <Router>
      <Switch>
      <Route exact path="/production_unit/edit/:id" component={Form}/>
      <Route exact path="/production_unit/Form" component={Form}/>
      <Route exact path="/Nutrient/Edit/:id" component={NutrientForm}/>
      <Route exact path="/Nutrient/Form" component={NutrientForm}/>
      <Route exact path="/Allergens/Edit/:id" component={AllergenForm}/>
      <Route exact path="/Allergens/Form" component={AllergenForm}/>
      <Route exact path="/Company/edit/:id" component={CompanyForm}/>
      <Route exact path="/Company" component={Companyindex}/>
      <Route exact path="/Nutrient" component={NutrientIndex}/>
      <Route exact path="/Holidays" component={Holidayindex}/>
      <Route exact path="/Allergens" component={AllergensIndex}/>
      <Route exact path="/production_unit" component={Home}/>
      <Route exact path="/" component={DashboardIndex}/>Holidayindex
      </Switch>
      </Router>
      

      </div>
    )

  }

}

export default App;
