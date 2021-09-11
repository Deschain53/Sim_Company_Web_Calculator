import React from 'react'
import { TableCell, TableHead, TableRow } from '@material-ui/core'

export const TableHeadMain = () => {
    return (
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
    )
}
