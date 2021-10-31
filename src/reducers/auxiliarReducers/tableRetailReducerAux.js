import { evaluate } from 'mathjs';

export const createData = (product,
    id,
    cost = 0, 
    sellingPrice = 0, 
    unitsHour = 0, 
    profitHour = 0, 
    productJSON = null,
  ) => {
  return {
    product,
    id,
    cost,
    sellingPrice,
    unitsHour,
    profitHour,
    productJSON,
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

export const getLettersModel = (model = null) => {
    if( model ){

        const x1 = model.indexOf( '*', 1 );
        const x2 = model.indexOf( '+', x1 );
        const a = parseFloat( model.slice( x1 + 1 , x2 ).trim() );
        console.log(a);

        const x3 = model.indexOf( '-', x2 );
        const x4 = model.indexOf( '+', x3 );
        const c = parseFloat( model.slice( x3 + 1 , x4 ).trim() );
        console.log(c);

        const x5 = model.indexOf( '/', x4 );
        const x6 = model.indexOf( ')', x5 );
        const b = parseFloat( model.slice( x5 + 1 , x6 ).trim() );
        console.log(b);
        
        const x7 = model.indexOf( '*', x6 );
        const x8 = model.indexOf( '+', x7 );
        const d = parseFloat( model.slice( x7 + 1 , x8 ).trim() ) ;
        console.log(d);

        const x9 = model.indexOf( '+', x8 );
        const x10 = model.indexOf( ')', x9 );
        const e = parseFloat( model.slice( x9 + 1 , x10 ).trim() ) ;
        console.log(d);

        return { a, b, c, d, e }
    }else {
        return {a : null, b : null, c : null, d : null, e : null, s : null}
    }
}

export const getUnitsHourDefault = ( model = null, quality = 0, saturationDefault = 0, price = 0 ) => {

    const saturationCalculated = saturationDefault - 0.24 * quality;
    const saturation = saturationCalculated > -0.38 ? saturationCalculated : -0.38 ;   
    const amount = 1;
    const secondsPerUnit = evaluate(model,{price,saturation,amount, Math});
    const unitsPerHourDefault = 3600/secondsPerUnit;
    
    return unitsPerHourDefault;
}

export const recalculateProfitPerHour = (productInfo, admin,bonus, quality) => {

    const { retailModeling, marketSaturation, storeBaseSalary } = productInfo.productJSON;
    const { cost, sellingPrice } = productInfo;

    const allWages = storeBaseSalary*(1+admin/100);

    //Calculating units/hour
    const unitsHourDefault = getUnitsHourDefault( retailModeling, 
        quality, marketSaturation , sellingPrice );
    
    const newUnitsHour = unitsHourDefault/(1-(bonus/100));

    //Calculating profit/hour

    const newProfitHour = (sellingPrice - cost) * newUnitsHour - allWages;

    return newProfitHour;
}

export const calculateProfitHour = (productTable, admin) => {
    const { unitsHour, cost, sellingPrice } = productTable;
    const { storeBaseSalary:wages } = productTable.productJSON;
    const employCost = wages*( 1 + admin/100);
    const profitHour = (sellingPrice - cost) * unitsHour - employCost;
    return profitHour;
}

export const getUnitsHourComplete = (productInfo, bonus, quality) => {

    const { retailModeling, marketSaturation} = productInfo.productJSON;
    const { sellingPrice } = productInfo;

    //Calculating units/hour
    const unitsHourDefault = getUnitsHourDefault( retailModeling, 
        quality, marketSaturation , sellingPrice );
    
    const newUnitsHour = unitsHourDefault/(1-(bonus/100));
    return newUnitsHour;
}