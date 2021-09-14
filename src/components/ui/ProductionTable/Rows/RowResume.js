import React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';

export const RowResume = ({resume}) => {

    const { totalCostItems, wages, administrationOverhead, totalCostOfFabrication } = resume; 
    
    const processDecimals = (numero) => {
      const numeroDecimales = 3;
      return Number.parseFloat(numero).toFixed(numeroDecimales);
    }

    return (
        <TableBody>
            <TableRow>
              <TableCell rowSpan={4} />
              <TableCell colSpan={2}>Total cost items</TableCell>
              <TableCell align="right">$&nbsp;{totalCostItems}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Wages</TableCell>
              <TableCell align="right">$&nbsp;{processDecimals(wages)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Administration overhead</TableCell>
              <TableCell align="right">$&nbsp;{processDecimals(administrationOverhead)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total Cost of fabrication</TableCell>
              <TableCell align="right">$&nbsp;{processDecimals(totalCostOfFabrication)}</TableCell>
            </TableRow>
        </TableBody>
    )
}
