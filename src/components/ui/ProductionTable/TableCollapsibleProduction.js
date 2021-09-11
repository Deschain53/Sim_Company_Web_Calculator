import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';

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
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
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
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Product</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Market price</TableCell>
            <TableCell align="right">Units/hour</TableCell>
            <TableCell align="right">Profit/hour Market</TableCell>
            <TableCell align="right">Profit/hour Contracts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.product} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



