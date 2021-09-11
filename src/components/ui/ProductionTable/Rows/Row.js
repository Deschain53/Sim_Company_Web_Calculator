import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { RowNormalProduction } from './RowNormalProduction';
import { RowCollapsibleProduction } from './RowCollapsibleProduction';

export const Row = ({row}) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <RowNormalProduction
            row={ row }
            open={ open }
            setOpen= { setOpen }
        />
  
        <RowCollapsibleProduction
            row={ row }
            open={ open}
        />
      </>
    );
  }
  //Flat a agregar proptypes aqui para validar las sumatorias de los detalles
  Row.propTypes = {
    row: PropTypes.shape({
        product: PropTypes.string.isRequired,         
        cost: PropTypes.number.isRequired,
        marketPrice: PropTypes.number.isRequired,
        unitsHour: PropTypes.number.isRequired,
        profitHourMarket: PropTypes.number.isRequired,
      detail: PropTypes.arrayOf(
        PropTypes.shape({
            item: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            unitCost: PropTypes.number.isRequired,
            totalCost: PropTypes.number.isRequired,
        }),
      ).isRequired,
      resume: PropTypes.shape({
        totalCostItems: PropTypes.number.isRequired,
        wages: PropTypes.number.isRequired,
        administrationOverhead: PropTypes.number.isRequired,
        totalCostOfFabrication: PropTypes.number.isRequired,
      })

    }).isRequired,
  };