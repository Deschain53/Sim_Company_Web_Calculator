import { makeStyles } from '@material-ui/core/styles';

export const dropDowButtonDark = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
      backgroundColor: '#18191f',
      color: theme.palette.common.white
    },
    formControl_dark: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor: '#18191f',
      color: theme.palette.common.white
    },
    formControl_light: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor: 'white',
      color: theme.palette.common.black
    },
    inputLabel_dark: {
      color: theme.palette.common.white
    },
    inputLabel_light: {
      color: theme.palette.common.black
    },
    inputBase_dark: {
      color: theme.palette.common.white
    },
    inputBase_light: {
      color: theme.palette.common.black
    },
    
  }));