import { types } from "../types/types";

export const checkIfPricesAreInitilizedFromStorage = () => {
    return ( dispatch ) => {

            dispatch({
                type: types.checkingPricesInStorage,
                payload: localStorage.getItem('prices') === null ? false : true
            })

    }
}

export const setModeToDark = () => {
    return ( dispatch ) => {
        dispatch({
            type: types.darkMode
        })
    }
}

export const setModeToLight = () => {
    return ( dispatch ) => {
        dispatch({
            type: types.ligthMode
        })
    }
}
