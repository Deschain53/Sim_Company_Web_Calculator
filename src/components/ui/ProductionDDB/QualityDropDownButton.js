import React, {useState, useEffect} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { dropDowButtonDark } from '../../../styles/material-ui-styles/dropDownDark';
import { useDispatch, useSelector } from 'react-redux';
import { changeQualityP } from '../../../actions/production';
import { verifyddbQuality } from '../../../auxiliar/verify';

export const QualityDropDownButton = () => {

  const dispatch = useDispatch();

  const {mode} = useSelector(state => state.conf);
  const productionInfo = useSelector( state => state.production );

  const dropDowButtonDarkStyle = dropDowButtonDark();

  const [quality, setQuality] = useState(verifyddbQuality(productionInfo));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quality]);

  const qualities = [0,1,2,3,4,5,6];

  return (
    <div>
      <FormControl className={ mode==='dark' ? dropDowButtonDarkStyle.formControl__dark: dropDowButtonDarkStyle.formControl_light }>
        <InputLabel id="demo-controlled-open-select-label" 
        className={ mode==='dark' ? dropDowButtonDarkStyle.inputLabel_dark : dropDowButtonDarkStyle.inputLabel_light } >Quality</InputLabel>
        <Select
          className={ mode==='dark' ? dropDowButtonDarkStyle.inputBase_dark : dropDowButtonDarkStyle.inputBase_light }  
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
              <MenuItem value={q} key={q}>{q}</MenuItem>  
            ))
          }
           
        </Select>
      </FormControl>
    </div>
  );
}