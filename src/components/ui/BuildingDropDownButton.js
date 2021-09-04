import React, {useState, useEffect} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { dropDowButtonDark } from '../../styles/material-ui-styles/dropDownDark';
import { useDispatch  } from 'react-redux';
import { changeBuildingP } from '../../actions/production';

export const BuildingDropDownButton = () => {

  const dispatch = useDispatch();

  const dropDowButtonDarkStyle = dropDowButtonDark();

  const [building, setFase] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setFase(event.target.value);
    //updateQuality(quality);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    console.log(building);

    if(building !== ''){
      dispatch( changeBuildingP(building) );
    }

  }, [building]);

  return (
    <div>
      <FormControl className={ dropDowButtonDarkStyle.formControl }>

        <InputLabel 
          id="demo-controlled-open-select-label" 
          className={ dropDowButtonDarkStyle.inputLabel } 
        > 
          Building 
        </InputLabel>
        
        <Select
          className={ dropDowButtonDarkStyle.inputBase }  
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={building}
          onChange={handleChange}
        >
          < MenuItem value={'P'} >Plantación</MenuItem>
          < MenuItem value={'o'} >Planta de concreto</MenuItem>
          < MenuItem value={'Q'} >Cantera</MenuItem>
          < MenuItem value={'x'} >Fábrica de construcción</MenuItem>
          < MenuItem value={'g'} >Contratista general</MenuItem>
          < MenuItem value={'T'} >Fábrica de moda</MenuItem>
          < MenuItem value={'M'} >Mina</MenuItem>
          < MenuItem value={'Y'} >Fábrica</MenuItem>
          < MenuItem value={'L'} >Fábrica de electrónicos</MenuItem>
          < MenuItem value={'8'} >Electrónica aeroespacial</MenuItem>
          < MenuItem value={'D'} >Fábrica de propulsión</MenuItem>
          < MenuItem value={'1'} >Fábrica de carros</MenuItem>
          < MenuItem value={'7'} >Fábrica aeroespacial</MenuItem>
          < MenuItem value={'O'} >PLataforma petrolera</MenuItem>
          < MenuItem value={'R'} >Refinería</MenuItem>
          < MenuItem value={'0'} >Hangar</MenuItem>
          < MenuItem value={'9'} >Vertical integration facility</MenuItem>
          < MenuItem value={'F'} >Granja</MenuItem>
          < MenuItem value={'S'} >Depósito de embarque</MenuItem>
          < MenuItem value={'W'} >Reservorio de agua</MenuItem>
          < MenuItem value={'p'} >Centro de investigación agrícola</MenuItem>
          < MenuItem value={'h'} >Laboratorio de física</MenuItem>
          < MenuItem value={'b'} >Laboratorio ganadero</MenuItem>
          < MenuItem value={'c'} >Laboratorio de química</MenuItem>
          < MenuItem value={'a'} >I+D automotriz</MenuItem>
          < MenuItem value={'f'} >Diseño de moda</MenuItem>
          < MenuItem value={'E'} >Central eléctrica</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}