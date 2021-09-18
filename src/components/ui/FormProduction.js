import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector  } from 'react-redux';
import { saveInLocalStorageProduction, updateInfoFormP } from '../../actions/production';
import { DropDownButtonProductionContainer } from './ProductionDDB/DropDownButtonProductionContainer';
import { verifyNumber, verifyInitialStateForm } from '../../auxiliar/verify';
import { calculationAndProduction_Index } from '../../languaje/forms/calculationAndProduction/calculationAndProduction_Index';

export const FormProduction= () => {        //Se podria recibir una funcion setState
  
  const dispatch = useDispatch();

  const productionInfo = useSelector( state => state.production );
  const {mode, languaje} = useSelector(state => state.conf);

  const {building} = productionInfo;

  const [formValues, handleInputChange] = useForm(verifyInitialStateForm(productionInfo));
  
  const {buildingLevel,PVM,admin, bonus,transport, abundance} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {
      buildingLevel: verifyNumber(buildingLevel),
      PVM: verifyNumber(PVM),
      admin: verifyNumber(admin),
      bonus: verifyNumber(bonus),
      transport: verifyNumber(transport),
      abundance: verifyNumber(abundance) //(building === 'O' ||  building === 'Q'|| building === 'M') ? verifyNumber(abundance) : 100 ,
    }

    dispatch( updateInfoFormP(info) );
    dispatch( saveInLocalStorageProduction());
  };

  //Languaje information:
  const labelLanguajeInformation = calculationAndProduction_Index[`${languaje}_label`];
  const inputPlaceHolderlanguajeInformation = calculationAndProduction_Index[`${languaje}_input`];

  //Style information:
  const inputClassName = "form-control " + (mode ==='dark' ? "text-white bg-dark " : "text-black bg-light ");
  const labelClassName = "col-sm-2 col-form-label label-" + mode;
  
  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
            <label htmlFor="colFormLabel" className={ labelClassName }>
              {labelLanguajeInformation.buildingLevel}
            </label>
            <div className="col-sm-10">
              <input    
                type = "number"
                name = "buildingLevel"
                className={ inputClassName } 
                id="buildingLevel" 
                placeholder = {inputPlaceHolderlanguajeInformation.buildingLevel}   
                autoComplete = "off"
                value = {buildingLevel}
                onChange = {handleInputChange}
              />
            </div>
        </div>
        
        <div className="row mb-3">
            <label htmlFor="colFormLabel" className={ labelClassName }>
              {labelLanguajeInformation.porcentaje}
            </label>
            <div className="input-group col-sm-10 mb-2 ">
              
              <input    
                type = "text"
                name = "PVM"
                className={ inputClassName } 
                id="PVM" 
                placeholder = {inputPlaceHolderlanguajeInformation.porcentaje}  
                autoComplete = "off"
                value = {PVM}
                onChange = {handleInputChange}
              />
              <div className="input-group-text  ">%</div>
            </div>
        </div>
  
        <div className="row mb-3">
            <label htmlFor="colFormLabel" className={ labelClassName }>
              {labelLanguajeInformation.administration}
            </label>
            <div className="input-group col-sm-10 mb-2 ">
              <input    
                type = "text"
                name = "admin"
                className={ inputClassName } 
                id="admin" 
                placeholder = {inputPlaceHolderlanguajeInformation.administration}  
                autoComplete = "off"
                value = {admin}
                onChange = {handleInputChange}
              />
              <div className="input-group-text  ">%</div>
            </div>
        </div>

        <div className="row mb-3">
            <label htmlFor="colFormLabel" className={ labelClassName }>
              {labelLanguajeInformation.bonusProduction}
            </label>
            <div className="input-group col-sm-10 mb-2  ">
              <input    
                type = "text"
                name = "bonus"
                className={ inputClassName } 
                id="colFormLabel" 
                placeholder = { inputPlaceHolderlanguajeInformation.bonusProduction }  
                autoComplete = "off"
                value = { bonus }
                onChange = { handleInputChange }
              />
              <div className="input-group-text  ">%</div>
            </div>
        </div>

    { (building === 'O' ||  building === 'Q'|| building === 'M')  
      ?(
        <div className="row mb-3">
            <label htmlFor="colFormLabel" className={ labelClassName }>
              {labelLanguajeInformation.abundance}
            </label>
            <div className="input-group col-sm-10 mb-2  ">
              <input    
                type = "text"
                name = "abundance"
                className={ inputClassName } 
                id="colFormLabel" 
                placeholder = { inputPlaceHolderlanguajeInformation.abundance }  
                autoComplete = "off"
                value = { abundance }
                onChange = { handleInputChange }
              />
              <div className="input-group-text  ">%</div>
            </div>
        </div>
      ) 
      : <></>
    }

        <div className="row mb-1">
            <label htmlFor="colFormLabel" className={ labelClassName }>
              {labelLanguajeInformation.transport}
            </label>
            <div className="input-group col-sm-10 mb-2 ">
              <div className="input-group-text  ">$</div>
              <input    
                type = "text"
                name = "transport"
                className= { inputClassName } 
                id="transport" 
                placeholder = { inputPlaceHolderlanguajeInformation.transport }  
                autoComplete = "off"
                value = {transport}
                onChange = {handleInputChange}
              />
              
            </div>
        </div>

        <DropDownButtonProductionContainer/>

        <div className="container mt-2 mb-2">
          <div className="row align-items-center">
            <div className="col-sm-3"> </div>
            <button
                type="submit"
                className="btn m-1 btn-block btn-outline-primary col-sm-6"
                onClick = { handleSubmit }
                >
              Calculate
            </button>
            <div className="col-sm-3"> </div>
          </div>
        </div>


      </form>
    </div>
  )
}

