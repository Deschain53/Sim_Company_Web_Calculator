import React from 'react'
import { useSelector } from 'react-redux'
import { IconButton, TableHead, TableRow } from '@material-ui/core';
import { StyledTableCell } from '../../../styles/material-ui-styles/tableStyles'
import { tableProduction_index } from '../../../languaje/tables/tableProduction/tableProduction_index'
import { OrderButton } from '../Buttons/OrderButton';

export const TableHeadMain = ({up, setUp, order}) => {

  const { languaje } = useSelector(state => state.conf);
  const {mode} = useSelector(state => state.conf);

  const infoTable = tableProduction_index[`${languaje}_tableP`];

  

    return (
        <TableHead>
          <TableRow>
            <StyledTableCell mode={mode}>
          { /*<OrderButton
                up = { up } 
                setUp = { setUp }
                action = { order }
                value = {  }
              />*/}
            </StyledTableCell>

            <StyledTableCell  mode={mode} > 
              <div>{ infoTable.product }</div>
             </StyledTableCell>

            <StyledTableCell align="right" mode={mode} > 
              <OrderButton
                up = { up } 
                setUp = { setUp }
                action = { order }
                value = { 'cost' }
              />
              <div>{ infoTable.productionCost }</div>
             </StyledTableCell>

            <StyledTableCell align="right" mode={mode} > 
              <OrderButton
                up = { up } 
                setUp = { setUp }
                action = { order }
                value = { 'marketPrice' }
              />
              <div>{ infoTable.marketPrice }</div>
            </StyledTableCell>

            <StyledTableCell align="right" mode={mode} > 
              <OrderButton
                up = { up } 
                setUp = { setUp }
                action = { order }
                value = { 'unitsHour' }
              />
              <div>{ infoTable.unitsHour }</div>
            </StyledTableCell>

            <StyledTableCell align="right" mode={mode} > 
              <OrderButton
                up = { up } 
                setUp = { setUp }
                action = { order }
                value = { 'profitHourMarket' }
              />
              <div>{ infoTable.profitHourMarket }</div>
             </StyledTableCell>
            <StyledTableCell align="right" mode={mode} > 
              <OrderButton
                up = { up } 
                setUp = { setUp }
                action = { order }
                value = { 'profitHourContract' }
              />
              <div>{ infoTable.profitHourContract }</div>
             </StyledTableCell>
          </TableRow>
        </TableHead>
    )
}
