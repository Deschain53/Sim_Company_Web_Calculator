import React, {useState, useEffect} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { dropDowButtonDark } from '../../../styles/material-ui-styles/dropDownDark';
import { useDispatch , useSelector } from 'react-redux';
import { changeProductionFaseToBoom, 
  changeProductionFaseToNormal, 
  changeProductionFaseToRecession 
} from '../../../actions/production';
import { verifyddbFase } from '../../../auxiliar/verify';

export const FaseDropDownButton = () => {

  const dispatch = useDispatch();
  const productionInfo = useSelector( state => state.production );
  const {mode} = useSelector(state => state.conf);

  const dropDowButtonDarkStyle = dropDowButtonDark();

  const [fase, setFase] = useState(verifyddbFase(productionInfo));
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

      /*case '':
        break;*/

      default:
          //dispatch( changeProductionFaseToNormal() )
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase]);

  return (
    <div>
      <FormControl className={ mode==='dark' ? dropDowButtonDarkStyle.formControl__dark: dropDowButtonDarkStyle.formControl_light }>
        <InputLabel id="demo-controlled-open-select-label" 
        className={ mode==='dark' ? dropDowButtonDarkStyle.inputLabel_dark : dropDowButtonDarkStyle.inputLabel_light } >Fase</InputLabel>
        <Select
          className={ mode==='dark' ? dropDowButtonDarkStyle.inputBase_dark : dropDowButtonDarkStyle.inputBase_light }  
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={fase}
          onChange={handleChange}
        >
          <MenuItem value={0} >Recession</MenuItem>    
          <MenuItem value={1} >Normal</MenuItem>
          <MenuItem value={2} >Boom</MenuItem>  
        </Select>
      </FormControl>
    </div>
  );
}