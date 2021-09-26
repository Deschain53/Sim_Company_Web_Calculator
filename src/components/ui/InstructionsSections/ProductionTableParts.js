import React from 'react';
import { TableDemoProduction } from '../ProductionDemoTable/TableDemoProduction';
import { ColumnsExplain } from './ProductionTableParts/ColumnsExplain';
import { RowsExplain } from './ProductionTableParts/RowsExplain';

export const ProductionTableParts = ({instructions}) => {
    return (
        <>
            <TableDemoProduction/>

            <h4> { instructions.columnsTitle } </h4>
            <ColumnsExplain instructions={ instructions }/>
            
            <h4> { instructions.rowsTitle }  </h4>
            <RowsExplain instructions={ instructions }/>

        </>
    )
}
