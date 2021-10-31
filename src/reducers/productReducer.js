import { getJSONProductsLocal } from '../data/getData/getJSONProductsLocal';
import { types } from '../types/types';

const initialState = getJSONProductsLocal();
//falta funcion para comprobar si hay JSON en localStorage para usar eso

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.updateProducts:
            return action.payload;        
            
        case types.resetProducts:
            return initialState ;

        //falta save prices para guardar en memoria los productos
    
        default:
            return state;
    }
}