import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { RowNormalRetail } from './RowNormalRetail';


export const Row = ({row}) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <RowNormalRetail
            row={ row }
            open={ open }
            setOpen= { setOpen }
        />
      </>
    );
  }
  //Flat a agregar proptypes aqui para validar las sumatorias de los detalles
  Row.propTypes = {
    row: PropTypes.shape({
        product: PropTypes.string.isRequired,         
        cost: PropTypes.number.isRequired,
        sellingPrice: PropTypes.number.isRequired,
        unitsHour: PropTypes.number.isRequired,
        profitHour: PropTypes.number.isRequired,
    }).isRequired,
  };