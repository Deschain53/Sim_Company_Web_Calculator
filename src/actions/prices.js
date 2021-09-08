import { types } from '../types/types';

export const getPricesFromInternet = () => {
    return (dispatch) => {

        const prices = [{ id: 123, precios: [1,2,3,4,5,6]}];
        
        console.log(prices);

        dispatch(
            {
                type: types.updatePrices,
                payload: prices
            }
        )

        dispatch({type: types.savePrices});
    }
}