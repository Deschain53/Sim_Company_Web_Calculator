import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNamesAndIds , updatePrices , updateNamesAmountAndIdsItems, updatePricesItems, 
    calculateTotalCostItems, updateWagesItems, updateUnitsHour, calculateAdditionTotalCostItems, 
    updateAdminItems, calculateTotalCostFabrication, calculateProfitHourContract, calculateProfitHourMarket, 
    updateLanguajeNameProducts} from '../actions/tableP';
import { getProductsBuilding } from '../data/getData/getProductsBuilding';

export const useCalculaProduction = () => {

    const dispatch = useDispatch();

    const [isFirstRender, setIsFirstRender] = useState(true);

    const  tableP  = useSelector( state => state.tableP );
    const  production  = useSelector( state => state.production );
    const  products  =  useSelector( state => state.products ); 
    const  prices  =  useSelector( state => state.prices );
    const  {languaje}  =  useSelector( state => state.conf );

    const {quality,fase,building,PVM,admin, transport, abundance, bonus} = production;

    const {productsJSON, wages} = useMemo(() => getProductsBuilding(products,fase,building), [products,fase,building]);

    useEffect(() => {
        dispatch( updateNamesAndIds(productsJSON) );            //product-0
        dispatch( updateUnitsHour(productsJSON, 
            (building === 'O' ||  building === 'Q'|| building === 'M') 
            ? production : {...production, abundance:100}) );  //product-1
        dispatch( updatePrices(prices,production) );            //product-2
        dispatch( updateNamesAmountAndIdsItems(productsJSON) ); //detail-0

        dispatch( updatePricesItems(prices,production) );       //detail-1
        dispatch( calculateTotalCostItems() );                  //detail-2
        dispatch( calculateAdditionTotalCostItems() );          //detail-3
        dispatch( updateWagesItems(wages) );                    //detail-4
        dispatch( updateAdminItems(production));                //detail-4
        dispatch( calculateTotalCostFabrication());             //detail-end

        dispatch( calculateProfitHourContract(production,productsJSON, production));    //product-end
        dispatch( calculateProfitHourMarket(production,productsJSON));                  //product-end
        
        if(languaje!=='spanish'){ //This 'if' condition is here because JSON saved have the name in spanish. Otherwwise it would be necessary to do always
            dispatch( updateLanguajeNameProducts(languaje) );
        }
        // eslint-disable-next-line
    }, [quality,fase,building,admin,abundance,prices, bonus]);
    
    useEffect(() => {
        
        if(!isFirstRender){
            dispatch( calculateProfitHourContract(production,productsJSON, production));    //product-end
            dispatch( calculateProfitHourMarket(production,productsJSON));                  //product-end    
        }
        // eslint-disable-next-line
    }, [PVM,transport])

    useEffect(() => {
        if(!isFirstRender){
            dispatch( updateLanguajeNameProducts(languaje) );
        }
    // eslint-disable-next-line
    }, [languaje])

    useEffect(() => {
        setIsFirstRender(false);
    }, [])

    return {
        tableP
    }
}