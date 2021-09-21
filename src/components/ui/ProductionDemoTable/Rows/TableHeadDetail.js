import React from 'react'
import { useSelector } from 'react-redux'
import { TableHead, TableRow } from '@material-ui/core'
import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles';
import { tableProduction_index } from '../../../../languaje/tables/tableProduction/tableProduction_index';

export const TableHeadDetail = () => {

  const { languaje} = useSelector(state => state.conf);
  const infoTable = tableProduction_index[`${languaje}_tableP`];


  const mode = 'dark';
    return (
        <TableHead>
        <TableRow>
          <StyledTableCell mode={mode} > &#40;7&#41;&nbsp;&nbsp;{ infoTable.item } </StyledTableCell>
          <StyledTableCell mode={mode} > &#40;8&#41;&nbsp;&nbsp;{ infoTable.amount } </StyledTableCell>
          <StyledTableCell mode={mode}  align="right"> &#40;9&#41;&nbsp;&nbsp;{ infoTable.unitCost } </StyledTableCell>
          <StyledTableCell mode={mode}  align="right"> &#40;10&#41;&nbsp;&nbsp;{ infoTable.totalCostItem } </StyledTableCell>
        </TableRow>
      </TableHead>
    )
}
