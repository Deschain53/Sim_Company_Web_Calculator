import { Box, Collapse, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core'
import React from 'react'
import { RowResume } from './RowResume'
import { TableHeadDetail } from './TableHeadDetail'

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

                <TableHeadDetail/>

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

                  <RowResume resume={row.resume}/>

                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
    )
}
