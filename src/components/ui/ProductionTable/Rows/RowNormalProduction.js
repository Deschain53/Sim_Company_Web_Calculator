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

    return (
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.product}
          </TableCell>
          <TableCell align="right">{row.cost}</TableCell>
          <TableCell align="right">{row.marketPrice}</TableCell>
          <TableCell align="right">{row.unitsHour}</TableCell>
          <TableCell align="right">{row.profitHourMarket}</TableCell>
          <TableCell align="right">{row.profitHourContract}</TableCell>
        </TableRow>
    )
}
