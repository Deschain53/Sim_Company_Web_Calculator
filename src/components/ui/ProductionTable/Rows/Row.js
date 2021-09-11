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
    }).isRequired,
  };