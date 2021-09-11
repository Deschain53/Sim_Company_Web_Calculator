import React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';

export const RowResume = ({resume}) => {

    const { totalCostItems, wages, administrationOverhead, totalCostOfFabrication } = resume; 
    
    return (
        <TableBody>
            <TableRow>
              <TableCell rowSpan={4} />
              <TableCell colSpan={2}>Total cost items</TableCell>
              <TableCell align="right">$&nbsp;{totalCostItems}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Wages</TableCell>
              <TableCell align="right">$&nbsp;{wages}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Administration overhead</TableCell>
              <TableCell align="right">$&nbsp;{administrationOverhead}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total Cost of fabrication</TableCell>
              <TableCell align="right">$&nbsp;{totalCostOfFabrication}</TableCell>
            </TableRow>
        </TableBody>
    )
}
