import { types } from '../types/types';

const initialState = [
    {
        id: 0,
        price: [0,0,0,0,0,0,0]
    }
] ;

const initialStateFromStorage = JSON.parse(localStorage.getItem('prices')) 
    || initialState;

export const pricesReducer = (state = initialStateFromStorage, action) => {
    switch (action.type) {
        case types.updatePrices:
            return action.payload;        
            
        case types.cleanPrices: 
            return initialState;
    
        case types.savePrices:
            localStorage.setItem( 'prices',JSON.stringify(state) || null );
            return state;

        default:
            return state;
    }
}