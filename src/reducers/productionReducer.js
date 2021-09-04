import { types } from "../types/types";

export const productionReducer = ( state = { fase:'normal', building: 'L' }, action ) => {
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
    
        default:
            return state;
    }
}