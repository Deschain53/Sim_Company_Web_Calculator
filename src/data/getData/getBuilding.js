import { getBuildingObjects } from "./getBuildingsObject";

export const getBuilding = (id) => {
    const buildingsObject = getBuildingObjects();

    const building = buildingsObject.find( ({idBuilding})  => id === idBuilding);

    return building;
}