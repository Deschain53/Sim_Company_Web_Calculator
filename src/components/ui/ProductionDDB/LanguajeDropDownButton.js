import React, {useState, useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
//import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDropDowButtonDark } from '../../../styles/material-ui-styles/useDropDownDark';
import { useStylesMenuItem, styleMenuLight, styleMenuDark  } from '../../../styles/material-ui-styles/menuStyle';
import { changeLanguaje, saveConfState } from '../../../actions/configuration';

export const LanguajeDropDownButton = () => {

  const dispatch = useDispatch();
  //const productionInfo = useSelector( state => state.production );
  const {mode, languaje:languajeConfState} = useSelector(state => state.conf);

  const dropDowButtonDarkStyle = useDropDowButtonDark();
  const classeMenuButton = useStylesMenuItem();

  const [languaje, setLanguaje] = useState(languajeConfState);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setLanguaje(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch( changeLanguaje(languaje) );
    dispatch( saveConfState() );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languaje]);

  const languajes = [
    {id:'english', languajeLabel:'English'},
    {id:'spanish', languajeLabel:'Spanish'}];

  return (
    <div>
      <FormControl className={ mode==='dark' ? dropDowButtonDarkStyle.formControl__dark: dropDowButtonDarkStyle.formControl_light }>
        {/*
        <InputLabel id="demo-controlled-open-select-label" 
        className={ mode==='dark' ? dropDowButtonDarkStyle.inputLabel_dark : dropDowButtonDarkStyle.inputLabel_light } >Languaje</InputLabel>
        */
        }
        <Select
          className={ mode==='dark' ? dropDowButtonDarkStyle.inputBase_dark : dropDowButtonDarkStyle.inputBase_light }  
          MenuProps={{classes: { list: classeMenuButton.list }}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={languaje}
          onChange={handleChange}
        >
          {
            languajes.map( ({languajeLabel,id}) => (
              <MenuItem key={id} value={id} style={ mode === 'dark' ? styleMenuDark : styleMenuLight } >
                { languajeLabel }
              </MenuItem>    
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}