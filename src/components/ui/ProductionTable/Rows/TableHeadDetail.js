import React from 'react'
import { TableHead, TableRow } from '@material-ui/core'
import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles';

export const TableHeadDetail = () => {
  const mode = 'dark';
    return (
        <TableHead>
        <TableRow>
          <StyledTableCell mode={mode} >Item</StyledTableCell>
          <StyledTableCell mode={mode} >Amount</StyledTableCell>
          <StyledTableCell mode={mode}  align="right">Unit cost</StyledTableCell>
          <StyledTableCell mode={mode}  align="right">Total cost</StyledTableCell>
        </TableRow>
      </TableHead>
    )
}
