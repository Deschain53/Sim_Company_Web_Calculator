import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBuildingRetail } from '../data/getData/getProductsBuilding';

export const useCalculaRetail = () => {

    const dispatch = useDispatch();

    const  retail  = useSelector( state => state.retail );
    const  products  =  useSelector( state => state.products );

    const [isFirstRender, setIsFirstRender] = useState(true);

    const {quality,fase,building,PCM,admin, bonus} = retail;

    const {productsJSON, wages} = useMemo(() => getProductsBuildingRetail(products,fase,building), [products,fase,building]);

    return { productsJSON }
}