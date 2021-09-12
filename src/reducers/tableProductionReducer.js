import { typesTableProduction } from '../types/typesTableProduction';

const createData = (product,
    id,
    cost = 0, 
    marketPrice = 0, 
    unitsHour = 0, 
    profitHourMarket = 0, 
    profitHourContract = 0,
  ) => {
  return {
    product,
    id,
    cost,
    marketPrice,
    unitsHour,
    profitHourMarket,
    profitHourContract,
    detail:[
      { item: '.', amount: 0, unitCost: 0 ,totalCost: 0 },
      { item: '..', amount: 0, unitCost: 0, totalCost: 0 },
      { item: '...', amount: 0, unitCost: 0, totalCost: 0 },
    ],
    resume: {
      totalCostItems: 0,
      wages: 0,
      administrationOverhead: 0,
      totalCostOfFabrication: 0
    }
  };
}

const initialState = [
    createData('.',1),
    createData('..',2),
    createData('...',3 ),
  ];

export const tableProductionReducer = (state = initialState, action) => {  
    switch (action.type) {
        case typesTableProduction.clean:
            return initialState;   
            
        case typesTableProduction.updateNamesAndIds:
          const newDataNameId = action.payload.map( ({db_letter,name}) => createData(name,db_letter));
        return newDataNameId;

        default:
            return state;
    }
}