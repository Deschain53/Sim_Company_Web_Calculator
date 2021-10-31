import { getJSONProductsLocal } from '../data/getData/getJSONProductsLocal';
import { types } from '../types/types';

const initialState = getJSONProductsLocal();
//falta funcion para comprobar si hay JSON en localStorage para usar eso

const initialStateFromStorage = JSON.parse(localStorage.getItem('products')) 
    || initialState;

export const productReducer = (state = initialStateFromStorage, action) => {
    switch (action.type) {
        case types.updateProducts:
            return action.payload;        
            
        case types.resetProducts:
            return initialState ;

        case types.saveProducts:
            localStorage.setItem( 'products',JSON.stringify(state) || null );
            return state;
    
        default:
            return state;
    }
}