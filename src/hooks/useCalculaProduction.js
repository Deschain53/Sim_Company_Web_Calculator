import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useProductsBuilding } from './useProductsBuilding';
import { updateNamesAndIds , updatePrices , updateNamesAmountAndIdsItems, updatePricesItems, 
    calculateTotalCostItems, updateWagesItems, updateUnitsHour, calculateAdditionTotalCostItems, updateAdminItems } from '../actions/tableP';

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
        dispatch( updatePrices(prices,production) );            

        dispatch( updateNamesAmountAndIdsItems(productsJSON) ); //detail-0
        dispatch( updatePricesItems(prices,production) );       //detail-1
        dispatch( calculateTotalCostItems() );                  //detail-2
        dispatch( calculateAdditionTotalCostItems() );          //detail-3
        dispatch( updateWagesItems(wages) );  
        dispatch( updateAdminItems(production));
        //calculate admin
        //calculate total cost fabrication
        
        // eslint-disable-next-line
      }, [production,prices]);
    
    return {
        tableP
    }
}