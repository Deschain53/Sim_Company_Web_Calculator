import { types } from '../types/types';



export const updatePrices = (newPrices) => {
    return (dispatch) => {

        dispatch(
            {
                type: types.updatePrices,
                payload: newPrices
            }
        )

        dispatch({type: types.savePrices});
    }
}