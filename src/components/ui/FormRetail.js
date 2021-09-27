import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector  } from 'react-redux';
import { saveInLocalStorageRetail, updateInfoFormR } from '../../actions/retail';
import { verifyNumber, verifyInitialStateFormRetail } from '../../auxiliar/verify';
import { calculationAndProduction_Index } from '../../languaje/forms/calculationAndProduction/calculationAndProduction_Index';
import { CalculateButton } from './Buttons/CalculateButton';
import { DropDownButtonRetailContainer } from './RetailDDB/DropDownButtonRetailContainer';

export const FormRetail= () => {        //Se podria recibir una funcion setState
  
  const dispatch = useDispatch();

  const retailInfo = useSelector( state => state.retail );
  const {mode, languaje} = useSelector(state => state.conf);

  const [formValues, handleInputChange] = useForm(verifyInitialStateFormRetail(retailInfo));
  
  const {buildingLevel,PCM,admin, bonus} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const info = {
      buildingLevel: verifyNumber(buildingLevel),
      PCM: verifyNumber(PCM),
      admin: verifyNumber(admin),
      bonus: verifyNumber(bonus),
    }

    dispatch( updateInfoFormR(info) );
    dispatch( saveInLocalStorageRetail());
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
              {labelLanguajeInformation.percentage}
            </label>
            <div className="input-group col-sm-10 mb-2 ">
              
              <input    
                type = "text"
                name = "PCM"
                className={ inputClassName } 
                id="PCM" 
                placeholder = {inputPlaceHolderlanguajeInformation.percentageBuying}  
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
                placeholder = { inputPlaceHolderlanguajeInformation.bonusSales }  
                autoComplete = "off"
                value = { bonus }
                onChange = { handleInputChange }
              />
              <div className="input-group-text  ">%</div>
            </div>
        </div>

        <DropDownButtonRetailContainer/>

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

