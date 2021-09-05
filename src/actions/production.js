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

export const changeBuildingP = ( building = 'L' ) => {
    return (dispatch) => {
        dispatch(
            {
                type: types.changeBuildingP,
                payload: { building }
            }
        )
    }
}

export const updateInfoFormP = (faseInfo) => {
    return (dispatch) => {
        dispatch(
            {
                type: types.updateInfoFormP,
                payload: {faseInfo}
            }
        )
    }
}