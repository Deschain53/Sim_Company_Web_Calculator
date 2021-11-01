import React, { useMemo, useState, useEffect } from 'react';
import { Table, TableBody, TableContainer, } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { TableHeadMain } from './TableHeadMain';
import { Row } from './Rows/Row';
import { useCalculaProduction } from '../../../hooks/useCalculaProduction'

const orderArrayDescendantByProfitHourContract = (array) => {
  array.sort(function (a, b) {
    if (a.profitHourContract > b.profitHourContract) {
      return 1;
    }
    if (a.profitHourContract < b.profitHourContract) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })
};

const orderArrayAscendantByProfitHourContract = (array) => {
  array.sort(function (a, b) {
    if (a.profitHourContract > b.profitHourContract) {
      return -1;
    }
    if (a.profitHourContract < b.profitHourContract) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
};

export const TableCollapsibleProduction = () => {
  const [open, setOpen] = useState(false);
  const {tableP} = useCalculaProduction();

  useMemo(() => {
    if(open){
      orderArrayAscendantByProfitHourContract(tableP);
    }else{
      orderArrayDescendantByProfitHourContract(tableP);
    }
  // eslint-disable-next-line
  }, [open])

  useEffect(() => {
    setOpen(true);
  }, [])

  
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



