import React from 'react'
import { useSelector } from 'react-redux'
import { IconButton, TableHead, TableRow } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { StyledTableCell } from '../../../styles/material-ui-styles/tableStyles'
import { tableProduction_index } from '../../../languaje/tables/tableProduction/tableProduction_index'


export const TableHeadMain = ({open, setOpen}) => {
  const { languaje } = useSelector(state => state.conf);

  const infoTable = tableProduction_index[`${languaje}_tableP`];

  const mode ='dark';
    return (
        <TableHead>
          <TableRow>
            <StyledTableCell mode={mode}>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} color={ mode === 'dark' ? "primary" : "default" }>
                {open ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
              </IconButton>
            </StyledTableCell>
            <StyledTableCell  mode={mode} > { infoTable.product } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > { infoTable.productionCost } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > { infoTable.marketPrice } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > { infoTable.unitsHour } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > { infoTable.profitHourMarket } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > { infoTable.profitHourContract } </StyledTableCell>
          </TableRow>
        </TableHead>
    )
}
