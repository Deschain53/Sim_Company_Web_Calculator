import { types } from '../types/types';



export const updatePrices = (newPrices) => {
    return (dispatch) => {

        //const prices = [{ id: 123, precios: [1,2,3,4,5,6]}];
         //getPricesFunction();

        console.log(newPrices);

        dispatch(
            {
                type: types.updatePrices,
                payload: newPrices
            }
        )

        dispatch({type: types.savePrices});
    }
}