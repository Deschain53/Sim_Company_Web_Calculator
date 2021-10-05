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
            <StyledTableCell  mode={mode} > { infoTable.product } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > { infoTable.cost } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > { infoTable.marketPrice } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > { infoTable.unitsHour } </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > { infoTable.profitHour } </StyledTableCell>

          </TableRow>
        </TableHead>
    )
}
