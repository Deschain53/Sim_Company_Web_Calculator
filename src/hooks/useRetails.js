import {useState} from 'react';
import { useSelector } from 'react-redux';

export const useRetails = () => {

    const {productsNormalJSON:productosJSON} = useSelector( state => state.products );
    
    const [products, setProducts] = useState({ 
        productsRecessionJSON:[{}],
        productsNormalJSON:[{}], 
        productsBoomJSON:[{}],
    },);

    const [productsExtracted, setRetailsExtracted] = useState(0);  
    const numberProducts = productosJSON.length*3;
    
    const getRetail = async(fase, id) =>{
        try{
        const header= `https://ronchon-vin-08117.herokuapp.com/`;
        //const header='';
        const url = header +`https://www.simcompanies.com/api/v3/es/encyclopedia/resources/${encodeURI(fase)}/${encodeURI(id)}/`;
        const resp = await fetch(url);
        const informacion = await resp.json();
        
        return informacion;
    
        }catch(error){
            console.log(error);
        }
    
    };

    const getRetailPromiseUnitary = async(fase,producto) => {   //The process of one promise to get and process the price
        const retailInformationOneProduct = await getRetail(fase,producto);
        
        setRetailsExtracted((numberProducts)=> (numberProducts+1));
        
        return retailInformationOneProduct;
    };

    const getRetailsOnlineForOneFase =  (fase) => {
        const newRetailsPromises = productosJSON.map( ({db_letter}) =>  getRetailPromiseUnitary(fase,db_letter));   //Array of individual promises
        console.log(newRetailsPromises);        
        Promise.all(newRetailsPromises).then(   
            newProductsResolve => {
                //The next lines are executed once all promises are fullfilled
                setProducts((productsActual) => {
                    const {productsRecessionJSON,productsNormalJSON, productsBoomJSON} = productsActual;
                    
                    switch (fase) {
                        case 0:
                            return {productsRecessionJSON: newProductsResolve ,productsNormalJSON, productsBoomJSON};
                            break;

                        case 1:
                            return {productsRecessionJSON ,productsNormalJSON: newProductsResolve, productsBoomJSON};
                            break;

                        case 2:
                            return {productsRecessionJSON ,productsNormalJSON, productsBoomJSON: newProductsResolve};
                            break;
                    
                        default:
                            return {...productsActual}
                            break;
                    }
                });
                setRetailsExtracted(numberProducts*fase+1);     //Set the counter to 1/3 of total number of products
            }
        );
    };

    const getRetailsOnline = () => {
        for (let i = 0; i < 3; i++) {
            getRetailsOnlineForOneFase(i);            
        }
    };


    return {products, getRetailsOnline, numberProducts, productsExtracted};
}