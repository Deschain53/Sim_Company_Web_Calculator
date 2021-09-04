import { withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const tableDark = () => {

    const Cell = withStyles((theme) => ({
        head: {
          backgroundColor: '#18191f',
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
          color: theme.palette.common.white,
        },
    }))(TableCell);

    const Row = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: '#18191f',//theme.palette.action.hover,
        },
      },
    }))(TableRow);

    return {
        Cell,
        Row
    }

}


