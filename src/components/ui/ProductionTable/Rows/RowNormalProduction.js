import React from 'react'
import { useSelector } from 'react-redux';
import { IconButton, makeStyles, TableCell, TableRow } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

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

    return (
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {product}
          </TableCell>
          <TableCell align="right">$&nbsp;{processDecimals(cost)}</TableCell>
          <TableCell align="right">$&nbsp;{marketPrice}</TableCell>
          <TableCell align="right">{processDecimals(unitsHour*buildingLevel)}</TableCell>
          <TableCell align="right">$&nbsp;{profitHourMarket*buildingLevel}</TableCell>
          <TableCell align="right">$&nbsp;{profitHourContract*buildingLevel}</TableCell>
        </TableRow>
    )
}
