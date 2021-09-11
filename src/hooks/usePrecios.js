import {useState} from 'react';
import { preciosObjectPrueba } from '../data/dataForTest/preciosObjectPrueba';
import { useSelector } from 'react-redux';

export const usePrecios = () => {

    const {productsNormalJSON} = useSelector( state => state.products );

    const [precios, setPrecios] = useState([{}]);
    //const [ispreciosObtenidos, setIspreciosObtenidos] = useState(false);
    //const productosJSON = getProductosJSON(0);
    const productosJSON = productsNormalJSON;
    
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

        //console.log(precios);
    
        return precios;
    
        }catch(error){
            console.log(error);
        }
    
    };

    const precioObject = async(producto) => {
        const preciosProducto = await getPrecios(producto);
        //console.log(typeof preciosProducto);
        const preciosOrdenados = getProductosOrdenados(preciosProducto);
        //console.log(typeof preciosOrdenados);
    
        const objectPreciosOrdenados = {
            id: producto,
            precio: preciosOrdenados
        }
        
        console.log(objectPreciosOrdenados);
    
        return objectPreciosOrdenados;
    };

    const getProductosOrdenados = (preciosProducto) => {

        const calidadMaxima = 6;
        let precios = [];
        //preciosProductoPromise.then( preciosProducto => {
    
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
    
        //});
        //console.log(precios);
        return precios;
         
    };

    const extraePreciosOnline =  () => {

        //const miniPrueba = [ {db_letter: 80}, {db_letter:81 }, {db_letter:82 }, {db_letter: 98 }];
                                    //productosJSON   //miniPrueba
        const newPreciosPromises = productosJSON.map( ({db_letter}) =>  precioObject(db_letter));
        console.log(newPreciosPromises);        
        Promise.all(newPreciosPromises).then(
            newPreciosR => {
                console.log(newPreciosR);
                setPrecios(newPreciosR)
                //return newPreciosR;
                }
        );
    };

    const extraePreciosPrueba = () => {
       setPrecios(preciosObjectPrueba());
    };

    return {precios, extraePreciosPrueba, extraePreciosOnline};
}




        /*Iba dentro de ExtraePreciosOnline
        
        let newPrecios = [];
        const precio1 = await precioObject(83);
        newPrecios.push(precio1);
        const precio2 = await precioObject(90);
        newPrecios.push(precio2);*/
