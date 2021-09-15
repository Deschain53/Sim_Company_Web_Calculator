import { Box, Collapse, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core'
import React from 'react'
import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles'
import { RowResume } from './RowResume'
import { TableHeadDetail } from './TableHeadDetail'

export const RowDetailProduction = ({row, open}) => {
  const mode = 'dark';
    return (
        <TableRow>
          <StyledTableCell mode={mode} style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
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
                        <StyledTableCell component="th" scope="row" mode={mode} >{item}</StyledTableCell>
                        <StyledTableCell  mode={mode} >{amount}</StyledTableCell>
                        <StyledTableCell align="right" mode={mode} >$&nbsp;{unitCost}</StyledTableCell>
                        <StyledTableCell align="right" mode={mode} >$&nbsp;{totalCost}</StyledTableCell>
                      </TableRow>
                    ))}
                    <TableRow/>
                  </TableBody>

                  <RowResume resume={row.resume}/>

                </Table>
              </Box>
            </Collapse>
          </StyledTableCell>
        </TableRow>
    )
}
