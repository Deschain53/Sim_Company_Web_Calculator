import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
//import TableRow from '@material-ui/core/TableRow';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
    body: {
      background: styledBy('color', {
        default: 'white',
        dark: '#18191f',
      }),
      color: styledBy('color', {
        default: 'black',
        dark:'white',
      }),
    },
  };


export const StyledTableCell = withStyles(() => ({
    /*head: {
      backgroundColor: styledBy('color', {
        default: 'theme.palette.common.white',
        dark: '#18191f',
      }),
      color: styledBy('color',{
        default: 'theme.palette.common.black',
        dark: 'theme.palette.common.white',
      })

    },*/
    body: {
      fontSize: 18,
      color: styles.body.color,
      backgroundColor: styles.body.background,
    },
  }))(TableCell);