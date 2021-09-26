import React from 'react';

export const ColumnsExplain = React.memo(({instructions}) =>{
    return (
        <>
            <div className="row">
                {
                    instructions.columnsProductionArray.map( ({id,title, text}) => 
                        (
                            <div className="col col-md-4" key={id}>
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
