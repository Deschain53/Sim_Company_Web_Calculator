import React, {useEffect} from 'react';
import { useForm } from '../../hooks/useForm';
 
export const FormProduction= () => {        //Se podria recibir una funcion setState

    const [formValues, handleInputChange] = useForm({
        building: '',
        PVM: '',
        admin: '',
        bonus: '',
        transport: '',
    });
    
    const {building,PVM,admin, bonus,transport} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        //updateFromFormInfo(formValues);
    };

    /*useEffect(() => {
        //updateFromFormInfo(formValues);
    }, [formValues])*/


    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group row ">
                <label for="colFormLabel" className="col-sm-2 col-form-label">
                    Building Level
                </label>
                <div className="col-sm-10">
                  <input    
                    type = "text"
                    name = "building"
                    className="form-control text-white bg-dark" 
                    id="colFormLabel" 
                    placeholder = "Building Level"
                    autoComplete = "off"
                    value = {building}
                    onChange = {handleInputChange}
                  />
                </div>
            </div>

            <div className="form-group row ">
                <label for="colFormLabel" className="col-sm-2 col-form-label">
                    Porcentage
                </label>
                <div className="col-sm-10">
                  <input    
                    type = "text"
                    name = "PVM"
                    className="form-control text-white bg-dark" 
                    id="colFormLabel" 
                    placeholder = "Porcentage of sell under market"
                    autoComplete = "off"
                    value = {PVM}
                    onChange = {handleInputChange}
                  />
                </div>
            </div>

            <div className="form-group row ">
                <label for="colFormLabel" className="col-sm-2 col-form-label">
                    Administration
                </label>
                <div className="col-sm-10">
                  <input    
                    type = "text"
                    name = "admin"
                    className="form-control text-white bg-dark" 
                    id="colFormLabel" 
                    placeholder = "Administration overhead"
                    autoComplete = "off"
                    value = {admin}
                    onChange = {handleInputChange}
                  />
                </div>
            </div>

            <div className="form-group row ">
                <label for="colFormLabel" className="col-sm-2 col-form-label">
                    Bonus
                </label>
                <div className="col-sm-10">
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
                </div>
            </div>

            <div className="form-group row ">
                <label for="colFormLabel" className="col-sm-2 col-form-label">
                    Transport
                </label>
                <div className="col-sm-10">
                  <input    
                    type = "text"
                    name = "transport"
                    className="form-control text-white bg-dark" 
                    id="colFormLabel" 
                    placeholder = "Transport price"
                    autoComplete = "off"
                    value = {transport}
                    onChange = {handleInputChange}
                  />
                </div>
            </div>
        </form>
    )
}











    /*return (
        <form onSubmit = {handleSubmit}>

            <div className = "form-group form-dark">
                <input
                    type = "text"
                    name = "edificio"
                    className = "form-control"
                    placeholder = "Nivel de edificio"
                    autoComplete = "off"
                    value = {edificio}
                    onChange = {handleInputChange}
                />
            </div>

            <div className = "form-group form-dark">
                <input
                    type = "text"
                    name = "PVM"
                    className = "form-control"
                    placeholder = "Porcentaje de venta bajo mercado"
                    autoComplete = "off"
                    value = {PVM}
                    onChange = {handleInputChange}
                />
            </div>

            <div className = "form-group form-dark">
                <input
                    type = "text"
                    name = "admin"
                    className = "form-control"
                    placeholder = "Gastos administrativos"
                    autoComplete = "off"
                    value = {admin}
                    onChange = {handleInputChange}
                />
            </div>

            <div className = "form-group form-dark">
                <input
                    type = "text"
                    name = "bonificacion"
                    className = "form-control"
                    placeholder = "Bonificación de producción"
                    autoComplete = "off"
                    value = {bonificacion}
                    onChange = {handleInputChange}
                />
            </div>

            <div className = "form-group form-dark">
                <input
                    type = "text"
                    name = "transporte"
                    className = "form-control"
                    placeholder = "Costo del transporte"
                    autoComplete = "off"
                    value = {transporte}
                    onChange = {handleInputChange}
                />
            </div>

        </form>
    )*/
