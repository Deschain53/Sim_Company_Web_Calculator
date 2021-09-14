import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useProductsBuilding } from './useProductsBuilding';
import { updateNamesAndIds , updatePrices , updateNamesAmountAndIdsItems, updatePricesItems, 
    calculateTotalCostItems, updateWagesItems, updateUnitsHour, calculateAdditionTotalCostItems, 
    updateAdminItems, calculateTotalCostFabrication, calculateProfitHourContract, calculateProfitHourMarket, 
    /*calculateProfitHourMarket*/ } from '../actions/tableP';

export const useCalculaProduction = () => {

    const dispatch = useDispatch();

    const  tableP  = useSelector( state => state.tableP );
    const  production  = useSelector( state => state.production );
    const  products  =  useSelector( state => state.products ); 
    const  prices  =  useSelector( state => state.prices );

    const {productsJSON, wages} =  useProductsBuilding(products,production);

    useEffect(() => {
        dispatch( updateNamesAndIds(productsJSON) );            //product-0
        dispatch( updateUnitsHour(productsJSON, production) );  //product-1
        dispatch( updatePrices(prices,production) );            //product-2

        dispatch( updateNamesAmountAndIdsItems(productsJSON) ); //detail-0
        dispatch( updatePricesItems(prices,production) );       //detail-1
        dispatch( calculateTotalCostItems() );                  //detail-2
        dispatch( calculateAdditionTotalCostItems() );          //detail-3
        dispatch( updateWagesItems(wages) );                    //detail-4
        dispatch( updateAdminItems(production));                //detail-4
        dispatch( calculateTotalCostFabrication());             //detail-end

        dispatch( calculateProfitHourContract(production,productsJSON, production));
        dispatch( calculateProfitHourMarket(production,productsJSON));
        
        // eslint-disable-next-line
      }, [production,prices]);
    
    return {
        tableP
    }
}