import React, {useState, useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDropDowButtonDark } from '../../../styles/material-ui-styles/useDropDownDark';
import { useStylesMenuItem, styleMenuLight, styleMenuDark  } from '../../../styles/material-ui-styles/menuStyle';
import { changeProductionFaseToBoom, changeProductionFaseToNormal, changeProductionFaseToRecession } from '../../../actions/production';
import { verifyddbFase } from '../../../auxiliar/verify';
import { fase_index } from '../../../languaje/dropDownButtons/fase/fase_index';

export const FaseDropDownButton = () => {

  const dispatch = useDispatch();
  const productionInfo = useSelector( state => state.production );
  const {mode, languaje} = useSelector(state => state.conf);

  const dropDowButtonDarkStyle = useDropDowButtonDark();
  const classeMenuButton = useStylesMenuItem();

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

      default:
          //dispatch( changeProductionFaseToNormal() )
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase]);

  const faseInfo = fase_index[`${languaje}_faseInfo`];
  const { faseArray } = faseInfo;

  return (
    <div>
      <FormControl className={ mode==='dark' ? dropDowButtonDarkStyle.formControl__dark: dropDowButtonDarkStyle.formControl_light }>
        <InputLabel id="demo-controlled-open-select-label" 
        className={ mode==='dark' ? dropDowButtonDarkStyle.inputLabel_dark : dropDowButtonDarkStyle.inputLabel_light } >{ faseInfo.faseLabel }</InputLabel>
        <Select
          className={ mode==='dark' ? dropDowButtonDarkStyle.inputBase_dark : dropDowButtonDarkStyle.inputBase_light }  
          MenuProps={{classes: { list: classeMenuButton.list }}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={fase}
          onChange={handleChange}
        >
          {
            faseArray.map( ({id,faseName}) => (
              <MenuItem value={id} key={id} style={ mode === 'dark' ? styleMenuDark : styleMenuLight } > { faseName } </MenuItem>    
            ) )
          }
        </Select>
      </FormControl>
    </div>
  );
}