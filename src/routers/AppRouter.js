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
import { Instructions } from '../components/ui/Instructions';
import { Navbar } from '../components/ui/Navbar';

  export const AppRouter = () => {
    const {mode} = useSelector(state => state.conf);

    return (
    <Router basename="/Sim_Company_Web_Calculator">
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

            <Route 
                exact 
                path="/instructions" 
                component={ Instructions } 
            />
            
            <Redirect to="/production"/>
        </Switch>    
       
      </div>
    </Router>
    )
}