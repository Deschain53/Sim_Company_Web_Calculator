import { typesTableProduction } from '../types/typesTableProduction';
import { createData, getStateWWithMarketPrices, getStateWithNameIdAndAmoutItem } from './auxiliarReducers/tableProductionReducerAux';

const initialState = [
    createData('.',1),
    createData('..',2),
    createData('...',3 ),
  ];

export const tableProductionReducer = (state = initialState, action) => {  
    switch (action.type) {
        case typesTableProduction.clean:
            return initialState;   
            
        case typesTableProduction.updateNamesAndIds:
          const newDataNameId = action.payload.map( ({db_letter,name}) => createData(name,db_letter));
        return newDataNameId;

        case typesTableProduction.updatePrices:
        const newState =  getStateWWithMarketPrices(state, action.payload.marketPrices, action.payload.quality );
        return newState;

        case typesTableProduction.updateNamesAmountAndIdsItems:
        const newState2 =  getStateWithNameIdAndAmoutItem(state, action.payload.productsJSON)
        return newState2;

        default:
            return state;
    }
}