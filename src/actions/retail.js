import { types } from "../types/types";

export const changeRetailFaseToBoom = () => {
    return (dispatch) => {
        dispatch(
            {
                type: types.changeFaseP,
                payload: { fase: 2}
            }
        )
    }
}

export const changeRetailFaseToNormal = () => {
    return (dispatch) => {
        dispatch(
            {
                type: types.changeFaseP,
                payload: { fase: 1}
            }
        )
    }
}

export const changeRetailFaseToRecession = () => {
    return (dispatch) => {
        dispatch(
            {
                type: types.changeFaseP,
                payload: { fase: 0}
            }
        )
    }
}

export const changeBuildingR = ( building = 'L' ) => {
    return (dispatch) => {
        dispatch(
            {
                type: types.changeBuildingP,
                payload: { building }
            }
        )
    }
}

export const updateInfoFormR = (infoForm) => {
    return (dispatch) => {
        dispatch(
            {
                type: types.updateInfoFormR,
                payload: {infoForm}
            }
        )
    }
}

export const changeQualityR = (newQuality) => {
    return (dispatch) => {
        dispatch(
            {
                type: types.changeQualityP,
                payload: {quality:newQuality}
            }
        )
    }
}

export const saveInLocalStorageRetail = () => {
    return (dispatch) => {
        dispatch(
            {
                type: types.saveRetailInfo
            }
        )
    }
}