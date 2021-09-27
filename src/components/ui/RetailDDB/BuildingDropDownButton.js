import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDropDowButtonDark } from '../../../styles/material-ui-styles/useDropDownDark';
import { useStylesMenuItem, styleMenuLight, styleMenuDark } from '../../../styles/material-ui-styles/menuStyle';
import { useDispatch, useSelector  } from 'react-redux';
import { changeBuildingR } from '../../../actions/retail';
//import { productionBuildings } from '../../../data/languajeData.js/productionBuildings';
import { verifyddbBuildingRetail } from '../../../auxiliar/verify';
import { buildingsProduction_index } from '../../../languaje/dropDownButtons/buildingProduction/buildingsProduction_index';

export const BuildingDropDownButton = () => {

  const dispatch = useDispatch();

  const dropDowButtonDarkStyle = useDropDowButtonDark();
  const classeMenuButton = useStylesMenuItem();

  const {mode, languaje} = useSelector(state => state.conf);
  const retailInfo = useSelector( state => state.retail );
  
  const [building, setBuilding] = useState(verifyddbBuildingRetail(retailInfo));
  const [open, setOpen] = useState(false);
  

  const { buildingLabel, buildingArray } = buildingsProduction_index[`${languaje}_buildingInfo`];

  const handleChange = (event) => {
    setBuilding(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {

    if(building !== ''){
      dispatch( changeBuildingR(building) );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [building]);

  return (
    <div>
      <FormControl className={ mode==='dark' ? dropDowButtonDarkStyle.formControl__dark: dropDowButtonDarkStyle.formControl_light }>

        <InputLabel 
          id="demo-controlled-open-select-label" 
          className={ mode==='dark' ? dropDowButtonDarkStyle.inputLabel_dark : dropDowButtonDarkStyle.inputLabel_light } 
        > 
          { buildingLabel }
        </InputLabel>
        
        <Select
          className={ mode==='dark' ? dropDowButtonDarkStyle.inputBase_dark : dropDowButtonDarkStyle.inputBase_light }  
          MenuProps={{classes: { list: classeMenuButton.list }}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={building}
          onChange={handleChange}
        >
          {
            buildingArray.map( ({id, name}) => (
              < MenuItem value={ id }  key={ id } style={ mode === 'dark' ? styleMenuDark : styleMenuLight  } 
              > { name } </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}