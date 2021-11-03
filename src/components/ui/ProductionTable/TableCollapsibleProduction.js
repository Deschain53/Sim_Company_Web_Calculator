import React, { useMemo, useState, useEffect } from 'react';
import { Table, TableBody, TableContainer, } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { TableHeadMain } from './TableHeadMain';
import { Row } from './Rows/Row';
import { useCalculaProduction } from '../../../hooks/useCalculaProduction'

const orderArrayDescendantBy = (array,property='') => {
  array.sort(function (a, b) {
    if (a[`${property}`] > b[`${property}`]) {
      return 1;
    }
    if (a[`${property}`] < b[`${property}`]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })
};

const orderArrayAscendantBy = (array,property='') => {
  array.sort(function (a, b) {
    if (a[`${property}`] > b[`${property}`]) {
      return -1;
    }
    if (a[`${property}`] < b[`${property}`]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
};

export const TableCollapsibleProduction = () => {
  const [up, setUp] = useState(false);
  const {tableP} = useCalculaProduction();

  const order = (property) => {
    if(up){
      orderArrayAscendantBy(tableP,property);
    }else{
      orderArrayDescendantBy(tableP,property);
    }
  }
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">

        <TableHeadMain  
          up = { up }
          setUp = { setUp } 
          order = { order }
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



