import React from 'react';
import { useSelector } from 'react-redux';
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
    const {mode} = useSelector(state => state.conf);

    return (
    <Router>
      <div className={"style-"+mode}>
        
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