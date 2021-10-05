import React from 'react'
import { useSelector } from 'react-redux';
import { IconButton, makeStyles, TableRow } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles';

export const RowNormalRetail = ({row, open, setOpen}) => {

  const {buildingLevel} = useSelector( state => state.production );
  const {mode} = useSelector(state => state.conf);

    const useRowStyles = makeStyles({
        root: {
          '& > *': {
            borderBottom: 'unset',
          },
        },
    });

    const classes = useRowStyles();

    const { product, cost, sellingPrice, unitsHour, profitHour } = row;

    const processDecimals = (numero,numeroDecimales=3) => {
      return Number.parseFloat(numero).toFixed(numeroDecimales);
    }

    return (
        <TableRow className={classes.root}>
          <StyledTableCell mode={mode}>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} color={ mode === 'dark' ? "primary" : "default" }>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" mode={mode}>
            {product}
          </StyledTableCell>
          <StyledTableCell align="right" mode={mode}>$&nbsp;{ (cost < 100) ? processDecimals(cost) : cost }</StyledTableCell>
          <StyledTableCell align="right" mode={mode}>$&nbsp;{sellingPrice < 100 ? processDecimals(sellingPrice) : processDecimals(sellingPrice,0)}</StyledTableCell>
          <StyledTableCell align="right" mode={mode}>{processDecimals(unitsHour*buildingLevel)}</StyledTableCell>
          <StyledTableCell align="right" mode={ mode !== 'dark' ? mode : 
            Math.sign(profitHour) === -1 ? "dark_negative" : "dark_positive" }
          >
            $&nbsp;{processDecimals(profitHour*buildingLevel)}
          </StyledTableCell>
        </TableRow>
    )
}
