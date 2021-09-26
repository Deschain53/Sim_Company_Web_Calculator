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
                <div className="col-12"> 
                
                    <div className="row">
                        <InstructionsProduction instructions={instructions}/>
                    </div>

                    <div className="row">
                        <ConsiderationsProduction instructions={instructions}/>
                    </div>

                    <div className="row">
                        <ProductionTableParts instructions={instructions}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}