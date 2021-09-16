import { makeStyles } from '@material-ui/core/styles';

export const useStylesMenuItem = makeStyles(() => ({
    root: {
      "& .MuiPaper-root": {
        borderRadius:"100px",
  
      },
    },
    list: {
      padding: 0
    }
}));

export const styleMenu = { background:"grey", color:"white"} ;
