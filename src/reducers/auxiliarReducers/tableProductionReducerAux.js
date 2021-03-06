//import { SatelliteOutlined } from "@material-ui/icons";

export const createData = (product,
    id,
    cost = 0, 
    marketPrice = 0, 
    unitsHour = 0, 
    profitHourMarket = 0, 
    profitHourContract = 0,
  ) => {
  return {
    product,
    id,
    cost,
    marketPrice,
    unitsHour,
    profitHourMarket,
    profitHourContract,
    detail:[
      { item: '.', amount: 0, unitCost: 0 ,totalCost: 0 , id: 1},
      { item: '..', amount: 0, unitCost: 0, totalCost: 0, id:2 },
      { item: '...', amount: 0, unitCost: 0, totalCost: 0, id:3 },
    ],
    resume: {
      totalCostItems: 0,
      wages: 0,
      administrationOverhead: 0,
      totalCostOfFabrication: 0
    }
  };
}

export const getPrices = (idProduct, marketPrices) => {
    const pricesObject = marketPrices.find(({id}) => id === idProduct);
    if(pricesObject!== undefined){
        return pricesObject.precio;
    }else{
        return null;
    }
}

export const getPrice = (idProduct, marketPrices, quality) => {
    const prices = getPrices(idProduct, marketPrices);
    if(prices !== null){
        return prices[quality];
    }else{
        return -1;
    }
}

export const getStateWWithMarketPrices = (state,marketPrices,quality) => {
    const newState = state.map( productTable => {
        const newPrice = getPrice( productTable.id, marketPrices, quality);
        
        return {
            ...productTable,
            marketPrice: newPrice === undefined ? -1 : newPrice ,
        }
    });
    return newState;
}

const getProductJSONbyId = (productsJSON,id) => {
    const productJSON = productsJSON.find( ({db_letter}) => db_letter === id);
    return productJSON;
}

const getNewDetailArray = ( { producedFrom } ) => {

    if( producedFrom !== []){

        return producedFrom.map( ({amount, resource}) => {
            return{
                item:resource.name,
                amount,
                unitCost: 0 ,
                totalCost: 0 , 
                id: resource.db_letter
            }
        })
    }else{

        return [
            { item: '.', amount: 0, unitCost: 0 ,totalCost: 0 , id: 0},
          ]   
    }

}

export const getStateWithUnitsHourUpdated = (state, productsJSON, bonus, abundance) => {

    const newState = state.map( productTable => {

        const {producedAnHour} =  getProductJSONbyId(productsJSON, productTable.id);

        const realProducedAnHour = producedAnHour * ( 1 + ( bonus !==0 ? (bonus)/100 : 0) ) * (abundance/100);

        return { 
            ...productTable,
            unitsHour: realProducedAnHour
        }
    })

    return newState;
}

export const getStateWithNameIdAndAmoutItem = (state, productsJSON) => {

    const newState = state.map( productTable => {

        const productJSON =  getProductJSONbyId(productsJSON, productTable.id);

        const newDetailArray = getNewDetailArray(productJSON);

        return { 
            ...productTable,
            detail: newDetailArray
        }
    })

    return newState;
}

export const getStateWithDetailItemsPriced = (state, marketPrices,quality) => {

    const newState = state.map( productTable => {

        const { detail } = productTable;
        const newDetail = detail.map( detailItem =>  {   
            const newUnitCost = getPrice(detailItem.id, marketPrices, quality > 1 ? quality-1 : 0 );
            return{...detailItem, unitCost: newUnitCost}
        });

        return{
            ...productTable,
            detail: newDetail
        }

    })

    return newState;
}

export const getStateWithTotalCostItemsCalculated =(state) => {

        const newState = state.map( productTable => {

            const { detail } = productTable;
            const newDetail = detail.map( detailItem =>  { 
                const {amount,unitCost} = detailItem;
                const newTotalCost = amount*unitCost;

                return {...detailItem, totalCost: newTotalCost}
            });
    
            return {
                ...productTable,
                detail: newDetail
            }
    
        })

    return newState;
}

export const getStateWithWagesUpdated =(state,wages) => {

        const newState = state.map( productTable => {

            const { resume, unitsHour } = productTable;
            const newWages = (wages/unitsHour) !== Infinity ? wages/unitsHour  : 0   ;
            const newResume = {...resume, wages: newWages}
           
            return {
                ...productTable,
                resume: newResume
            }
    
        })

    return newState;
}

export const getStateWithAdditionTotalCostItems = (state) => {

    const newState = state.map( productTable => {

        const { resume, detail } = productTable;

        let additionTotalItems = 0;
            detail.forEach( ({totalCost}) => { additionTotalItems += totalCost });        

        const additionTotalItemsConst = additionTotalItems;
        
        const newResume = {...resume, totalCostItems: additionTotalItemsConst}
       
        return {
            ...productTable,
            resume: newResume
        }

    })

    return newState
}

export const getStateWithAdmitItemsCalculated = (state, admin = 0) => {
    const newState = state.map( productTable => {

        const { resume } = productTable;   
        const newAdministrationOverhead =  admin !== 0 ? (resume.wages*admin/100) : 0;
        const newResume = {...resume, administrationOverhead: newAdministrationOverhead}
       
        return {
            ...productTable,
            resume: newResume
        }

    })

    return newState;
}

export const getStateWithTotalCostOfFabricationItems = (state) => {
    const newState = state.map( productTable => {

        const { resume } = productTable;   
        const {totalCostItems, wages, administrationOverhead } = resume;
        const newTotalCostOfFabrication = totalCostItems + wages + administrationOverhead;
        const newResume = {...resume, totalCostOfFabrication: newTotalCostOfFabrication}
       
        return {
            ...productTable,
            cost: newTotalCostOfFabrication,
            resume: newResume
        }

    })

    return newState;
}

export const getStateWithProfitHourMarketCalculated = (state,productsJSON,transport) => {
    const newState = state.map( productTable => {
        const {transportNeeded} = getProductJSONbyId(productsJSON,productTable.id);
        const { cost, marketPrice, unitsHour } = productTable;  
        const newProfitHourMarket = ((marketPrice*0.97-cost)-(transportNeeded*transport))*unitsHour;
       
        return {
            ...productTable,
            profitHourMarket: newProfitHourMarket
        }

    })

    return newState;
}

export const getStateWithProfitHourContractCalculated = (state,productsJSON,transport,porcentaje) => {
    const newState = state.map( productTable => {
        const {transportNeeded} = getProductJSONbyId(productsJSON,productTable.id);
        const { cost, marketPrice, unitsHour } = productTable;  
        const newProfitHourContract= ((marketPrice*(1-porcentaje/100)-cost)-(transportNeeded*transport*0.5))*unitsHour;
       
        return {
            ...productTable,
            profitHourContract: newProfitHourContract
        }

    })

    return newState;
}

export const getStateWithNameLanguajeUpdate = (state, namesProductsInfo) => {
    const newState = state.map( productTable => {

        const {name:productName} = namesProductsInfo.find( ({id}) => id === productTable.id );
        
        const newDetail = productTable.detail.map( detailItem =>  { 
            
            const {name:itemName} = namesProductsInfo.find( ({id}) => id === detailItem.id );

            return {...detailItem, item: itemName}
        });

        return {
            ...productTable,
            product: productName,
            detail: newDetail,
        }

    })
    //console.log(newState);

    return newState;
}