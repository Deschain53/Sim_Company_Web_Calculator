import { types } from "../types/types";

const initialState = {
    quality: 0,
    fase:1, 
    building: 'L',
    buildingLevel:1,
    PVM: 0,
    admin: 0,
    bonus: 0,
    transport: 0,
}

const initialStateFromStorage = JSON.parse(localStorage.getItem('production')) 
    || initialState;

export const productionReducer = ( state = initialStateFromStorage, action ) => {
    switch (action.type) {
        case types.changeFaseP:
            return {
                ...state,
                fase: action.payload.fase
            };

        case types.changeBuildingP:
            return {
                ...state,
                building: action.payload.building
            }

        case types.updateInfoFormP:
            return {
                ...state,
                ...action.payload.infoForm
            }
        
        case types.changeQualityP:
            return {
                ...state,
                quality: action.payload.quality
            }

        case types.saveProductionInfo:
            localStorage.setItem('production', JSON.stringify(state));
            return {
                ...state
            }
    
        default:
            return state;
    }
}