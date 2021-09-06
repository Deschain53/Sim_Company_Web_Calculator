import React, {useState, useEffect} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { dropDowButtonDark } from '../../styles/material-ui-styles/dropDownDark';
import { useDispatch  } from 'react-redux';
import { changeQualityP } from '../../actions/production';

export const QualityDropDownButton = () => {

  const dispatch = useDispatch();

  const dropDowButtonDarkStyle = dropDowButtonDark();

  const [quality, setQuality] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    
    switch (quality) {
      
      case '':
        break;

      default:
          dispatch( changeQualityP(quality) )
        break;
    }
    
  }, [quality]);

  const qualities = [0,1,2,3,4,5,6];

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
          value={quality}
          onChange={handleChange}
        >
          {
            qualities.map( q => (
              <MenuItem value={q} >{q}</MenuItem>  
            ))
          }
           
        </Select>
      </FormControl>
    </div>
  );
}