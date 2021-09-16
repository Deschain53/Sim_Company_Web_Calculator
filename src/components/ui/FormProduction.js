import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector  } from 'react-redux';
import { saveInLocalStorageProduction, updateInfoFormP } from '../../actions/production';
import { DropDownButtonProductionContainer } from './ProductionDDB/DropDownButtonProductionContainer';
import { verifyNumber, verifyInitialStateForm } from '../../auxiliar/verify';

export const FormProduction= () => {        //Se podria recibir una funcion setState
  
  const dispatch = useDispatch();

  const productionInfo = useSelector( state => state.production );
  const {mode} = useSelector(state => state.conf);

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

  const inputClassName = "form-control " + (mode ==='dark' ? "text-white bg-dark " : "text-black bg-light ");
  const labelClassName = "col-sm-2 col-form-label label-" + mode;

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
            <label htmlFor="colFormLabel" className={ labelClassName }>
                Building Level
            </label>
            <div className="col-sm-10">
              <input    
                type = "number"
                name = "buildingLevel"
                className={ inputClassName } 
                id="buildingLevel" 
                placeholder = "Building Level"    
                autoComplete = "off"
                value = {buildingLevel}
                onChange = {handleInputChange}
              />
            </div>
        </div>
        
        <div className="row mb-3">
            <label htmlFor="colFormLabel" className={ labelClassName }>
                Porcentage
            </label>
            <div className="input-group col-sm-10 mb-2 ">
              
              <input    
                type = "text"
                name = "PVM"
                className={ inputClassName } 
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
            <label htmlFor="colFormLabel" className={ labelClassName }>
                Administration
            </label>
            <div className="input-group col-sm-10 mb-2 ">
              <input    
                type = "text"
                name = "admin"
                className={ inputClassName } 
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
            <label htmlFor="colFormLabel" className={ labelClassName }>
                Bonus
            </label>
            <div className="input-group col-sm-10 mb-2  ">
              <input    
                type = "text"
                name = "bonus"
                className={ inputClassName } 
                id="colFormLabel" 
                placeholder = "Production bonus"
                autoComplete = "off"
                value = {bonus}
                onChange = {handleInputChange}
              />
              <div className="input-group-text  ">%</div>
            </div>
        </div>

    { (building === 'O' ||  building === 'Q'|| building === 'M')  
      ?(
        <div className="row mb-3">
            <label htmlFor="colFormLabel" className={ labelClassName }>
                Abundance
            </label>
            <div className="input-group col-sm-10 mb-2  ">
              <input    
                type = "text"
                name = "abundance"
                className={ inputClassName } 
                id="colFormLabel" 
                placeholder = "Abundance"
                autoComplete = "off"
                value = {abundance}
                onChange = {handleInputChange}
              />
              <div className="input-group-text  ">%</div>
            </div>
        </div>
      ) 
      : <></>
    }

        <div className="row mb-1">
            <label htmlFor="colFormLabel" className={ labelClassName }>
                Transport
            </label>
            <div className="input-group col-sm-10 mb-2 ">
              <div className="input-group-text  ">$</div>
              <input    
                type = "text"
                name = "transport"
                className= { inputClassName } 
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

