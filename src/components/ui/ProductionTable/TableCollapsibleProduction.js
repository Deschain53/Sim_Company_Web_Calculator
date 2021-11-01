import React, { useState } from 'react';
import { Table, TableBody, TableContainer, } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { TableHeadMain } from './TableHeadMain';
import { Row } from './Rows/Row';
import { useCalculaProduction } from '../../../hooks/useCalculaProduction'

export const TableCollapsibleProduction = () => {
  const [open, setOpen] = useState(false);
  const {tableP} = useCalculaProduction();
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">

        <TableHeadMain
          open={ open }
          setOpen= { setOpen }          
        />

        <TableBody>
          {tableP.map((row) => (
            <Row key={row.product} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



