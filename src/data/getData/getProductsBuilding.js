import { getBuilding } from "./getBuilding";

export const getProductsBuildingProduction = ({productsNormalJSON, productsBoomJSON, productsRecessionJSON },
    fase, buildingId='L') => {

    const selectJSON = (fase) => {
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
    
    const allProductsJSON = selectJSON(fase);

    const building = getBuilding(buildingId);
    const { wages } = building;

    const productsJSON = building.produce.map( id => allProductsJSON.find( ({db_letter}) => id === db_letter ) );

    return { wages, productsJSON }
}

export const getProductsBuildingRetail = ({productsNormalJSON, productsBoomJSON, productsRecessionJSON },
    fase, buildingId='C') => {

    const selectJSON = (fase) => {
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
    const allProductsJSON = selectJSON(fase);
    
    const building = getBuilding(buildingId);
    
    const { wages } = building;

    const productsJSON = building.sell.map( id => allProductsJSON.find( ({db_letter}) => id === db_letter ) );

    return { wages, productsJSON }
}