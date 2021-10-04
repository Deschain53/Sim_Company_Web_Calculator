import { typesTableProduction } from '../types/typesTableProduction';

export const createData = (product,
    id,
    cost = 0, 
    sellingPrice = 0, 
    unitsHour = 0, 
    profitHour = 0, 

  ) => {
  return {
    product,
    id,
    cost,
    sellingPrice,
    unitsHour,
    profitHour
  };
}

const initialState = [
    createData('.',1),
    createData('..',2),
    createData('...',3 ),
  ];

export const tableRetailReducer = (state = initialState, action) => {  
    switch (action.type) {
        case typesTableProduction.clean:
            return initialState;   
            
        default:
        return state;
    }
}