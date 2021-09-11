import {getProductJSONoffline} from '../functional/getData/getProductJSONoffline';
import { useEdificios } from './useEdificios';

export const useCalcula = (precios, productos,setProductos,informacion) => {

    const {getSalario}  =  useEdificios();
                            
    const findPricesProduct = (idProduct) => {
        const found = precios.find( ({id}) => id === idProduct);
        return found;
    };

    const findPriceProductByIdQuality = (idProduct,quality) => {
        const precios = findPricesProduct(idProduct);
        if(precios !== undefined){
            const {precio} = precios;
            return precio[quality] !== undefined ?  precio[quality] : -1 ;  
        }else{
            return 0;
        }
    };

    const getProductsWithNewMarketPrice = (productos) => {
        const newProductos = productos.map( (producto) => {
          const newPrice =  findPriceProductByIdQuality(producto.id,producto.calidad);
          const productModified = {...producto, precioMercado : newPrice };
          return productModified;
        });

        return newProductos;
      };

    const getArrayInputsOfProduct = (id,fase) => {
        const {producedFrom} = getProductJSONoffline(id,fase); // <--- Este metodo se podria separar en un hook   
        const  arrayProducedFromObject = producedFrom.map( ({resource,amount}) => {
            return { id: resource.db_letter, cantidad: amount};
        });
        return arrayProducedFromObject;
    };

    //Funcion para calcular solo los costos de la materia prima para cada producto
    const getPrecioCostoMateriaPrima = (id,fase,calidad) => {
        const arrayProducedFromObject = getArrayInputsOfProduct(id,fase);       
        let suma = 0;
        arrayProducedFromObject.forEach( ({id,cantidad}) => {   
            const precioMateria = findPriceProductByIdQuality(id,calidad);
            const precioCostoMateria = precioMateria * cantidad;
            precioCostoMateria < 0  ?  suma = 0 : suma += precioCostoMateria;
        });
        return suma;
    };

    //Devuelve la produccion por hora tomando en cuenta la bonificacion desde informacion
    const getProduccionHoraConBonificacion= (id,fase) => {
        const {bonificacion} = informacion;
        const {producedAnHour} = getProductJSONoffline(id,fase);
        const produccionHora = producedAnHour*(1+(bonificacion/100));
        return produccionHora;
    };

    const getProduccionHoraReal = (id,fase) => {
        const {edificio} = informacion;
        const produccionHoraConBonificacion = getProduccionHoraConBonificacion(id,fase);
        const produccionHoraReal = produccionHoraConBonificacion * edificio;
        return produccionHoraReal;
    };

    const getCostoAdministrativo = (salario) => {
        const {admin} = informacion;
        //Obtener gastos administrativos de los datos proporcionador por el formulario POR RESOLVER
        const costoAdministrativo = salario * (admin/100);
        return costoAdministrativo;
    };

    const getCostoManoObraPorUnidad = (id,fase) => {
        const salario = getSalario(id);
        const costoAdministrativo = getCostoAdministrativo(salario);
        const costoManoObraPorHora = salario + costoAdministrativo;
        const produccionHoraConBonificacion = getProduccionHoraConBonificacion(id,fase);
        const costoManoObraPorUnidad = costoManoObraPorHora / produccionHoraConBonificacion ;
        
        /*console.log(salario);    
        console.log(costoAdministrativo);
        console.log(costoManoObraPorHora);
        console.log(produccionHoraConBonificacion);
        console.log(costoManoObraPorUnidad);*/
        return costoManoObraPorUnidad;
    }
    
    const getProductsWithPricesCalculated = (productos) => {
        const newProductos = productos.map( producto => {
            const {id,fase,calidad} = producto;

            const precioCostoMateriasPrimas = getPrecioCostoMateriaPrima(id,fase, (calidad > 1) ? calidad-1 : 0 );
            const costoManoObraPorUnidad = getCostoManoObraPorUnidad(id,fase);
            const costoTotal = precioCostoMateriasPrimas + costoManoObraPorUnidad;
            const productModified = {...producto, costo: costoTotal};
            //console.log(productModified);
            return productModified;
        });
        //console.log(newProductos);
        return newProductos;
    };

    const getProductsWithRealProduction = (productos) => {
        const newProductos = productos.map( producto => { 
            const {id,fase} = producto;
            const produccionHoraReal = getProduccionHoraReal(id,fase);

            const productModified = {...producto, produccionHora: produccionHoraReal};
            return productModified;
        });
        return newProductos;
    };

    const getPrecioTransporte = (id) => {
        const transporteUsado = 0 ; //******Poner el metodo para encontrar transporteUsado */
        const {transporte} = informacion;
        const precioTransporte = transporteUsado*transporte;
        return precioTransporte;
    };

    const getNewGananciaHoraMercado = ({id,produccionHora,costo,precioMercado}) => {
        const precioTransporte = getPrecioTransporte(id);
        const comision = precioMercado*0.03;
        const newGananciaHoraMercado = (precioMercado - comision - costo - precioTransporte)*produccionHora ;
        return newGananciaHoraMercado;
    };

    const getProductsWithRealProfitPerHourByMarket= (productos) => {
        const newProductos = productos.map( producto => { 
            const newGananciaHoraMercado = getNewGananciaHoraMercado(producto);
            const productModified = {...producto, gananciaHoraMercado: newGananciaHoraMercado};
            return productModified;
        });
        return newProductos;
    };

    const getNewGananciaHoraContrato= ({id,produccionHora,costo,precioMercado,}) => {
        const precioTransporte = getPrecioTransporte(id);
        const {PVM} = informacion;
        const descuento = 1- (PVM/100);// Aplecar descuento dependiendo del porcentaje bajo mercado
        const newGananciaHoraMercado = (precioMercado - descuento - costo - precioTransporte*0.5)*produccionHora ;
        return newGananciaHoraMercado;
    };

    const getProductsWithRealProfitPerHourByContract= (productos) => {
        const newProductos = productos.map( producto => { 
            const newGananciaHoraContrato = getNewGananciaHoraContrato(producto);
            const productModified = {...producto, gananciaHoraContrato: newGananciaHoraContrato};
            return productModified;
        });
        return newProductos;
    };

    const applyCurrentQualityandFaseToAll= (productos) => {
        const newProductos = productos.map( producto => { 
            const {calidad,fase} = informacion;
            const productModified = {...producto, calidad,fase};
            return productModified;
        });
        return newProductos;
    };

    const calcula = async() => {
        const productosToCurrentQualityAndFase = await applyCurrentQualityandFaseToAll(productos)
        const productsWithNewMarketPrice = await getProductsWithNewMarketPrice(productosToCurrentQualityAndFase);
        const productsWithPricesCalculated = await getProductsWithPricesCalculated(productsWithNewMarketPrice);
        const productsWithRealProduction = await getProductsWithRealProduction(productsWithPricesCalculated);
        const productsWithProfitPerHourByMarket = await getProductsWithRealProfitPerHourByMarket(productsWithRealProduction);
        const productosWithProfitPerHourByContract = await getProductsWithRealProfitPerHourByContract(productsWithProfitPerHourByMarket);
        setProductos(productosWithProfitPerHourByContract);
    };

    return {calcula};
}
