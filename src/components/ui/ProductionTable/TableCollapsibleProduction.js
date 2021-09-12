import React, { useEffect } from 'react';
import { Table, TableBody, TableContainer, } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { TableHeadMain } from './TableHeadMain';
import { Row } from './Rows/Row';
import { useCalculaProduction } from '../../../hooks/useCalculaProduction'

import { updateNamesAndIds, updatePrices } from '../../../actions/tableP';
//import { useProductsBuilding } from '../../../hooks/useProductsBuilding';

export const TableCollapsibleProduction = () => {
  
 
  const {tableP} = useCalculaProduction();


  //console.log(productsJSON);


  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">

        <TableHeadMain/>

        <TableBody>
          {tableP.map((row) => (
            <Row key={row.product} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



