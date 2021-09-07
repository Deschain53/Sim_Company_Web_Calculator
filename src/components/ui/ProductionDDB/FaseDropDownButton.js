import React, {useState, useEffect} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { dropDowButtonDark } from '../../../styles/material-ui-styles/dropDownDark';
import { useDispatch  } from 'react-redux';
import { changeProductionFaseToBoom, 
  changeProductionFaseToNormal, 
  changeProductionFaseToRecession 
} from '../../../actions/production';

export const FaseDropDownButton = () => {

  const dispatch = useDispatch();

  const dropDowButtonDarkStyle = dropDowButtonDark();

  const [fase, setFase] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setFase(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    //console.log(fase);
    
    switch (fase) {
      case 0:
          dispatch( changeProductionFaseToRecession() )
        break;
      
      case 1:
          dispatch( changeProductionFaseToNormal() )
        break;

      case 2:
          dispatch( changeProductionFaseToBoom() )
        break;

      case '':
        break;

      default:
          dispatch( changeProductionFaseToNormal() )
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase]);

  return (
    <div>
      <FormControl className={ dropDowButtonDarkStyle.formControl }>
        <InputLabel id="demo-controlled-open-select-label" className={ dropDowButtonDarkStyle.inputLabel } >Fase</InputLabel>
        <Select
          className={ dropDowButtonDarkStyle.inputBase }  
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={fase}
          onChange={handleChange}
        >
          <MenuItem value={0} >Recesión</MenuItem>    
          <MenuItem value={1} >Normal</MenuItem>
          <MenuItem value={2} >Boom</MenuItem>  
        </Select>
      </FormControl>
    </div>
  );
}