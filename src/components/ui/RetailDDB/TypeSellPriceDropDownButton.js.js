import React, {useState, useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDropDowButtonDark } from '../../../styles/material-ui-styles/useDropDownDark';
import { useStylesMenuItem, styleMenuLight, styleMenuDark  } from '../../../styles/material-ui-styles/menuStyle';
import { verifyddbTypeSellPrice } from '../../../auxiliar/verify';
import { changeTypeSellPrice } from '../../../actions/retail';
import { typeSellPrice_index } from '../../../languaje/dropDownButtons/typeSellPriceRetail/typeSellPrice_index';

export const TypeSellPriceDropDownButton = () => {

  const dispatch = useDispatch();
  const retailInfo = useSelector( state => state.retail );
  const {mode, languaje} = useSelector(state => state.conf);

  const dropDowButtonDarkStyle = useDropDowButtonDark();
  const classeMenuButton = useStylesMenuItem();

  const [typeSellPrice, setTypeSellPrice] = useState(verifyddbTypeSellPrice(retailInfo));
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setTypeSellPrice(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {

    switch (typeSellPrice) {
      case 'average':
          dispatch( changeTypeSellPrice('average') )
        break;
      
      case 'best':
          dispatch( changeTypeSellPrice('best') )
        break;

      default:
          //dispatch( changeProductionFaseToNormal() )
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeSellPrice]);

  const typeSellInfo = typeSellPrice_index[`${languaje}_typeSellPriceInfo`];
  const { typeSellPriceArray } = typeSellInfo;

  return (
    <div>
      <FormControl className={ mode==='dark' ? dropDowButtonDarkStyle.formControl__dark: dropDowButtonDarkStyle.formControl_light }>
        <InputLabel id="demo-controlled-open-select-label" 
        className={ mode==='dark' ? dropDowButtonDarkStyle.inputLabel_dark : dropDowButtonDarkStyle.inputLabel_light } >{ typeSellInfo.typeSellPriceLabel }</InputLabel>
        <Select
          className={ mode==='dark' ? dropDowButtonDarkStyle.inputBase_dark : dropDowButtonDarkStyle.inputBase_light }  
          MenuProps={{classes: { list: classeMenuButton.list }}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={typeSellPrice}
          onChange={handleChange}
        >
          {
            typeSellPriceArray.map( ({id,typeName}) => (
              <MenuItem value={id} key={id} style={ mode === 'dark' ? styleMenuDark : styleMenuLight } > { typeName } </MenuItem>    
            ) )
          }
        </Select>
      </FormControl>
    </div>
  );
}