import { types } from "../types/types";

const selectValidLanguaje = (id) => {
    switch (id) {
        case 'english':
            return 'english'
    
        case 'spanish':
            return 'spanish'

        default:
            return 'english';
    }

}

export const checkIfPricesAreInitilizedFromStorage = () => {
    return ( dispatch ) => {
            dispatch({
                type: types.checkingPricesInStorage,
                payload: localStorage.getItem('prices') === null ? false : true
            })
    }
}

export const checkIfRetailsAreInitilizedFromStorage = () => {
    return ( dispatch ) => {
            dispatch({
                type: types.checkingRetailsInStorage,
                payload: localStorage.getItem('products') === null ? false : true
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

export const changeLanguaje = (id) => {
    const languaje = selectValidLanguaje(id);

    return ( dispatch ) => {

        dispatch({
            type: types.changeLanguaje,
            payload: { languaje: languaje}
        })


    }

}

export const saveConfState = () => {
    
    return ( dispatch ) => {
        dispatch({
            type: types.saveConfState
        })
    }
}

