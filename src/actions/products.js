import { types } from '../types/types';

export const updateProducts = (newProducts) => {
    return (dispatch) => {

        dispatch(
            {
                type: types.updateProducts,
                payload: newProducts
            }
        )

        dispatch({type: types.saveProducts});
    }
}