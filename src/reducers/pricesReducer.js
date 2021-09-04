import { types } from '../types/types';

const initialState = [
    {
        id: 0,
        price: [0,0,0,0,0,0,0]
    }
] ;

export const pricesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.updatePrices:
            return action.payload;        
            
        case types.cleanPrices: 
            return initialState;
    
        default:
            return state;
    }
}