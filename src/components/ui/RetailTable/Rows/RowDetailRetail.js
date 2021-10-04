import React from 'react'
import { useSelector } from 'react-redux';
import { Box, Collapse, Table, TableBody, TableRow, Typography } from '@material-ui/core'
import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles'
import { RowResume } from './RowResume'
import { TableHeadDetail } from './TableHeadDetail'
import { tableProduction_index } from '../../../../languaje/tables/tableProduction/tableProduction_index';

export const RowDetailRetail= ({row, open}) => {

  const { mode, languaje } = useSelector(state => state.conf);
  const { detail } = tableProduction_index[`${languaje}_tableP`];

    return (
        <TableRow>
          <StyledTableCell mode={mode} style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  { detail }
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
