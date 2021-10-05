import { types } from '../types/typesRetailProduction';

export const createData = (product,
    id,
    cost = 0, 
    sellingPrice = 0, 
    unitsHour = 0, 
    profitHour = 0, 
    productJSON = null,
  ) => {
  return {
    product,
    id,
    cost,
    sellingPrice,
    unitsHour,
    profitHour,
    productJSON,
  };
}

const initialState = [
    createData('.',1),
    createData('..',2),
    createData('...',3 ),
  ];

export const tableRetailReducer = (state = initialState, action) => {  
    switch (action.type) {
        case types.clean:
            return initialState;   

        case types.setJSONInformation:
            return  action.payload.productsJSON.map( productJSON => 
                createData(productJSON.name, productJSON.db_letter, 0, 0, 0, 0, productJSON)
            );

            
        default:
        return state;
    }
}