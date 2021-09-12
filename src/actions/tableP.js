import { typesTableProduction } from "../types/typesTableProduction";

export const updateNamesAndIds = (productsJSON) => {
    return (dispatch) => {

        console.log('Aqui se mostrará un Array');
        console.log(productsJSON);

        dispatch(
            {
                type: typesTableProduction.updateNamesAndIds,
                payload: productsJSON
            }
        )

        
    }
}