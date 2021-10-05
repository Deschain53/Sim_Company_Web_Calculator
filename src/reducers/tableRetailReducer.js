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

export const getPrices = (idProduct, marketPrices) => {
    const pricesObject = marketPrices.find(({id}) => id === idProduct);
    if(pricesObject!== undefined){
        return pricesObject.precio;
    }else{
        return null;
    }
}

export const getPrice = (idProduct, marketPrices, quality) => {
    const prices = getPrices(idProduct, marketPrices);
    if(prices !== null){
        return prices[quality];
    }else{
        return -1;
    }
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
        
        case types.updateMarketPrices:
            const { marketPrices, quality } = action.payload;

            return  state.map( productTable => {
                const newPrice = getPrice( productTable.id, marketPrices, quality);
                
                return {
                    ...productTable,
                    cost: newPrice === undefined ? -1 : newPrice ,
                }
            });

            
        default:
        return state;
    }
}