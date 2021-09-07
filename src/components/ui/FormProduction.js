import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector  } from 'react-redux';
import { saveInLocalStorageProduction, updateInfoFormP } from '../../actions/production';
import { DropDownButtonProductionContainer } from './ProductionDDB/DropDownButtonProductionContainer';

const verifyNumber = (input) => {
  const inputParse = parseFloat(input);

  return  (inputParse && (typeof(inputParse) === 'number')
            ? inputParse 
            : 0
          )
}

/*const saveInLocalStorageProduction = (production) => {
  localStorage.setItem('production', JSON.stringify(production));
}*/

export const FormProduction= () => {        //Se podria recibir una funcion setState
  
  const dispatch = useDispatch();
  const production = useSelector( state => state.production );


  const [formValues, handleInputChange] = useForm({
      buildingLevel: '',
      PVM: '',
      admin: '',
      bonus: '',
      transport: '',
  });
  
  const {buildingLevel,PVM,admin, bonus,transport} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {
      buildingLevel: verifyNumber(buildingLevel),
      PVM: verifyNumber(PVM),
      admin: verifyNumber(admin),
      bonus: verifyNumber(bonus),
      transport: verifyNumber(transport)
    }

    //console.log(info);
    
    dispatch( updateInfoFormP(info) );
    dispatch( saveInLocalStorageProduction());
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                Building Level
            </label>
            <div className="col-sm-10">
              <input    
                type = "number"
                name = "buildingLevel"
                className="form-control text-white bg-dark" 
                id="buildingLevel" 
                placeholder = "Building Level"    
                autoComplete = "off"
                value = {buildingLevel}
                onChange = {handleInputChange}
              />
            </div>
        </div>
        
        <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                Porcentage
            </label>
            <div className="input-group col-sm-10 mb-2 ">
              
              <input    
                type = "text"
                name = "PVM"
                className="form-control  text-white bg-dark" 
                id="PVM" 
                placeholder = "Porcentage of sell under market"
                autoComplete = "off"
                value = {PVM}
                onChange = {handleInputChange}
              />
              <div className="input-group-text  ">%</div>
            </div>
        </div>
  
        <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                Administration
            </label>
            <div className="input-group col-sm-10 mb-2 ">
              <input    
                type = "text"
                name = "admin"
                className="form-control text-white bg-dark" 
                id="admin" 
                placeholder = "Administration overhead"
                autoComplete = "off"
                value = {admin}
                onChange = {handleInputChange}
              />
              <div className="input-group-text  ">%</div>
            </div>
        </div>

        <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                Bonus
            </label>
            <div className="input-group col-sm-10 mb-2  ">
              <input    
                type = "text"
                name = "bonus"
                className="form-control text-white bg-dark" 
                id="colFormLabel" 
                placeholder = "Production bonus"
                autoComplete = "off"
                value = {bonus}
                onChange = {handleInputChange}
              />
              <div className="input-group-text  ">%</div>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                Transport
            </label>
            <div className="input-group col-sm-10 mb-2 ">
              <div className="input-group-text  ">$</div>
              <input    
                type = "text"
                name = "transport"
                className="form-control text-white bg-dark" 
                id="transport" 
                placeholder = "Transport price"
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

