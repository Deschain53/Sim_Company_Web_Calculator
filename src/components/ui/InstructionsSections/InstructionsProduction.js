import React from 'react'

export const InstructionsProduction = React.memo(({instructions}) => {
    return (
        <>
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
        </>
    )
})
