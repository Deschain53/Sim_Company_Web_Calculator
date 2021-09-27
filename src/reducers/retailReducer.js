import { types } from "../types/types";

const initialState = {
    quality: 0,
    fase: 1, 
    building: 'L',
    buildingLevel: 1,
    PCM: 0,
    admin: 0,
    bonus: 0,
    typeSellPrice: 'average',
}

const initialStateFromStorage = JSON.parse(localStorage.getItem('retail')) 
    || initialState;

export const retailReducer = ( state = initialStateFromStorage, action ) => {
    switch (action.type) {
        case types.changeFaseR:
            return {
                ...state,
                fase: action.payload.fase
            };

        case types.changeBuildingR:
            return {
                ...state,
                building: action.payload.building
            }

        case types.updateInfoFormR:
            return {
                ...state,
                ...action.payload.infoForm
            }
        
        case types.changeQualityR:
            return {
                ...state,
                quality: action.payload.quality
            }

        case types.saveProductionInfoR:
            localStorage.setItem('retail', JSON.stringify(state));
            return {
                ...state
            }
    
        default:
            return state;
    }
}