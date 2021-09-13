import { typesTableProduction } from '../types/typesTableProduction';
import { createData, getStateWWithMarketPrices, getStateWithNameIdAndAmoutItem, getStateWithDetailItemsPriced } from './auxiliarReducers/tableProductionReducerAux';

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
        const stateWithNameIdAndAmoutItem =  getStateWithNameIdAndAmoutItem(state, action.payload.productsJSON)
        return stateWithNameIdAndAmoutItem;

        case typesTableProduction.updatePricesItems: 
        const stateWithItemsPriced = getStateWithDetailItemsPriced(state, action.payload.marketPrices, action.payload.quality);
        return stateWithItemsPriced;

        default:
            return state;
    }
}