import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
//import TableRow from '@material-ui/core/TableRow';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
    body: {
        background: styledBy('mode', {
          default: 'white',
          dark: '#18191f',
          dark_positive: '#18191f',
          dark_negative: '#18191f',

        }),
        color: styledBy('mode', {
          default: 'black',
          dark: '#6a9eda',//'#5086c1',    //'#33CCCC',
          dark_positive:'#419f00',
          dark_negative:'#e2504c',

        }),
    },
    /*head: {
        background: styledBy('mode', {
            default: 'white',
            dark: '#696969',
          }),
        color: styledBy('mode', {
          default: 'black',
          dark:'white',
        }),        
    }*/
  };


export const StyledTableCell = withStyles(() => ({
    head: {
      fontSize: 18,
      backgroundColor: '#343a40',
      color: 'white',
    },
    body: {
      fontSize: 18,
      color: styles.body.color,
      backgroundColor: styles.body.background,
    },
  }))(TableCell);