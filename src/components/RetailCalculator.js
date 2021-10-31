import React from 'react';
import { PricesButton } from './ui/Buttons/PricesButton';
import { RetailsButton } from './ui/Buttons/RetailsButton';
import { FormRetail } from './ui/FormRetail';
import { TableCollapsibleRetail } from './ui/RetailTable/TableCollapsibleRetail';

export const RetailCalculator = () => {

    return (
        <div className="window-app">
            <h1>Retail calculator</h1>
            <PricesButton/>
            <RetailsButton/>
            <FormRetail/>
            <TableCollapsibleRetail/>
            
        </div>
    )
}
