import React from 'react'
import { TableCell, TableHead, TableRow } from '@material-ui/core'
import { StyledTableCell } from '../../../styles/material-ui-styles/tableStyles'

export const TableHeadMain = () => {

  const mode ='dark';
    return (
        <TableHead>
          <TableRow>
            <StyledTableCell  mode={mode} />
            <StyledTableCell  mode={mode} >Product</StyledTableCell>
            <StyledTableCell align="right" mode={mode} >Cost</StyledTableCell>
            <StyledTableCell align="right" mode={mode} >Market price</StyledTableCell>
            <StyledTableCell align="right" mode={mode} >Units/hour</StyledTableCell>
            <StyledTableCell align="right" mode={mode} >Profit/hour Market</StyledTableCell>
            <StyledTableCell align="right" mode={mode} >Profit/hour Contracts</StyledTableCell>
          </TableRow>
        </TableHead>
    )
}
