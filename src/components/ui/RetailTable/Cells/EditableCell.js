import React from 'react'
import { useSelector  } from 'react-redux';
import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles';
import { useForm } from '../../../../hooks/useForm';

export const EditableCell = ({idProduct,valueInitial=0}) => {

    const {mode} = useSelector(state => state.conf);

    const [formValues, handleInputChange] = useForm({value:valueInitial});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit from ' + idProduct);
    };

    const { value } = formValues;

    const inputClassName = "form-control " + (mode ==='dark' ? "text-white bg-dark " : "text-black bg-light ");

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
