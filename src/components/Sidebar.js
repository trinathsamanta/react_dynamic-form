import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        return (
            
            
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
            <ul class="nav flex-column">
                    <li class="nav-item"> <Link to="/"> dashboard </Link> </li>
                    <li class="nav-item"> <Link to="/production_unit">Manage Production Unit</Link> </li>
                    <li class="nav-item"> <Link to="#">Manage public Holiday</Link> </li>
                    <li class="nav-item"> <Link to="/Allergens">Manage allergens</Link> </li>
                    <li class="nav-item"> <Link to="/Nutrient">Manage nutrients</Link> </li>
                    <li class="nav-item"> <Link to="/Company">Manage company</Link> </li>
                    <li class="nav-item"> <Link to="#">Manage category</Link> </li>
                    <li class="nav-item"> <Link to="#">Contact</Link> </li>
                </ul>
            </div>
            </nav>
            
            
            
            
        )
    }
}
