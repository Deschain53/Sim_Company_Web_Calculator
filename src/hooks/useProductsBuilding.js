import { useState } from "react";
import { getBuilding } from "../data/getData/getBuilding";

export const useProductsBuilding = ({productsNormalJSON, productsBoomJSON, productsRecessionJSON },
    {fase, building:buildingId}) => { 

    const selectInitialJSON = () => {
        switch (fase) {
            case 0:
                return productsRecessionJSON;
            
            case 1:
                return productsNormalJSON;
            
            case 2:
                return productsBoomJSON;
        
            default:
                return productsRecessionJSON;
        }
    }

    const [allProductsJSON] = useState(selectInitialJSON);

    const building = getBuilding(buildingId);

    const productsJSON = building.produce.map( id => allProductsJSON.find( ({db_letter}) => id === db_letter ) );

    return {productsJSON}
}