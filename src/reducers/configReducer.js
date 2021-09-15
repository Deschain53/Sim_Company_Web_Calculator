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
                ...state,
                mode: 'dark'
            }
    
        case types.ligthMode:
            return {
                ...state,
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
