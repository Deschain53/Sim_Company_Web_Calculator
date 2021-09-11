import { typesTableProduction } from '../types/typesTableProduction';

const createData = (product,
    cost = 0, 
    marketPrice = 0, 
    unitsHour = 0, 
    profitHourMarket = 0, 
    profitHourContract = 0,
  ) => {
  return {
    product,
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
    createData('.'),
    createData('..'),
    createData('...' ),
  ];

export const tableProductionReducer = (state = initialState, action) => {  
    switch (action.type) {
        case typesTableProduction.clean:
            return initialState;        
    
        default:
            return state;
    }
}