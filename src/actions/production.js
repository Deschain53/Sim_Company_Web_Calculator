import { types } from "../types/types";

export const changeProductionFaseToBoom = () => {
    return (dispatch) => {
        dispatch(
            {
                type: types.changeFaseP,
                payload: { fase: 'boom'}
            }
        )
    }
}

export const changeProductionFaseToNormal = () => {
    return (dispatch) => {
        dispatch(
            {
                type: types.changeFaseP,
                payload: { fase: 'normal'}
            }
        )
    }
}

export const changeProductionFaseToRecession = () => {
    return (dispatch) => {
        dispatch(
            {
                type: types.changeFaseP,
                payload: { fase: 'recession'}
            }
        )
    }
}