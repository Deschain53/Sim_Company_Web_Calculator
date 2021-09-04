import { productosNormal, productosRecession, productosBoom } from "../staticData/ProductsArrays"

export const getJSONProductsLocal = () => {

    const productsNormalJSON = productosNormal.map( producto => JSON.parse(producto)); 
    const productsBoomJSON = productosBoom.map( producto => JSON.parse(producto)); 
    const productsRecessionJSON = productosRecession.map( producto => JSON.parse(producto)); 

    return {
        productsNormalJSON,
        productsBoomJSON,
        productsRecessionJSON
    }
}