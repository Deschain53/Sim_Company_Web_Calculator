import React from 'react';
import { updatePrices } from '../actions/prices';
import { PricesButton } from './ui/Buttons/PricesButton';
import { FormProduction } from './ui/FormProduction';

export const ProductionCalculator = () => {

    const handleAction= () => {
        console.log('action');
    }

    return (
        <div className="window-app">
            <h1 className="h1">Production Calculator</h1>

            <div>
                <FormProduction/>
            
                <div className="container">
                    <div className="row">
                        <PricesButton/>
                    </div>
                    <div className="row">
                        <button className = "btn btn-primary" onClick = { handleAction }> 
                            Action
                        </button>
                    </div>
                </div>


            </div>


        </div>
    )
}
