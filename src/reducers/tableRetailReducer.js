import { StarsTwoTone } from '@material-ui/icons';
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

                const { marketPrices, quality } = action.payload;
                const newPrice = getPrice( productTable.id, marketPrices, quality);
                
                return {
                    ...productTable,
                    cost: newPrice === undefined ? -1 : newPrice ,
                }
            });

        case types.updateCostOfOneProduct:
            console.log(action.payload);
            const productInformation = state.find(({id}) => id === action.payload.idProduct );
            const newProductInformation = {...productInformation, cost: action.payload.newPrice};
            console.log(newProductInformation);
            return state.map( productInfo => {
                if(productInfo.id === action.payload.idProduct){
                    return newProductInformation;
                }else{
                    return productInfo;
                }
            } )
            //console.log(productInformation);

            //return  state;
            
            
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
                const { retailModeling, marketSaturation, retailData } = productTable.productJSON;

                const unitsHourDefault = getUnitsHourDefault( retailModeling, 
                    quality, marketSaturation , productTable.sellingPrice );
                
                const newUnitsHour = unitsHourDefault/(1-(bonus/100));

                return {
                    ...productTable,
                    unitsHour: newUnitsHour === undefined ? -1 : newUnitsHour ,
                }
            });

            
        default:
        return state;
    }
}