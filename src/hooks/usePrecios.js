import {useState} from 'react';
import { preciosObjectPrueba } from '../data/dataForTest/preciosObjectPrueba';
import { useSelector } from 'react-redux';

export const usePrecios = () => {

    const {productsNormalJSON} = useSelector( state => state.products );

    const [precios, setPrecios] = useState([{}]);

    const [productsExtracted, setProductsExtracted] = useState(0);  

    const productosJSON = productsNormalJSON;
    const numberProducts = productosJSON.length;
    //console.log(productosJSON);
    
    const getPrecios = async(id) =>{
        try{
        const header= `https://ronchon-vin-08117.herokuapp.com/`;
        //const header='';
        const url = header +`https://www.simcompanies.com/api/v2/market/${encodeURI(id)}`;
        const resp = await fetch(url);
        const informacion = await resp.json();
    
        //Guardando en un objeto la informacion de interes
        const precios = informacion.map( ({quality,price,quantity}) =>{
            return{
                calidad: quality,
                precio: price,
                cantidad: quantity
            }
        }) 

        return precios;
    
        }catch(error){
            console.log(error);
        }
    
    };

    const precioObject = async(producto) => {   //The process of one promise to get and process the price
        const preciosProducto = await getPrecios(producto);
        const preciosOrdenados = getProductosOrdenados(preciosProducto);
    
        const objectPreciosOrdenados = {
            id: producto,
            precio: preciosOrdenados
        }
        
        setProductsExtracted((productActual)=> (productActual+1));
        
        return objectPreciosOrdenados;
    };

    const getProductosOrdenados = (preciosProducto) => {

        const calidadMaxima = 6;
        let precios = [];
    
        //Para encontrar los precios de cada calidad
        for(let i = 0 ; i < calidadMaxima; i++){
            const aux = preciosProducto.find(producto => producto.calidad === i);
            if(aux !== undefined ){
                precios[i] = aux.precio;
            }else{
                precios[i] = -1;
            }
        } 
    
        //Para ordenar correctamente los precios de las calidades
        for(let i = preciosProducto.lenght-1; i > 0; i--){
            if(precios[i] < precios[i-1] && precios[i] > 0){
                precios[i-1] = precios[i];
            }else if(precios[i-1] === -1 && precios[i] > 0){
                precios[i-1] = precios[i];
            }
        }
        return precios;
         
    };

    /*const incrementProductsExtracted = () => {
        //if(productsExtracted !== numberProducts-1){
            setProductsExtracted(productsExtracted+1);
        //}
    }*/

    const extraePreciosOnline =  () => {

        //const miniPrueba = [ {db_letter: 80}, {db_letter:81 }, {db_letter:82 }, {db_letter: 98 }];
                                    //productosJSON   //miniPrueba
        const newPreciosPromises = productosJSON.map( ({db_letter}) =>  precioObject(db_letter));   //Array of individual promises
        console.log(newPreciosPromises);        
        Promise.all(newPreciosPromises).then(   
            newPreciosR => {
                //The next lines are executed once all promises are fullfilled
                //console.log(newPreciosR);
                setPrecios([...newPreciosR]);
                setProductsExtracted(numberProducts);
                //return newPreciosR;
            }
        );
    };

    const extraePreciosPrueba = () => {
       setPrecios(preciosObjectPrueba());
    };

    return {precios, extraePreciosPrueba, extraePreciosOnline, numberProducts, productsExtracted};
}