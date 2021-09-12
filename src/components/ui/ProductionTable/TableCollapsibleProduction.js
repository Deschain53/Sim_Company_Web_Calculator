import React, { useEffect } from 'react';
import { Table, TableBody, TableContainer, } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { TableHeadMain } from './TableHeadMain';
import { Row } from './Rows/Row';
import { useDispatch, useSelector } from 'react-redux';
import { calculaTodo } from '../../../actions/tableP';
import { useProductsBuilding } from '../../../hooks/useProductsBuilding';

export const TableCollapsibleProduction = () => {
  
  const dispatch = useDispatch();

  const  tableP  = useSelector( state => state.tableP );
  const  production  = useSelector( state => state.production );
  const  products  =  useSelector( state => state.products );

  const {productsJSON} =  useProductsBuilding(products,production);


  ///console.log(productsJSON);

  useEffect(() => {
    dispatch(calculaTodo(tableP, production));
  }, [production])
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">

        <TableHeadMain/>

        <TableBody>
          {tableP.map((row) => (
            <Row key={row.product} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



