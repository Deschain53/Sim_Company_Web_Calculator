import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkIfPricesAreInitilizedFromStorage } from '../../../actions/configuration';
import { updatePrices } from '../../../actions/prices';
import { usePrecios } from '../../../hooks/usePrecios';

export const PricesButton = () => {
    const dispatch = useDispatch();
    const { pricesInitilizedFromStorage } = useSelector( state => state.conf );

    const {precios, extraePreciosPrueba, extraePreciosOnline} = usePrecios();

    const [isPricesExtracted, setIsPricesExtracted] = useState(false);

    const handleGetPrices = () => {
        extraePreciosPrueba();
        //extraePreciosOnline();
        setIsPricesExtracted(true);
    }

    useEffect(() => {
        if(isPricesExtracted){
            dispatch( updatePrices(precios) );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [precios]);

    useEffect(() => {
        dispatch( checkIfPricesAreInitilizedFromStorage());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="container mt-2 mb-2">
          <div className="row align-items-center">
            <div className="col-sm-3"> </div>
                <button 
                    className={"btn btn-block col-sm-6 btn-outline-" 
                                + (isPricesExtracted ? "success" 
                                    : (pricesInitilizedFromStorage) ? "warning" : "danger")} 
                    onClick = { handleGetPrices }
                > 
                    Extrae precios
                </button>
            <div className="col-sm-3"> </div>
          </div>
        </div>




    )
}


