import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkIfPricesAreInitilizedFromStorage } from '../../../actions/configuration';
import { updatePrices } from '../../../actions/prices';
import { usePrecios } from '../../../hooks/usePrecios';
import { buttons_index } from '../../../languaje/buttons/buttons_index';
import { LinearProgressWithLabel } from '../Progress/LinearProgressWithLabel';

export const PricesButton = () => {
    const dispatch = useDispatch();

    const { pricesInitilizedFromStorage } = useSelector( state => state.conf );
    const { languaje } = useSelector(state => state.conf);

    const {precios, /*extraePreciosPrueba,*/ extraePreciosOnline, 
        numberProducts, productsExtracted} = usePrecios();

    const [isPricesExtracted, setIsPricesExtracted] = useState(false);

    const [valueProgress, setValueProgress] = useState(-1);
    
    
    const calculateValueProgress = (valueActual=1,valueFinal=100) => {
        if(valueActual > -1){
            setValueProgress(100*(1-(valueFinal - valueActual)/valueFinal));
        }
    }
    
    /*const incrementValue = () => {
        calculateValueProgress(valueProgress+1,numberProducts);
    }*/

    useEffect(() => {
        if(productsExtracted!==0){
            calculateValueProgress(productsExtracted,numberProducts);
        }

        if(numberProducts === productsExtracted){
            setIsPricesExtracted(true);
        }
    // eslint-disable-next-line
    }, [productsExtracted])

    const handleGetPrices = () => {
        //extraePreciosPrueba();
        extraePreciosOnline();
       
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

    const buttonsInfo = buttons_index[`${languaje}_buttons`];

    return (
        <div className="container mt-2 mb-2">
            <div className="row align-items-center">

                <div className="col-sm-3"> </div>

                <div className="col-sm-6 align-items-center">
                    <button 
                        className={"btn btn-block btn-outline-" 
                                    + (isPricesExtracted ? "success" 
                                        : (pricesInitilizedFromStorage) ? "warning" : "danger")} 
                        onClick = { handleGetPrices }
                    > 
                        {buttonsInfo.getPrices}
                    </button>
                </div>

                <div className="col-sm-3"> </div>

            </div>

            {   //Indicate if it shows the progress bar or not
                (valueProgress === -1)
                ?   (<></>)
                :
                (
                    <div className="row align-items-center">
                        <div className="col-12">
                            <LinearProgressWithLabel  value={valueProgress} />
                        </div>
                    </div>
                )
            }





        </div>




    )
}


