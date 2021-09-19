import React from 'react'
import { useSelector } from 'react-redux'
import { TableHead, TableRow } from '@material-ui/core'
import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles';
import { tableProduction_index } from '../../../../languaje/tables/tableProduction/tableProduction_index';

export const TableHeadDetail = () => {

  const { languaje} = useSelector(state => state.conf);
  const infoTable = tableProduction_index[`${languaje}_tableP`];


  const mode = 'dark';
    return (
        <TableHead>
        <TableRow>
          <StyledTableCell mode={mode} > { infoTable.item } </StyledTableCell>
          <StyledTableCell mode={mode} > { infoTable.amount } </StyledTableCell>
          <StyledTableCell mode={mode}  align="right"> { infoTable.unitCost } </StyledTableCell>
          <StyledTableCell mode={mode}  align="right"> { infoTable.totalCostItem } </StyledTableCell>
        </TableRow>
      </TableHead>
    )
}
