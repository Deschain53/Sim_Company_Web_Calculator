import { types } from "../types/types";

export const checkIfPricesAreInitilizedFromStorage = () => {
    return ( dispatch ) => {

            dispatch({
                type: types.checkingPricesInStorage,
                payload: localStorage.getItem('prices') === null ? false : true
            })

    }
}