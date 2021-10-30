import React from 'react'
import { useSelector  } from 'react-redux';
//import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles';
import { useForm } from '../../../../hooks/useForm';

const actionDefault = (idProduct) => {
    console.log('Submit from ' + idProduct);
}

export const EditableCell = ({idProduct,valueInitial=0, actionOnSubmit = actionDefault }) => {

    const {mode} = useSelector(state => state.conf);

    const [formValues, handleInputChange] = useForm({value:valueInitial});

    const handleSubmit = (e) => {
        e.preventDefault();
        actionOnSubmit(idProduct);
    };

    const { value } = formValues;

    const inputClassName = "form-control fs-6 " + (mode ==='dark' ? "text-white bg-dark " : "text-black bg-light ");

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <input    
                    type = "number"
                    name = "value"
                    className={ inputClassName } 
                    id="value" 
                    placeholder = {'0.00'}   
                    autoComplete = "off"
                    value = {value}
                    onChange = {handleInputChange}
                    />
                </div>
            </form>
    )
}
