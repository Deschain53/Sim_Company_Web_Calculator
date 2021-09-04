import { getJSONProductsLocal } from '../data/getData/getJSONProductsLocal';
import { types } from '../types/types';

const initialState = getJSONProductsLocal();

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.updateProducts:
            return action.payload;        
            
        case types.resetProducts:
            return initialState ;
    
        default:
            return state;
    }
}