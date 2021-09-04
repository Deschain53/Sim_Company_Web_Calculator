import { makeStyles } from '@material-ui/core/styles';

export const dropDowButtonDark = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
      backgroundColor: '#18191f',
      color: theme.palette.common.white
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor: '#18191f',
      color: theme.palette.common.white
    },
    inputLabel: {
      color: theme.palette.common.white
    },
    inputBase: {
      color: theme.palette.common.white
    }
    
  }));