import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableContainer, } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { TableHeadMain } from './TableHeadMain';
import { Row } from './Rows/Row';
import { products_index } from '../../../languaje/products/products_index';

export const TableDemoProduction = () => {

    const  {languaje}  =  useSelector( state => state.conf );
    const namesProductsInfo = products_index[`${languaje}_productsInfo`];

    const detailOriginal =  [
        {
            item: "Electricidad",
            amount: 5,
            unitCost: 0.249,
            totalCost: 1.245,
            id: 1,
        },
        {
            item: "Mineral de hierro",
            amount: 1,
            unitCost: 4.7,
            totalCost: 4.7,
            id: 42,
        },
        {
            item: "Químicos",
            amount: 0.1,
            unitCost: 14.6,
            totalCost: 1.46,
            id: 17,
        }
    ]

    const detail = detailOriginal.map( primeItem => {

        const {name:newName} = namesProductsInfo.find( ({id}) => id === primeItem.id )

        return {...primeItem, item: newName}
    })
    

    const {name:product} = namesProductsInfo.find( ({id}) => id === 43)

    const tableDemo = [{
        product,
        id: 43,
        cost: 10.178227432016646,
        marketPrice: 11.5,
        unitsHour: 208.99836533728646,
        profitHourMarket: 120.54452387990975,
        profitHourContract: 162.34419694736704,
        detail,
        resume:{
            totalCostItems: 7.405,
            wages: 1.980876737154748,
            administrationOverhead: 0.7923506948618991,
            totalCostOfFabrication: 10.178227432016646,
        }
    }];

    //console.log(namesProductsInfo[1] );
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">

        <TableHeadMain/>

        <TableBody>
          {tableDemo.map((row) => (
            <Row key={row.product} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
