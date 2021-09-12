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

    const [productsJSON] = useState(selectInitialJSON);

    const building = getBuilding(buildingId);

    console.log(building);

    return {productsJSON }
}