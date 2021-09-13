import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useProductsBuilding } from './useProductsBuilding';
import { updateNamesAndIds , updatePrices , updateNamesAmountAndIdsItems, updatePricesItems } from '../actions/tableP';

export const useCalculaProduction = () => {

    const dispatch = useDispatch();

    const  tableP  = useSelector( state => state.tableP );
    const  production  = useSelector( state => state.production );
    const  products  =  useSelector( state => state.products ); 
    const  prices  =  useSelector( state => state.prices );

    const {productsJSON} =  useProductsBuilding(products,production);

    useEffect(() => {
        dispatch( updateNamesAndIds(productsJSON) );
        dispatch( updatePrices(prices,production) );
        dispatch( updateNamesAmountAndIdsItems(productsJSON) );
        dispatch( updatePricesItems(prices,production) );
        // eslint-disable-next-line
      }, [production,prices]);
    
    return {
        tableP
    }
}