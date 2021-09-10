import React from 'react';
import { PricesButton } from './ui/Buttons/PricesButton';
import { FormProduction } from './ui/FormProduction';
import { TableCollapsibleProduction } from './ui/ProductionTable/TableCollapsibleProduction';

export const ProductionCalculator = () => {

    return (
        <div className="window-app">
            <h1 className="h1 mb-8">Production Calculator</h1>

            <div>
                <PricesButton/>
                <FormProduction/>
            
                <TableCollapsibleProduction/>


            </div>


        </div>
    )
}
