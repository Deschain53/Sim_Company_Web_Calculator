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

export const updateMarketPrices = (marketPrices, quality = 0, PCM =0) => {

    return (dispatch) => {

        dispatch( 
            {
                type: types.updateMarketPrices,
                payload: { marketPrices, quality, PCM }
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

export const calculateProfitHour = (admin = 0,wages = 1) => {
    return (dispatch) => {
        dispatch( 
            {
                type: types.calculateProfitHour,
                payload: { admin,wages }
            }
        )        
    }
}

export const updateSellPrice = (typeSellPrice='average') => {

    return (dispatch) => {

        dispatch( 
            {
                type: types.updateSellPrice,
                payload: { typeSellPrice }
            }
        )

        
    }
}

export const updateCostOfOneProduct = (idProduct = 1, newPrice = 0) => {
    return (dispatch) => {
        dispatch( 
            {
                type: types.updateCostOfOneProduct,
                payload: { idProduct, newPrice }
            }
        )
    }
}

export const updateSellPriceOfOneProduct = (idProduct = 1, newPrice = 0) => {
    return (dispatch) => {
        dispatch( 
            {
                type: types.updateSellPriceOfOneProduct,
                payload: { idProduct, newPrice }
            }
        )
    }
}
