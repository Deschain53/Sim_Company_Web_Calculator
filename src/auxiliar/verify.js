export const verifyNumber = (input) => {
    const inputParse = parseFloat(input);
  
    return  (inputParse && (typeof(inputParse) === 'number')
              ? inputParse 
              : 0
            )
}

export const verifyInitialStateFormProduction = ({buildingLevel,PVM,admin, bonus,transport, abundance}) => {
  
        if(
          (buildingLevel === 1 || buildingLevel === 0) &&
          PVM === 0 &&
          admin === 0 &&
          bonus === 0 &&
          transport === 0 &&
          abundance === 100
        ){
            return {buildingLevel:'',PVM:'',admin:'',bonus:'',transport:'',abundance:''} ;
        }else{
            return {buildingLevel,PVM,admin, bonus,transport,abundance} ;
        } 
}

export const verifyInitialStateFormRetail = ({buildingLevel,PCM,admin, bonus}) => {
  
        if(
          (buildingLevel === 1 || buildingLevel === 0) &&
          PCM === 0 &&
          admin === 0 &&
          bonus === 0 
        ){
            return {buildingLevel:'',PCM:'',admin:'',bonus:''} ;
        }else{
            return {buildingLevel,PCM,admin, bonus} ;
        } 
}

export const verifyddbBuilding= ({buildingLevel,PVM,admin,bonus,transport,building}) => { //ddb = DownDropButton
    if(
        (buildingLevel === 1 || buildingLevel === 0)  &&
        PVM === 0 &&
        admin === 0 &&
        bonus === 0 &&
        transport === 0 &&
        building === 'L'
      ){
          return '' ;
      }else{
          return building ;
      } 
}

export const verifyddbBuildingRetail= ({buildingLevel,PCM,admin, bonus,building}) => { //ddb = DownDropButton
    if(
        (buildingLevel === 1 || buildingLevel === 0)  &&
        PCM === 0 &&
        admin === 0 &&
        bonus === 0 &&
        building === 'C'
      ){
          return '' ;
      }else{
          return building ;
      } 
}

export const verifyddbFase= ({buildingLevel,PVM,admin, bonus,transport,fase}) => { //ddb = DownDropButton
    if(
        (buildingLevel === 1 || buildingLevel === 0)  &&
        PVM === 0 &&
        admin === 0 &&
        bonus === 0 &&
        transport === 0 &&
        fase === 1
      ){
          return '' ;
      }else{
          return fase ;
      } 
    }

export const verifyddbQuality= ({buildingLevel,PVM,admin, bonus,transport,quality}) => { //ddb = DownDropButton
    if(
        (buildingLevel === 1 || buildingLevel === 0)  &&
        PVM === 0 &&
        admin === 0 &&
        bonus === 0 &&
        transport === 0 &&
        quality === 0
      ){
          return '' ;
      }else{
          return quality ;
      } 
    }


