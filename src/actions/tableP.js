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

export const updateUnitsHour = (productsJSON, {bonus, abundance}) => {
    return (dispatch) => {
        dispatch(
            {
                type: typesTableProduction.updateUnitsHour,
                payload: {productsJSON, bonus, abundance}
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

export const updatePricesItems = (marketPrices,{quality=0}) => {
    return (dispatch) => {
        dispatch(
            {
                type: typesTableProduction.updatePricesItems,
                payload: {marketPrices,quality}
            }
        )
    }
}

export const calculateTotalCostItems = () => {
    return (dispatch) => {
        dispatch(
            {
                type: typesTableProduction.calculateTotalCostItems
            }
        )
    }
}

export const calculateAdditionTotalCostItems = () => {
    return(dispatch) => {
        dispatch(
            {
                type: typesTableProduction.calculateAdditionTotalCostItems
            }
        )
    }
}

export const updateWagesItems = ( wagesBuilding = 0 ) => {
    return(dispatch) => {
        dispatch(
            {
                type: typesTableProduction.updateWagesItems ,
                payload: { wages: wagesBuilding }
            }
        )
    }
}

export const updateAdminItems = ({admin}) => {
    return(dispatch) => {
        dispatch(
            {
                type: typesTableProduction.updateAdminItems ,
                payload: ''
            }
        )
    }
}

export const calculateTotalCostFabrication  = () => {
    return(dispatch) => {
        dispatch(
            {
                type: typesTableProduction.calculateTotalCostFabrication ,
            }
        )
    }
}