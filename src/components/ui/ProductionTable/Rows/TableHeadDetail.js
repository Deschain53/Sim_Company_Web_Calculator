import React from 'react'
import { TableCell, TableHead, TableRow } from '@material-ui/core'

export const TableHeadDetail = () => {
    return (
        <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell align="right">Unit cost</TableCell>
          <TableCell align="right">Total cost</TableCell>
        </TableRow>
      </TableHead>
    )
}
