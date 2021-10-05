import { types } from "../types/typesRetailProduction"

export const setJSONInformation = (productsJSON) => {

    return (dispatch) => {

        dispatch( 
            {
                type: types.setJSONInformation,
                payload: { productsJSON }
            }
        )

        
    }
}

export const updateMarketPrices = (marketPrices, quality = 0) => {

    return (dispatch) => {

        dispatch( 
            {
                type: types.updateMarketPrices,
                payload: { marketPrices, quality }
            }
        )

        
    }
}

export const calculateUnitsHour = (bonus = 0, quality = 0) => {

    return (dispatch) => {

        dispatch( 
            {
                type: types.calculateUnitsHour,
                payload: { bonus, quality }
            }
        )

        
    }
}
