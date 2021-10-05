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
            
        
        case types.calculateUnitsHour:
            return state.map( productTable => {
                
                const { bonus, quality } = action.payload;
                const { retailModeling, marketSaturation, retailData } = productTable.productJSON;
                const averageRetailPrice = retailData[retailData.length - 1].averagePrice;

                const price = averageRetailPrice; //conditional depending of the sell mode

                const unitsHourDefault = getUnitsHourDefault( retailModeling, 
                    quality, marketSaturation , price );
                
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