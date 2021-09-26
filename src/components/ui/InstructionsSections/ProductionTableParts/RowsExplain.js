import React from 'react';

export const RowsExplain = React.memo(({instructions}) => {
    return (
        <>
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
        </>
    )
})
