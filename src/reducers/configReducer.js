//This reducer is going to handle the configuration of the entire app. For example the dark/light
//mode and the languaje
import { types } from '../types/types';

const initialState = { 
    mode: 'dark', 
    languaje: 'english' , 
    pricesInitilizedFromStorage: 'false', 
    }; 

const initialStateFromStorage = JSON.parse(localStorage.getItem('conf')) || initialState;
//src={heroImages(`./${ id }.jpg`).default}  --> Para seleccionar un objeto de acuerdo a string
export const configReducer = ( state = initialStateFromStorage, action ) => {

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

        case types.changeLanguaje:
            return {
                ...state,
                languaje: action.payload.languaje
            }

        case types.saveConfState:
            localStorage.setItem( 'conf',JSON.stringify(state) );  
            return {
                ...state
            }

        default:
            return state;

    }

}
