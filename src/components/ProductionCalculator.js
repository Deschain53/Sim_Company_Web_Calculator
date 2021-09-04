import React from 'react'
import { getPricesFromInternet } from '../actions/prices'

export const ProductionCalculator = () => {




    return (
        <div>
            <h1>Production Calculator</h1>



            <button className = "btn btn-primary" onClick = {() => getPricesFromInternet}> 
                Extrae precios
            </button>

        </div>
    )
}
