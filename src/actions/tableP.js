import { typesTableProduction } from "../types/typesTableProduction";

export const updateNamesAndIds = (productsJSON) => {
    const newProductsJSONWithIdAndName= productsJSON.map( ({db_letter,name}) => (
        {db_letter,name}));

    return (dispatch) => {

        dispatch( 
            {
                type: typesTableProduction.updateNamesAndIds,
                payload: newProductsJSONWithIdAndName
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

    const newProductsJSONWithIDAndProducedHour = productsJSON.map( ({db_letter,producedAnHour}) => (
        {db_letter,producedAnHour}));

    return (dispatch) => {
        dispatch(
            {
                type: typesTableProduction.updateUnitsHour,
                payload: {productsJSON:newProductsJSONWithIDAndProducedHour, bonus, abundance}
            }
        )
    }
}

export const updateNamesAmountAndIdsItems = (productsJSON) => {

    const newProductsJSONWithProducedFrom = productsJSON.map( ({db_letter,producedFrom}) => {
        const newProducedFrom = producedFrom.map(({amount,resource}) => {
            const id = resource.db_letter;
            const name = resource.name;
            return { amount ,
                     resource: {db_letter: id,
                                name}
                    }
        });
        
        return {db_letter,producedFrom: newProducedFrom}
    });

    return (dispatch) => {
        dispatch(
            {
                type: typesTableProduction.updateNamesAmountAndIdsItems,
                payload: {productsJSON: newProductsJSONWithProducedFrom}
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