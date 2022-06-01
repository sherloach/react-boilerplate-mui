import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import SimpleBar from 'simplebar-react';

// css
import 'simplebar-react/dist/simplebar.min.css';

// material core
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Card } from '@mui/material';

// configs
import { PATH } from 'configs';

// components
import ProductExpandRow from './ProductExpandRow';

// helpers
// import { canAction } from 'helpers';

// hooks
// import usePagination from 'hooks/usePagination';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

const ProductList = ({ products }) => {
  const [currOpenRow, setCurrOpenRow] = useState('');
  // const { page, perPage, _changePage, _changePerPage } = usePagination();

  const _handleExpandRow = (currRow) => {
    setCurrOpenRow(currRow);
  };

  return (
    <Paper component={Card}>
      <SimpleBar style={{ margin: 0 }}>
        <Table aria-label="collapsible table" sx={{ minWidth: '1200px' }}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell width="25%">Name</TableCell>
              <TableCell width="25%">Stock</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Sku</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              // TODO: design expand component that not pre-render but render when user click
              <ProductExpandRow
                key={row.name}
                product={row}
                open={row.name === currOpenRow}
                handleExpandRow={(currRow) => _handleExpandRow(currRow)}
              />
            ))}
          </TableBody>
        </Table>
      </SimpleBar>
    </Paper>
  );
};

export default ProductList;
