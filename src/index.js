import React from 'react';
import ReactDOM from 'react-dom';
import { SimCompanyCalculators } from './SimCompanyCalculators';
import './styles/index.css';

ReactDOM.render(
  //<Provider store={store}>
  <SimCompanyCalculators /> 
  //</Provider>  
  ,
  document.getElementById('root')
)