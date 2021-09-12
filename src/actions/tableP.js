import { typesTableProduction } from "../types/typesTableProduction";

export const updateNamesAndIds = (productsJSON) => {
    return (dispatch) => {

        dispatch( 
            {
                type: typesTableProduction.updateNamesAndIds,
                payload: productsJSON
            }
        )

        
    }
}

export const updatePrices = ( marketPrices, {quality}) => {
    return (dispatch) => {

        dispatch(
            {
                type: typesTableProduction.updatePrices,
                payload: { marketPrices, quality}
            }
        )

    }
}

export const updateNamesAmountAndIdsItems = (productsJSON) => {
    return (dispatch) => {
        dispatch(
            {
                type: typesTableProduction.updateNamesAmountAndIdsItems,
                payload: {productsJSON}
            }
        )
    }
}