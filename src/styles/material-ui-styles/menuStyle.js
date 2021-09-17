import { makeStyles } from '@material-ui/core/styles';
//import { styled, alpha } from '@mui/material/styles';

export const useStylesMenuItem = makeStyles((theme) => ({
    root: {
      "& .MuiPaper-root": {
        borderRadius:"100px",
  
      },
    },
    '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: 'white',
        },
    },
    /*"& .Mui-focusVisible": {
        background: 'black',
        color: 'white',
    },*/
    list: {
      padding: 0
    }
}));

export const styleMenuLight = { background:"white", color:"black"} ;
export const styleMenuDark = { background:"#3b3c42", color:"white"} ; //"#4e4f59"



