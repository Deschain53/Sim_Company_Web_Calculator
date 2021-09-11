export const createDataToDisplay = (product, cost, marketPrice, 
    unitsHour, profitHourMarket, profitHourContract,
    resume, detail) => {
    return {
      product,
      cost,
      marketPrice,
      unitsHour,
      profitHourMarket,
      profitHourContract,
      detail,
      resume,
    };
  }

export const createDetail = () => {
    return [
        { item: '...', amount: 0, unitCost: 0 ,totalCost: 0 },
        { item: '...', amount: 0, unitCost: 0, totalCost: 0 },
    ]
}

export const createResume = () => {
    return {
        totalCostItems: 0,
        wages: 0,
        administrationOverhead: 0,
        totalCostOfFabrication: 0
      }
}