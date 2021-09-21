import React from 'react'
import { useSelector } from 'react-redux'
import { TableHead, TableRow } from '@material-ui/core'
import { StyledTableCell } from '../../../styles/material-ui-styles/tableStyles'
import { tableProduction_index } from '../../../languaje/tables/tableProduction/tableProduction_index'


export const TableHeadMain = () => {
  const { languaje } = useSelector(state => state.conf);

  const infoTable = tableProduction_index[`${languaje}_tableP`];

  const mode ='dark';
    return (
        <TableHead>
          <TableRow>
            <StyledTableCell  mode={mode} />
            <StyledTableCell  mode={mode} > &#40;1&#41;&nbsp;&nbsp;{  infoTable.product } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > &#40;2&#41;&nbsp;&nbsp;{ infoTable.productionCost } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > &#40;3&#41;&nbsp;&nbsp;{ infoTable.marketPrice } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > &#40;4&#41;&nbsp;&nbsp;{ infoTable.unitsHour } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > &#40;5&#41;&nbsp;&nbsp;{ infoTable.profitHourMarket } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > &#40;6&#41;&nbsp;&nbsp;{ infoTable.profitHourContract } </StyledTableCell>
          </TableRow>
        </TableHead>
    )
}
