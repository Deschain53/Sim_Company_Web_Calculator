import { types } from "../types/types";


export const productionReducer = ( state = { fase:'boom' }, action ) => {
    switch (action.type) {
        case types.changeFaseP:
            return {
                ...action.payload,
                fase: action.payload.fase
            };
    
        default:
            return state;
    }
}