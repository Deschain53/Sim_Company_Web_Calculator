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
      { item: '.', amount: 0, unitCost: 0 ,totalCost: 0 },
      { item: '..', amount: 0, unitCost: 0, totalCost: 0 },
      { item: '...', amount: 0, unitCost: 0, totalCost: 0 },
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
    if(pricesObject!= undefined){
        return pricesObject.precio;
    }else{
        return null;
    }
}

export const getPrice = (idProduct, marketPrices, quality) => {
    const prices = getPrices(idProduct, marketPrices);
    if(prices != null){
        return prices[quality];
    }else{
        return -1;
    }
}

export const getStateWWithMarketPrices = (state,marketPrices,quality) => {
    //console.log(marketPrices);
    //const price = getPrice(80,marketPrices,0);
    //console.log(price);

    const newState = state.map( product => {
        const newPrice = getPrice( product.id, marketPrices, quality);
        return {
            ...product,
            marketPrice: newPrice
        }
    });

    //console.log(newState)
    return newState;
}