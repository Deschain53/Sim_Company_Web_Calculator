import React from 'react';
import { Table, TableBody, TableContainer, } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { TableHeadMain } from './TableHeadMain';
import { Row } from './Rows/Row';

const createData = (product, cost, marketPrice, unitsHour, profitHourMarket, profitHourContract) => {
  return {
    product,
    cost,
    marketPrice,
    unitsHour,
    profitHourMarket,
    profitHourContract,
    detail: [
      { item: 'Pantallas', amount: 2, unitCost: 121 ,totalCost: 109 },
      { item: 'Plastico', amount: 2, unitCost: 11, totalCost: 363 },
    ],
    resume: {
      totalCostItems: 123,
      wages: 1988,
      administrationOverhead: 2000,
      totalCostOfFabrication: 2021
    }
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99,0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99,0),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79,0),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5,0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5,0),
];

export const TableCollapsibleProduction = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">

        <TableHeadMain/>

        <TableBody>
          {rows.map((row) => (
            <Row key={row.product} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



