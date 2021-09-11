import { useState } from "react";
//import PropTypes from 'prop-types';
//import{ productObject } from '../functional/processData/productObject';

export const useProducts = () => {

    const [isInitialState, setIsInitialState] = useState(true);

    const inicialState = {
        nombre: '...',
        calidad: 0,
        fase: 0 ,
        id: 0,
        costo: 0,
        precioMercado: 0,
        producccionHora: 0,
        gananciaHoraMercado: 0,
        gananciaHoraContrato: 0,
    };

    const [productos, setProductos] = useState([inicialState]);

    const resetProducts = () => {
        setProductos([inicialState]);
        setIsInitialState(true);
    }

    const addProduct = (productoObject) => {
        if(isInitialState){// && productos.length === 1
            setProductos([productoObject]);
            setIsInitialState(false);
        }else{
            setProductos( oldArray => [ productoObject, ...oldArray]);
        }
    };
    
    //En el return retornar la función
    return{
        productos,
        resetProducts,
        addProduct,
        setProductos,
        isInitialState,
        setIsInitialState
    };
}


    /*const changeProduct = (idP,calidadP,newProductObject) => {
        const indexProducto = productos.indexOf( 
            productos.find( ({id,calidad}) => 
                id === idP && 
                calidad === calidadP 
            )         
        );

        if(indexProducto !== -1){
            let auxProductos = [...productos];
            auxProductos[indexProducto] = newProductObject;
            setProductos(auxProductos);
        }
    };*/