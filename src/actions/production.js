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

export const updateInfoFormP = (infoForm) => {
    return (dispatch) => {
        dispatch(
            {
                type: types.updateInfoFormP,
                payload: {infoForm}
            }
        )
    }
}

export const changeQualityP = (newQuality) => {
    return (dispatch) => {
        dispatch(
            {
                type: types.changeQualityP,
                payload: {quality:newQuality}
            }
        )
    }
}

export const saveInLocalStorageProduction = () => {
    return (dispatch) => {
        dispatch(
            {
                type: types.saveProductionInfo
            }
        )
    }
}