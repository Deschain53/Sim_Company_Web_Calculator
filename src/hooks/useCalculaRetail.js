import { useEffect, useMemo, useState } from 'react';
//import { evaluate } from 'mathjs';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBuildingRetail } from '../data/getData/getProductsBuilding';
import { setJSONInformation, updateMarketPrices, updateSellPrice, calculateUnitsHour, 
    calculateProfitHour } from '../actions/tableR';

export const useCalculaRetail = () => {

    const dispatch = useDispatch();

    const  retail  = useSelector( state => state.retail );
    const  products  =  useSelector( state => state.products );
    const  tableR  = useSelector( state => state.tableR );
    const  prices  = useSelector( state => state.prices );

    const [isFirstRender, setIsFirstRender] = useState(true);

    const {quality,fase,building,PCM,admin, bonus, typeSellPrice} = retail;

    const {productsJSON, wages} = useMemo(() => getProductsBuildingRetail(products,fase,building), [products,fase,building]);

    useEffect(() => {
        dispatch( setJSONInformation( productsJSON) );
        dispatch( updateMarketPrices( prices, quality, PCM) );
        dispatch( updateSellPrice(typeSellPrice));
        dispatch( calculateUnitsHour( bonus, quality) );
        dispatch( calculateProfitHour(admin,wages) );
        setIsFirstRender(false);
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(!isFirstRender){
            dispatch( setJSONInformation( productsJSON) );
            dispatch( updateMarketPrices( prices, quality, PCM) );
            dispatch( updateSellPrice(typeSellPrice));
            dispatch( calculateUnitsHour( bonus, quality) );
            dispatch( calculateProfitHour(admin,wages) );    
        }
        // eslint-disable-next-line
    }, [productsJSON])

    useEffect(() => {
        if(!isFirstRender){
            dispatch( updateMarketPrices( prices, quality, PCM) );
            dispatch( calculateUnitsHour( bonus, quality) );
            dispatch( calculateProfitHour(admin,wages) );    
        }
        // eslint-disable-next-line
    }, [prices, quality, bonus, PCM, admin,wages])
  
    return { tableR , productsJSON }
}