import React, { useState } from 'react'
import { Collapse } from '@material-ui/core';
import { IconDropDownButton } from '../Buttons/IconDropDownButton';

export const ConsiderationsProduction = React.memo(({instructions}) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div className="d-flex flex-row bd-highlight mb-2">
          <h3 className="p-2 bd-highlight" >{ instructions.considerationsTitle }</h3>
          <IconDropDownButton className="p-2 bd-highlight" open={open} setOpen={setOpen}/>
        </div>

        <Collapse in={open} timeout="auto" unmountOnExit>   
            <div className="row">
                <div className="col">
                    <p> { instructions.considerationsText } </p>
                </div>
            </div>
            
            <div className="row">
                {
                  instructions.considerationsArray.map( ({id, text}) => 
                    (
                        <div className="col-sm col-md-6" key={id}>
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
