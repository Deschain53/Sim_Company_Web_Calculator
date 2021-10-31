import React from 'react';
import { BuildingDropDownButton } from './BuildingDropDownButton';
import { FaseDropDownButton } from './FaseDropDownButton';
import { QualityDropDownButton } from './QualityDropDownButton';
//import { TypeSellPriceDropDownButton } from './TypeSellPriceDropDownButton';

export const DropDownButtonRetailContainer = () => {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-sm align-items-center"><BuildingDropDownButton/></div>
                <div className="col-sm align-items-center"><FaseDropDownButton/></div>
                <div className="col-sm align-items-center"><QualityDropDownButton/></div>
                {/*<div className="col-sm align-items-center"><TypeSellPriceDropDownButton/></div>*/}
            </div>

        </div>
    )
}
