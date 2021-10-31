import React from 'react';
import { RetailsButton } from './ui/Buttons/RetailsButton';
import { FormRetail } from './ui/FormRetail';
import { TableCollapsibleRetail } from './ui/RetailTable/TableCollapsibleRetail';

export const RetailCalculator = () => {

    return (
        <div className="window-app">
            <h1>Retail calculator</h1>
            <RetailsButton/>
            <FormRetail/>
            <TableCollapsibleRetail/>
            
        </div>
    )
}
