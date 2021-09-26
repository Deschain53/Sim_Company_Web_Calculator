import React from 'react';
import { useSelector } from 'react-redux';
import { instructions_index } from '../../languaje/instructions/instructions_index';
import { ConsiderationsProduction } from './InstructionsSections/ConsiderationsProduction';
import { InstructionsProduction } from './InstructionsSections/InstructionsProduction';
import { ProductionTableParts } from './InstructionsSections/ProductionTableParts';

export const Instructions = () => {
    const { languaje } = useSelector(state => state.conf);
    const instructions = instructions_index[`${languaje}_instructions`];

    return (
        <div className="window-app">

            <div className="container-xxl">

                <div className="row">
                    <h2 className="h2 mt-2 mb-3" >{ instructions.productionTitle }</h2>
                    <InstructionsProduction instructions={instructions}/>
                </div>

                <div className="row">
                    <h2 className="h3 mt-2 mb-3" >{ instructions.considerationsTitle }</h2>
                    <ConsiderationsProduction instructions={instructions}/>
                </div>

                <div className="row">
                    <h3> { instructions.partsProductionTitle } </h3>
                    <ProductionTableParts instructions={instructions}/>
                </div>


            </div>


        </div>
    )
}