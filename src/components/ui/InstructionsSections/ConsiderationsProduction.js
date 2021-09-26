import React from 'react'

export const ConsiderationsProduction = React.memo(({instructions}) => {
    return (
        <>
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
        </>
    )
})
