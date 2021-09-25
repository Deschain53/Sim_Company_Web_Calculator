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
                        <div className="col-sm">
                            <p>
                                This tool was made to calculate the profit per hour for each product 
                                from a building. It is a way to know the viability at that moment
                                and can be used to take better decisions at the game. 
                            </p>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <p className="display-5"> 
                            <strong>1.- Push the button 'Get prices'. </strong> <br/>
                            This action is going to get the current prices from the market 
                            using the Sim company's API and is going to save them in your browser.
                        </p>
                      </div>
                      <div className="col-sm">
                        <p>
                            <strong> 2.- Fill the information needed.</strong> <br/>
                            All numbers should be positive. If you made a mistake the
                            value per defaul is going to be readed as 0.
                        </p>
                      </div>
                      <div className="col-sm">
                        <p>
                            <strong>3.- Select the building, fase and quality.</strong> <br/>
                            When you change this values the changes are applied inmediatly.
                        </p>
                      </div>
                      <div className="col-sm">
                        <p>
                            <strong>4.- Press the button 'Calculate'. </strong> <br/>
                            This will apply and save the changes.
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
                                You can also change the langue using the menu: 
                            </p>              
                                <LanguajeDropDownButton/>
                            <p>
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
                <div className="row">
                    <div className="col ">
                        <h3> Parts of the production calculator table </h3>
                        <TableDemoProduction/>
                    </div>
                </div>

                <h4> Columns </h4>

                <div className="row">
                    <div className="col-sm">
                        <p>
                            <strong>&#40;1&#41;&nbsp;</strong><br/>
                            The name of the product
                        </p>
                    </div>
                    <div className="col-sm">
                        <p>
                            <strong>&#40;2&#41;&nbsp;</strong><br/>
                            The total cost of production of one unit. More information about
                            how this number was get it's in the section 'Detail'. 
                        </p>
                    </div>
                    <div className="col-sm">
                        <p>
                            <strong>&#40;3&#41;&nbsp;</strong><br/>
                            This is the current market price of one unit for 
                            the quality selected.
                        </p>
                    </div>
                    <div className="col-sm">
                        <p>
                            <strong>&#40;4&#41;&nbsp;</strong><br/>
                            The units/hour produced per hour. This is calculated using the 
                            information of the building level, the bonus and the fase selected.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <p>
                            <strong>&#40;5&#41;&nbsp;</strong><br/>
                            This indicate the amount you would get per hour if you 
                            sold in the market at the price indicated in &#40;3&#41;.
                            To get this number colum &#40;2&#41;,&#40;4&#41; and
                            the comission of -3% is used. The information of the 
                            cost of one unit of transport and the hole amount needed is considered as well.
                        </p>
                    </div>
                    <div className="col-sm">
                        <p>
                        <strong>&#40;6&#41;&nbsp;</strong><br/>
                            This indicate the amount you would get per hour if you 
                            sold by contract with the discount of the porcentaje under
                            market price indicated. In this example a porcentaje of -3% is used.
                            To get this numer also colum &#40;2&#41;,&#40;4&#41; and information of the 
                            cost of transport and a half of the amount needed is used.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <p>
                            <strong>&#40;7&#41;&nbsp;</strong><br/>
                            The name of the items that are needed to make one unit of the product.
                        </p>
                    </div>
                    <div className="col-sm">
                        <p>
                            <strong>&#40;8&#41;&nbsp;</strong><br/>
                            Amount of the item needed.
                        </p>
                    </div>
                    <div className="col-sm">
                        <p>
                            <strong>&#40;9&#41;&nbsp;</strong><br/>
                            Price in the market of one unit of the item needed. 
                            Remember that this price is one qualiy less than the 
                            product you are making. So if you are making a product 
                            quality 6 you will need items quality 5. 
                        </p>
                    </div>
                    <div className="col-sm">
                        <p>
                            <strong>&#40;10&#41;&nbsp;</strong><br/>
                            This number is the result of multiplying &#40;8&#41;*&#40;9&#41;.
                        </p>
                    </div>
                </div>

                <h4> Rows </h4>
                
                <div className="row">
                    <div className="col-sm">
                        <p>
                            <strong>&#40;A&#41;&nbsp;</strong><br/>
                            Row corresponding at the product you are making
                        </p>
                    </div>
                    <div className="col-sm">
                        <p>
                            <strong>&#40;a&#41;&nbsp;</strong><br/>
                            Items needed to make the product in &#40;A&#41;&nbsp;.
                        </p>
                    </div>
                    <div className="col-sm">
                        <p>
                            <strong>&#40;b&#41;&nbsp;</strong><br/>
                            The addition of the total cost of items &#40;a&#41;&nbsp;.
                        </p>
                    </div>
                    <div className="col-sm">
                        <p>
                            <strong>&#40;c&#41;&nbsp;</strong><br/>
                            This inficates the wages you pay per unit is 
                            calculated using the information from &#40;4&#41;&nbsp;
                            and the wages of the building.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <p>
                            <strong>&#40;d&#41;&nbsp;</strong><br/>
                            Administration overhead calculated using the info of the admin
                            you indicated and the wages from &#40;c&#41;&nbsp;.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <p>
                            <strong>&#40;e&#41;&nbsp;</strong><br/>
                            Total cost of fabrication. It's calculated 
                            adding up &#40;b&#41;&nbsp;,
                            &#40;c&#41;&nbsp;, &#40;d&#41;&nbsp; and 
                            &#40;e&#41;&nbsp;.
                        </p>
                    </div>

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