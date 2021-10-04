import { useEffect, useMemo, useState } from 'react';
import { evaluate } from 'mathjs';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBuildingRetail } from '../data/getData/getProductsBuilding';

export const useCalculaRetail = () => {

    const dispatch = useDispatch();

    const  retail  = useSelector( state => state.retail );
    const  products  =  useSelector( state => state.products );
    const  tableR  = useSelector( state => state.tableR );

    const [isFirstRender, setIsFirstRender] = useState(true);

    const {quality,fase,building,PCM,admin, bonus} = retail;

    const {productsJSON, wages} = useMemo(() => getProductsBuildingRetail(products,fase,building), [products,fase,building]);

    //Para ejemplo 
    const pJ = productsJSON[0];
    const model = pJ.retailModeling;
    const price = 52;
    const saturation = pJ.marketSaturation;
    const amount = 10;
    

    console.log(model,saturation);
    console.log(evaluate(model,{price,saturation,amount, Math}))


    const x = 10;                           
    console.log(evaluate('x^2 + 1',{x}));           

    

    return { tableR , productsJSON }
}