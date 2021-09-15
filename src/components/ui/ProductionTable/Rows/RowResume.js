import React from 'react';
import { TableBody, TableRow } from '@material-ui/core';
import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles';

export const RowResume = ({resume}) => {

    const { totalCostItems, wages, administrationOverhead, totalCostOfFabrication } = resume; 
    
    const processDecimals = (numero) => {
      const numeroDecimales = 3;
      return Number.parseFloat(numero).toFixed(numeroDecimales);
    }

    const mode='dark';

    return (
        <TableBody>
            <TableRow>
              <StyledTableCell mode={mode} rowSpan={4} />
              <StyledTableCell mode={mode} colSpan={2}>Total cost items</StyledTableCell>
              <StyledTableCell mode={mode} align="right">$&nbsp;{processDecimals(totalCostItems)}</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell mode={mode} colSpan={2}>Wages</StyledTableCell>
              <StyledTableCell mode={mode} align="right">$&nbsp;{processDecimals(wages)}</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell mode={mode} colSpan={2}>Administration overhead</StyledTableCell>
              <StyledTableCell mode={mode} align="right">$&nbsp;{processDecimals(administrationOverhead)}</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell mode={mode} colSpan={2}>Total Cost of fabrication</StyledTableCell>
              <StyledTableCell mode={mode} align="right">$&nbsp;{processDecimals(totalCostOfFabrication)}</StyledTableCell>
            </TableRow>
        </TableBody>
    )
}
