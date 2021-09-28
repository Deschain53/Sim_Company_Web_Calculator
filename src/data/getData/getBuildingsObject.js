import { buildingArrayString } from '../staticData/EdificiosArreglo';

export const getBuildingObjects = () =>{

    const getDoesUseArray = (array) => {
        const info = array.map( (materiaPrima) => (materiaPrima.db_letter));
        return info;
    }
 
    const buildingJSONs =  buildingArrayString.map( (building) => JSON.parse(building) ); 

    const buildingsObject = buildingJSONs.map( ({db_letter,name, doesProduce, doesSell,wages}) => (
        {
            idBuilding: db_letter,
            name,
            produce: getDoesUseArray(doesProduce),
            sell: getDoesUseArray(doesSell),
            wages
        }
    ));
 
    return buildingsObject; //Regresa un objecto con la informacion de interes
    }