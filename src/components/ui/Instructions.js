import React from 'react';
import { DarkModeButton } from './Buttons/DarkModeButton';
import { LanguajeDropDownButton } from './ProductionDDB/LanguajeDropDownButton';
import { TableDemoProduction } from './ProductionDemoTable/TableDemoProduction';

export const Instructions = () => {
    return (
        <div className="window-app">
            <div className="container-xxl">
                
                <div className="col col-sm-12 col-md-12 ">
                    <h2 className="h2 mt-2 mb-3" >Instructions for production calculator</h2>
                    <div className="row">
                        <p>
                            This tool was made to calculate the profit per hour for each product 
                            from a building. It is a way to know the viability at that moment
                            and can be used to take better decisions at the game. 
                        </p>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <p> 
                            1.- Push the button 'Get prices'. This action is going to get the current prices from the market 
                            using the Sim company's API and is going to save them in your browser.
                        </p>
                      </div>
                      <div className="col-sm">
                        <p>
                            2.- Fill the information needed. All numbers should be positive. If you made a mistake the
                            value per defaul is going to be readed as 0.
                        </p>
                      </div>
                      <div className="col-sm">
                        <p>
                            3.- Select the building, fase and quality.
                        </p>
                      </div>
                      <div className="col-sm">
                        <p>
                            4.- Press the button 'Calculate' to apply and save the changes.
                        </p>
                      </div>
                    </div>
                </div>

                <div className="col col-sm-12 col-md-12">
                    <h2 className="h3 mt-2 mb-3" >Some considerations</h2>
                    <div className="row">
                        <div className="col">
                            <p>
                                There things that are good to keep in mind while you use this tool. Some of them are:
                            </p>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                          <p>
                                The button 'Get prices' will be in color yellow if the prices were readed from your 
                                local storage in your browser, red if you don't have prices in your local storage and
                                green if you pressed the button in the current sesion. 
                          </p>
                      </div>
                      <div className="col-sm">
                            <p>
                                The calculator get the prices of all qualitys for all products and save them in your local 
                                storage, all calculations are made using this prices saved.
                                This mean that it is not necessary to press it before each calculation. Even if you close
                                and open the website again in most cases the prices are going to be there, saved.    
                            </p>
                      </div>
                      <div className="col-sm">
                            <p>
                                You can change the languaje using the mode between light/dark pressing
                                the next button <DarkModeButton/> here and in the top of the site. <br/>
                                You can also chang the langue using the menu: <LanguajeDropDownButton/>
                                These changes are also saved in your browser.
                            </p>              
                                       
                      </div>
                      <div className="col-sm">
                            <p>
                                The reason this tool take the market prices to make the calculus is because
                                that way is better to check the real profit. These could help you to take 
                                better desicions but you have to had your own criteria. We are not responsably
                                for any consecuences you might cause, use these at your own risk.
                            </p>                          
                      </div>
                    </div>
                </div>
                
            
            </div>

            <div className="container-xxl">
                <div className="mb-3">
                    <h3> Parts of the production calculator table </h3>
                    <TableDemoProduction/>
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