import React from 'react'
import { useSelector } from 'react-redux';
import { IconButton, makeStyles, TableRow } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles';

export const RowNormalProduction = ({row, open, setOpen}) => {

  const {buildingLevel} = useSelector( state => state.production );
  //console.log(buildingLevel);

    const useRowStyles = makeStyles({
        root: {
          '& > *': {
            borderBottom: 'unset',
          },
        },
    });

    const classes = useRowStyles();

    const { product, cost, marketPrice, unitsHour, profitHourMarket, profitHourContract } = row;

    const processDecimals = (numero) => {
      const numeroDecimales = 3;
      return Number.parseFloat(numero).toFixed(numeroDecimales);
    }

    const mode='dark';

    return (
        <TableRow className={classes.root}>
          <StyledTableCell mode={mode}>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} color={ mode === 'dark' ? "primary" : "" }>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" mode={mode}>
            {product}
          </StyledTableCell>
          <StyledTableCell align="right" mode={mode}>$&nbsp;{processDecimals(cost)}</StyledTableCell>
          <StyledTableCell align="right" mode={mode}>$&nbsp;{marketPrice}</StyledTableCell>
          <StyledTableCell align="right" mode={mode}>{processDecimals(unitsHour*buildingLevel)}</StyledTableCell>
          <StyledTableCell align="right" mode={mode ==='dark' && Math.sign(profitHourMarket) === -1 ? "dark_negative" : "dark_positive" }>
            $&nbsp;{processDecimals(profitHourMarket*buildingLevel)}
          </StyledTableCell>
          <StyledTableCell align="right" mode={mode ==='dark' && Math.sign(profitHourContract) === -1 ? "dark_negative" : "dark_positive" }>
            $&nbsp;{processDecimals(profitHourContract*buildingLevel)}
          </StyledTableCell>
        </TableRow>
    )
}
