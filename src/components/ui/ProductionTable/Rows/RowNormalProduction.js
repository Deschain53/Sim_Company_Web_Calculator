import React from 'react'
import { IconButton, makeStyles, TableCell, TableRow } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export const RowNormalProduction = ({row, open, setOpen}) => {

    const useRowStyles = makeStyles({
        root: {
          '& > *': {
            borderBottom: 'unset',
          },
        },
    });

    const classes = useRowStyles();

    const { product, cost, marketPrice, unitsHour, profitHourMarket, profitHourContract } = row;

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
          <TableCell align="right">$&nbsp;{cost}</TableCell>
          <TableCell align="right">$&nbsp;{marketPrice}</TableCell>
          <TableCell align="right">{unitsHour}</TableCell>
          <TableCell align="right">$&nbsp;{profitHourMarket}</TableCell>
          <TableCell align="right">$&nbsp;{profitHourContract}</TableCell>
        </TableRow>
    )
}
