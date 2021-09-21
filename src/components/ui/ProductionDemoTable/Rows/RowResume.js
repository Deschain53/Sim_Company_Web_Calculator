import React from 'react';
import { useSelector } from 'react-redux';
import { TableBody, TableRow } from '@material-ui/core';
import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles';
import { tableProduction_index } from '../../../../languaje/tables/tableProduction/tableProduction_index';

export const RowResume = ({resume}) => {

  const {mode, languaje} = useSelector(state => state.conf);

  const { totalCostItems, wages, administrationOverhead, totalCostOfFabrication } = resume; 
  
  const processDecimals = (numero) => {
    const numeroDecimales = 3;
    return Number.parseFloat(numero).toFixed(numeroDecimales);
  }
  
  const infoTable = tableProduction_index[`${languaje}_tableP`];

  return (
      <TableBody>
          <TableRow>
            <StyledTableCell mode={mode} rowSpan={4} />
            <StyledTableCell mode={mode} colSpan={2}> &#40;b&#41;&nbsp;&nbsp;{ infoTable.additionTotalCostItems } </StyledTableCell>
            <StyledTableCell mode={mode} align="right">$&nbsp;{processDecimals(totalCostItems)}</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell mode={mode} colSpan={2}> &#40;c&#41;&nbsp;&nbsp;{ infoTable.wages } </StyledTableCell>
            <StyledTableCell mode={mode} align="right">$&nbsp;{processDecimals(wages)}</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell mode={mode} colSpan={2}> &#40;d&#41;&nbsp;&nbsp;{ infoTable.administrationOverhead } </StyledTableCell>
            <StyledTableCell mode={mode} align="right">$&nbsp;{processDecimals(administrationOverhead)}</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell mode={mode} colSpan={2}> &#40;e&#41;&nbsp;&nbsp;{ infoTable.totalCostOfFabrication } </StyledTableCell>
            <StyledTableCell mode={mode} align="right">$&nbsp;{processDecimals(totalCostOfFabrication)}</StyledTableCell>
          </TableRow>
      </TableBody>
  )
}
