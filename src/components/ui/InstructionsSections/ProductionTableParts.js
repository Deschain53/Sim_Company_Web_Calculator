import React , { useState } from 'react'
import { Collapse } from '@material-ui/core';
import { IconDropDownButton } from '../Buttons/IconDropDownButton';
import { TableDemoProduction } from '../ProductionDemoTable/TableDemoProduction';
import { ColumnsExplain } from './ProductionTableParts/ColumnsExplain';
import { RowsExplain } from './ProductionTableParts/RowsExplain';

export const ProductionTableParts = ({instructions}) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div className="d-flex flex-row bd-highlight mb-2">
          <h3 className="p-2 bd-highlight"> { instructions.partsProductionTitle } </h3>
          <IconDropDownButton className="p-2 bd-highlight" open={open} setOpen={setOpen} />
        </div>


        <Collapse in={open} timeout="auto" unmountOnExit>   
            <TableDemoProduction/>

            <ColumnsExplain instructions={ instructions }/>

            <RowsExplain instructions={ instructions }/>
        </Collapse>
      </>
    )
}
