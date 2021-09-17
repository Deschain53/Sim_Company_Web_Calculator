import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom' 
import { DarkModeButton } from './Buttons/DarkModeButton'
import { LanguajeDropDownButton } from './ProductionDDB/LanguajeDropDownButton';

export const Navbar = () => {
    const {mode} = useSelector(state => state.conf);
    
    return (
<nav className={"navbar navbar-expand-lg " + ( mode === 'dark' ? "navbar-dark bg-dark " : "navbar-light bg-light " )}>
  <div className="container-fluid">

    <NavLink 
        activeClassName="active"
        className="navbar-brand text-info" 
        exact
        to="/"
    >
        Sim Company calculators
    </NavLink>

    <DarkModeButton/>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink 
                activeClassName="active"
                className="nav-link" 
                exact
                to="/production"
            >
                Production Calculator
            </NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
                activeClassName="active"
                className="nav-link" 
                exact
                to="/retail"
            >
                Retail Calculator
            </NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
                activeClassName="active"
                className="nav-link" 
                exact
                to="/search"
            >
                Instructions
            </NavLink>
        </li>

        <li className="nav-item mt-1 ms-2">
            <div className="mt-2 ">
                <LanguajeDropDownButton/>
            </div>
        </li>

      </ul>
    </div>
  </div>
</nav>
    )
}
