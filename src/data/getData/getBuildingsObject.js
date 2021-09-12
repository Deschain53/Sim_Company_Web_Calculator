import { buildingArrayString } from '../staticData/EdificiosArreglo';

export const getBuildingObjects = () =>{

    const getDoesProduceArreglo = (produceArreglo) => {
        const info = produceArreglo.map( (materiaPrima) => (materiaPrima.db_letter));
        return info;
    }
 
    const buildingJSONs =  buildingArrayString.map( (building) => JSON.parse(building) ); 

    const buildingsObject = buildingJSONs.map( ({db_letter,name, doesProduce,wages}) => (
        {
            idBuilding: db_letter,
            name,
            produce: getDoesProduceArreglo(doesProduce),
            wages
        }
    ));
 
    return buildingsObject; //Regresa un objecto con la informacion de interes
    }