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

  /*
    Improvements to make:
      *The direction has to be modified so it can be up, down but in the redux tableP state
      *The metod to change direction need to be in an dispatch action so it can increase efficienci
      *It would be good to add a functionality to show arrowUp, arrowDown and neutral so it can 
        be seen esily what is the criteria for order and in case all it's in neutral the order 
        per default would be product in descendant (A -> Z)
  */

    return (
        <TableHead>
          <TableRow>
            <StyledTableCell mode={mode}>
            </StyledTableCell>

            <StyledTableCell  mode={mode} > 
              <div>{ infoTable.product }</div>
             </StyledTableCell>

            <StyledTableCell align="right" mode={mode} > 
              <div>
                <OrderButton
                  up = { up } 
                  setUp = { setUp }
                  action = { order }
                  value = { 'cost' }
                />
                { infoTable.productionCost }
              </div>
             </StyledTableCell>

            <StyledTableCell align="right" mode={mode} > 
              <div>
                <OrderButton
                  up = { up } 
                  setUp = { setUp }
                  action = { order }
                  value = { 'marketPrice' }
                />
                { infoTable.marketPrice }
              </div>
            </StyledTableCell>

            <StyledTableCell align="right" mode={mode} > 
              <div>
                <OrderButton
                  up = { up } 
                  setUp = { setUp }
                  action = { order }
                  value = { 'unitsHour' }
                />
                { infoTable.unitsHour }
              </div>
            </StyledTableCell>

            <StyledTableCell align="right" mode={mode} > 
              <div>
                <OrderButton
                  up = { up } 
                  setUp = { setUp }
                  action = { order }
                  value = { 'profitHourMarket' }
                />
                { infoTable.profitHourMarket }
              </div>
            </StyledTableCell>

            <StyledTableCell align="right" mode={mode} > 
              <div>
                <OrderButton
                  up = { up } 
                  setUp = { setUp }
                  action = { order }
                  value = { 'profitHourContract' }
                />
                { infoTable.profitHourContract }
              </div>
             </StyledTableCell>
          </TableRow>
        </TableHead>
    )
}
