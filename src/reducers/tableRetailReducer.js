import { types } from '../types/typesRetailProduction';
import { createData, getPrice, getUnitsHourDefault } from './auxiliarReducers/tableRetailReducerAux';


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
            return  state.map( productTable => {

                const { marketPrices, quality, PCM } = action.payload;
                const newPrice = getPrice( productTable.id, marketPrices, quality);
                
                return {
                    ...productTable,
                    cost: newPrice === undefined ? -1 : (newPrice*(100-PCM)/100) ,
                }
            });

        case types.updateCostOfOneProduct:
            const productInformationCost = state.find(({id}) => id === action.payload.idProduct );
            const newProductInformationCost = {...productInformationCost, cost: action.payload.newPrice};
            return state.map( productInfo => {
                if(productInfo.id === action.payload.idProduct){
                    return newProductInformationCost;
                }else{
                    return productInfo;
                }
            });     

        case types.updateSellPriceOfOneProduct: 
            console.log(action.payload);
            const productInformationSell = state.find(({id}) => id === action.payload.idProduct );
            const newProductInformationSell = {...productInformationSell, sellingPrice: action.payload.newPrice};
            console.log(newProductInformationSell);
            return state.map( productInfo => {
                if(productInfo.id === action.payload.idProduct){
                    return newProductInformationSell;
                }else{
                    return productInfo;
                }
            });            
            
        case types.updateSellPrice:
            return  state.map( productTable => {

                const { retailData } = productTable.productJSON;
                const averageRetailPrice = retailData[retailData.length - 1].averagePrice;
                const newSellingPrice = averageRetailPrice; //Ponerlo condicional usando productTable.sellingPrice********
                
                return {
                    ...productTable,
                    sellingPrice: newSellingPrice === undefined ? -1 : newSellingPrice ,
                }
            });

        case types.calculateUnitsHour:
            return state.map( productTable => {

                const { bonus, quality } = action.payload;
                const { retailModeling, marketSaturation, /*retailData */} = productTable.productJSON;

                const unitsHourDefault = getUnitsHourDefault( retailModeling, 
                    quality, marketSaturation , productTable.sellingPrice );
                
                const newUnitsHour = unitsHourDefault/(1-(bonus/100));

                return {
                    ...productTable,
                    unitsHour: newUnitsHour === undefined ? -1 : newUnitsHour ,
                }
            });

        case types.calculateProfitHour:
            return state.map( productTable => {

                const { unitsHour, cost, sellingPrice } = productTable;
                const { wages, admin } = action.payload;
                const employCost = wages*( 1 + admin/100);
                const newProfitHour = (sellingPrice - cost) * unitsHour - employCost;
                return {
                    ...productTable,
                    profitHour: newProfitHour,
                }
            });

            

        default:
        return state;
    }
}