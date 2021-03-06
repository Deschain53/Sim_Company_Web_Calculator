import React , { useEffect } from 'react';
import { useSelector  } from 'react-redux';
import { verifyNumber } from '../../../../auxiliar/verify';
//import { StyledTableCell } from '../../../../styles/material-ui-styles/tableStyles';
import { useFormReceptive } from '../../../../hooks/useFormReceptive';

const actionDefault = (idProduct) => {
    console.log('Submit from ' + idProduct);
}

export const EditableCell = ({idProduct,valueInitial=0, actionOnSubmit = actionDefault }) => {

    const {mode} = useSelector(state => state.conf);

    const [formValues, handleInputChange, setValues] = useFormReceptive({value:valueInitial});

    const { value } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        actionOnSubmit(idProduct, verifyNumber(value) );
    };

    useEffect(() => {
        setValues({value:valueInitial});
        // eslint-disable-next-line
    }, [valueInitial])

    const inputClassName = "form-control fs-6 " + (mode ==='dark' ? "text-white bg-dark " : "text-black bg-light ");

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <input    
                    type = "text"
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
