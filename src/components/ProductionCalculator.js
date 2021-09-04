import React from 'react';
import { useDispatch  } from 'react-redux';
import { getPricesFromInternet } from '../actions/prices';
import { changeProductionFaseToBoom, changeProductionFaseToNormal } from '../actions/production';

export const ProductionCalculator = () => {

    const dispatch = useDispatch();

    const handleGetPrices = () => {
        console.log('Accion disparada');
        dispatch( getPricesFromInternet() );
    }

    const handleChangeFase= () => {
        dispatch( changeProductionFaseToNormal() );
    }

    return (
        <div>
            <h1>Production Calculator</h1>



            <button className = "btn btn-primary" onClick = { handleGetPrices }> 
                Extrae precios
            </button>

            <button className = "btn btn-primary" onClick = { handleChangeFase }> 
                ChangeFase
            </button>

        </div>
    )
}
