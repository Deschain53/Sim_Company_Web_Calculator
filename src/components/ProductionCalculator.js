import React from 'react';
import { useDispatch  } from 'react-redux';
import { getPricesFromInternet } from '../actions/prices';
//import { changeProductionFaseToBoom, changeProductionFaseToNormal } from '../actions/production';
import {FaseDropDownButton } from '../components/ui/FaseDropDownButton';
import { BuildingDropDownButton } from './ui/BuildingDropDownButton';
import { FormProduction } from './ui/FormProduction';

export const ProductionCalculator = () => {

    const dispatch = useDispatch();

    const handleGetPrices = () => {
        console.log('Accion disparada');
        dispatch( getPricesFromInternet() );
    }

    const handleAction= () => {
        console.log('action');
        //dispatch( changeProductionFaseToNormal() );
    }

    return (
        <div className="window-app">
            <h1 className="h1">Production Calculator</h1>

            <div>
                <FaseDropDownButton/>
                <FormProduction/>
                <BuildingDropDownButton/>

                <button className = "btn btn-primary" onClick = { handleGetPrices }> 
                    Extrae precios
                </button>

                <button className = "btn btn-primary" onClick = { handleAction }> 
                    Action
                </button>
            </div>


        </div>
    )
}
