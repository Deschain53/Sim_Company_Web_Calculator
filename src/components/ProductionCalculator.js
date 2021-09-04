import React from 'react';
import { useDispatch  } from 'react-redux';
import { getPricesFromInternet } from '../actions/prices';

export const ProductionCalculator = () => {

    const dispatch = useDispatch();

    const handleGetPrices = () => {
        console.log('Accion disparada');
        dispatch( getPricesFromInternet() );
    }

    return (
        <div>
            <h1>Production Calculator</h1>



            <button className = "btn btn-primary" onClick = { handleGetPrices }> 
                Extrae precios
            </button>

        </div>
    )
}
