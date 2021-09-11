import { Box, Collapse, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'

export const RowCollapsibleProduction = ({row, open}) => {
    return (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Detail
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Item</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell align="right">Unit cost</TableCell>
                      <TableCell align="right">Total cost</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.detail.map((detailRow) => (
                      <TableRow key={detailRow.date}>
                        <TableCell component="th" scope="row">
                          {detailRow.date}
                        </TableCell>
                        <TableCell>{detailRow.customerId}</TableCell>
                        <TableCell align="right">{detailRow.amount}</TableCell>
                        <TableCell align="right">
                          ${1998}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
    )
}
