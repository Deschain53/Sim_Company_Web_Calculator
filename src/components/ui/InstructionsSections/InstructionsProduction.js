import React, { useState } from 'react'
import { Collapse } from '@material-ui/core';
import { IconDropDownButton } from '../Buttons/IconDropDownButton';

export const InstructionsProduction = React.memo(({instructions}) => {
    const [open, setOpen] = useState(true);
    return (
    <>
        <div className="d-flex flex-row bd-highlight mb-2">
            <h2 className="p-2 bd-highlight" >{ instructions.productionTitle }</h2>
            <IconDropDownButton className="p-2 bd-highlight" open={open} setOpen={setOpen}/>
        </div>

        <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="row">
                <div className="col-sm">
                    <p> { instructions.productionText } </p>
                </div>
            </div>

            <div className="row">
                {
                  instructions.productionArray.map( ({id, title, text}) => 
                    (
                        <div className="col-sm" key={id}>
                          <p className="display-5"> 
                            <strong> { id }.-{ title } </strong><br/>
                            { text }
                          </p>
                        </div>
                    ))
                }
            </div>
        </Collapse>
    </>
    )
})
