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
    const numberJSON = productosJSON.length;
    const numberProducts = productosJSON.length*3;
    //console.log(numberProducts);
    
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
                console.log(newProductsResolve);
                //The next lines are executed once all promises are fullfilled
                setProducts((productsActual) => {
                    const {productsRecessionJSON,productsNormalJSON, productsBoomJSON} = productsActual;
                    
                    switch (fase) {
                        case 0:
                            return {productsRecessionJSON: newProductsResolve ,productsNormalJSON, productsBoomJSON};

                        case 1:
                            return {productsRecessionJSON ,productsNormalJSON: newProductsResolve, productsBoomJSON};

                        case 2:
                            return {productsRecessionJSON ,productsNormalJSON, productsBoomJSON: newProductsResolve};
                    
                        default:
                            return {...productsActual}
                    }
                });
                setRetailsExtracted(numberJSON*(fase+1));     //Set the counter to 1/3 of total number of products
                console.log('Antiguo set retail extracted'+numberJSON*(fase+1));
                console.log('Actual contador: ' + productsExtracted + ' - '+ numberProducts)
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