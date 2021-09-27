import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector  } from 'react-redux';
import { saveInLocalStorageProduction, updateInfoFormP } from '../../actions/production';
import { DropDownButtonProductionContainer } from './ProductionDDB/DropDownButtonProductionContainer';
import { verifyNumber, verifyInitialStateFormRetail } from '../../auxiliar/verify';
import { calculationAndProduction_Index } from '../../languaje/forms/calculationAndProduction/calculationAndProduction_Index';
import { CalculateButton } from './Buttons/CalculateButton';

export const FormRetail= () => {        //Se podria recibir una funcion setState
  
  const dispatch = useDispatch();

  const retailInfo = useSelector( state => state.retail );
  const {mode, languaje} = useSelector(state => state.conf);

  const [formValues, handleInputChange] = useForm(verifyInitialStateFormRetail(retailInfo));
  
  const {buildingLevel,PCM,admin, bonus} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log(retailInfo);

    /*const info = {
      buildingLevel: verifyNumber(buildingLevel),
      PCM: verifyNumber(PVM),
      admin: verifyNumber(admin),
      bonus: verifyNumber(bonus),
    }

    dispatch( updateInfoFormP(info) );
    dispatch( saveInLocalStorageProduction());
    */
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
                name = "PCM"
                className={ inputClassName } 
                id="PCM" 
                placeholder = {inputPlaceHolderlanguajeInformation.porcentaje}  
                autoComplete = "off"
                value = {PCM}
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

        <DropDownButtonProductionContainer/>

        <div className="container mt-2 mb-2">
          <div className="row align-items-center">
            <div className="col-sm-3"> </div>
              <CalculateButton handleSubmit={ handleSubmit }/>
            <div className="col-sm-3"> </div>
          </div>
        </div>


      </form>
    </div>
  )
}

