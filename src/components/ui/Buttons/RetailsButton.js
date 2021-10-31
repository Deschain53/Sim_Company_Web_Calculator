import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { checkIfPricesAreInitilizedFromStorage } from '../../../actions/configuration';
import { updateProducts } from '../../../actions/products';
import { useRetails } from '../../../hooks/useRetails';
import { buttons_index } from '../../../languaje/buttons/buttons_index';
import { LinearProgressWithLabel } from '../Progress/LinearProgressWithLabel';

export const RetailsButton = () => {
    const dispatch = useDispatch();

    //const { pricesInitilizedFromStorage: retailsInitilizedFromStorage } = useSelector( state => state.conf );
    const retailsInitilizedFromStorage = true; //Temporaly created

    const { languaje } = useSelector(state => state.conf);

    const {products, getRetailsOnline, numberProducts, productsExtracted} = useRetails();

    const [isRetailsExtracted, setIsRetailsExtracted] = useState(false);

    const [valueProgress, setValueProgress] = useState(-1);
        
    const calculateValueProgress = (valueActual=1,valueFinal=100) => {
        if(valueActual > -1){
            setValueProgress(100*(1-(valueFinal - valueActual)/valueFinal));
        }
    }
    
    useEffect(() => {
        if(productsExtracted!==0){
            calculateValueProgress(productsExtracted,numberProducts);
        }

        if(numberProducts === productsExtracted){
            console.log('Productos JSON actualizados')
            setIsRetailsExtracted(true);
        }
    // eslint-disable-next-line
    }, [productsExtracted])

    const handleGetRetails = () => {
        getRetailsOnline();
    }

    useEffect(() => {
        if(isRetailsExtracted){
            dispatch( updateProducts(products) );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    /*useEffect(() => {
        dispatch( checkIfPricesAreInitilizedFromStorage());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])*/

    const buttonsInfo = buttons_index[`${languaje}_buttons`];

    return (
        <div className="container mt-2 mb-2">
            <div className="row align-items-center">

                <div className="col-sm-3"> </div>

                <div className="col-sm-6 align-items-center">
                    <button 
                        className={"btn btn-block btn-outline-" 
                                    + (isRetailsExtracted ? "success" 
                                        : (retailsInitilizedFromStorage) ? "warning" : "danger")} 
                        onClick = { handleGetRetails }
                    > 
                        {buttonsInfo.getRetailInfo}
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


