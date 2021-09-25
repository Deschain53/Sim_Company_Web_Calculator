import React from 'react';
import { useSelector } from 'react-redux';
import { instructions_index } from '../../languaje/instructions/instructions_index';
import { DarkModeButton } from './Buttons/DarkModeButton';
import { LanguajeDropDownButton } from './ProductionDDB/LanguajeDropDownButton';
import { TableDemoProduction } from './ProductionDemoTable/TableDemoProduction';

export const Instructions = () => {
    const { languaje } = useSelector(state => state.conf);
    const instructions = instructions_index[`${languaje}_instructions`];
    console.log(instructions);

    return (
        <div className="window-app">


            <div className="container-xxl">

                <div className="col col-sm-12 col-md-12 ">

                    <h2 className="h2 mt-2 mb-3" >{ instructions.productionTitle }</h2>
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

                </div>


                <div className="col col-sm-12 col-md-12">

                    <h2 className="h3 mt-2 mb-3" >{ instructions.considerationTitle }</h2>
                    <div className="row">
                        <div className="col">
                            <p> { instructions.considerationsText } </p>
                        </div>
                    </div>

                    <div className="row">
                        {
                          instructions.considerationsArray.map( ({id, text}) => 
                            (
                                <div className="col-sm" key={id}>
                                  <p className="display-5"> 
                                    { text }
                                  </p>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>

            </div>

            <div className="container-xxl">

                <div className="row">
                    <div className="col ">
                        <h3> { instructions.partsProductionTitle } </h3>
                        <TableDemoProduction/>
                    </div>
                </div>

                <h4> { instructions.columnsTitle } </h4>
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

                <h4> { instructions.rowsTitle }  </h4>
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

            </div>


        </div>
    )
}


/*
                <div className="col col-sm-12 col-md-12">
                    <h2 className="h2 mt-2 mb-3" >Instructions for retail calculator</h2>
                    <div className="row">
                        <div className="col">
                            <p>
                                dsfdsffddfdfdfdfdsfdsfdfs
                            </p>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <p>Quis sit excepteur proident eu commodo anim qui velit ullamco commodo reprehenderit officia irure.</p>
                      </div>
                      <div className="col-sm">
                        <p>Voluptate magna anim nisi adipisicing est adipisicing ad voluptate. Amet cillum in deserunt mollit aliqua commodo excepteur. Minim do mollit tempor quis occaecat. Commodo excepteur mollit aliquip velit mollit reprehenderit incididunt consequat. Duis ad consectetur occaecat aliquip.</p>
                      </div>
                      <div className="col-sm">
                        <p>Exercitation consequat pariatur aute nostrud sunt duis dolor. Culpa esse irure ullamco commodo ipsum non irure irure qui proident id ullamco do aliqua. Officia fugiat nulla mollit ea nulla sit ipsum amet ullamco culpa irure qui. Sit mollit elit esse ea consectetur fugiat officia do esse commodo.</p>
                      </div>
                      <div className="col-sm">
                        <p>Quis sit excepteur proident eu commodo anim qui velit ullamco commodo reprehenderit officia irure.</p>
                      </div>
                    </div>
                </div>
*/