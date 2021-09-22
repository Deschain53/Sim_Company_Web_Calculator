import React, {useMemo} from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableContainer, } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { TableHeadMain } from './TableHeadMain';
import { Row } from './Rows/Row';
import { getInfoTableDemo } from './getInfoTableDemo';


export const TableDemoProduction = () => {

    const {languaje}  =  useSelector( state => state.conf );

    const tableDemo = useMemo(() => getInfoTableDemo(languaje), [languaje]);    

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
