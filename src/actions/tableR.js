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