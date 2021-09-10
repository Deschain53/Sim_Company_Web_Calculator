//This reducer is going to handle the configuration of the entire app. For example the dark/light
//mode and the languaje
import { types } from '../types/types';

const initialState = { 
    mode: 'dark', 
    languaje: 'english' , 
    pricesInitilizedFromStorage: 'false', 
    }; 

export const configReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.darkMode:
            return {
                ...action.payload,
                mode: 'dark'
            }
    
        case types.ligthMode:
            return {
                ...action.payload,
                mode: 'light'
            }
        
        case types.checkingPricesInStorage:
            return {
                ...state,
                pricesInitilizedFromStorage: action.payload  
            }

        default:
            return state;

    }

}
