import React , { useState } from 'react'
import { Collapse } from '@material-ui/core';
import { IconDropDownButton } from '../../Buttons/IconDropDownButton';

export const RowsExplain = React.memo(({instructions}) => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <div className="d-flex flex-row bd-highlight mb-2">
            <h4 className="p-2 bd-highlight"> { instructions.rowsTitle } </h4>
            <IconDropDownButton open={open} setOpen={setOpen} className="p-2 bd-highlight"/>
        </div>

            <Collapse in={open} timeout="auto" unmountOnExit>  
                <div className="row">
                    {
                        instructions.rowsProductionArray.map( ({id,title, text}) => 
                            (
                                <div className="col col-md-3" key={id}>
                                    <strong> &#40;{ id }&#41;&nbsp;{ title }</strong><br/>
                                    <p className="display-5"> 
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
