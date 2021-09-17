import React, {useState, useEffect, useMemo} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDropDowButtonDark } from '../../../styles/material-ui-styles/useDropDownDark';
import { useStylesMenuItem, styleMenuLight, styleMenuDark } from '../../../styles/material-ui-styles/menuStyle';
import { useDispatch, useSelector  } from 'react-redux';
import { changeBuildingP } from '../../../actions/production';
import { productionBuildings } from '../../../data/languajeData.js/productionBuildings';
import { verifyddbBuilding } from '../../../auxiliar/verify';

const getBuildingsAccordingToLanguaje = ( languaje ) => {

  const pBuildings = productionBuildings();

  switch (languaje) {
    case 'english':
      return  pBuildings.english;

    case 'spanish':
      return pBuildings.spanish;
    
    default:
      return  pBuildings.english;
  }
}

export const BuildingDropDownButton = () => {

  const dispatch = useDispatch();

  const dropDowButtonDarkStyle = useDropDowButtonDark();
  const classeMenuButton = useStylesMenuItem();

  const {mode} = useSelector(state => state.conf);
  const { languaje } = useSelector( state => state.conf );
  const productionInfo = useSelector( state => state.production );
  
  const buildings = useMemo(() => getBuildingsAccordingToLanguaje(languaje), [languaje]);

  const [building, setFase] = useState(verifyddbBuilding(productionInfo));
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

    if(building !== ''){
      dispatch( changeBuildingP(building) );
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
          Building 
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
            buildings.map( ({id, name}) => (
              < MenuItem value={ id }  key={ id } style={ mode === 'dark' ? styleMenuDark : styleMenuLight  } 
              > { name } </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}