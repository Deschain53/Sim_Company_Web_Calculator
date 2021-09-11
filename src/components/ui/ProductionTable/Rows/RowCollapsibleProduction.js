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
                    {row.detail.map(({item, amount, unitCost, totalCost}) => (
                      <TableRow key={item}>
                        <TableCell component="th" scope="row">{item}</TableCell>
                        <TableCell>{amount}</TableCell>
                        <TableCell align="right">$&nbsp;{unitCost}</TableCell>
                        <TableCell align="right">$&nbsp;{totalCost}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow/>
                  </TableBody>
                  
                  <TableBody>
                    <TableRow>
                      <TableCell rowSpan={4} />
                      <TableCell colSpan={2}>Total cost items</TableCell>
                      <TableCell align="right">$123541</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Wages</TableCell>
                      <TableCell align="right">$1999</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Administration overhead</TableCell>
                      <TableCell align="right">$0.5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Total Cost of fabrication</TableCell>
                      <TableCell align="right">$999</TableCell>
                    </TableRow>
                  </TableBody>

                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
    )
}
