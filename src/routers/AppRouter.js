import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { ProductionCalculator } from '../components/ProductionCalculator';
import { RetailCalculator } from '../components/RetailCalculator';
import { Navbar } from '../components/ui/Navbar';

  export const AppRouter = () => {
    return (
    <Router>
      <div>
        
        <Navbar/>
        
        <Switch>
            <Route 
                exact
                path="/production"  
                component={ ProductionCalculator } 
            />

            <Route 
                exact 
                path="/retail" 
                component={ RetailCalculator } 
            />
            
            <Redirect to="/production"/>
        </Switch>    
       
      </div>
    </Router>
    )
}