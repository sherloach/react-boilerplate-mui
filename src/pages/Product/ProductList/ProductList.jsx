import { useState } from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';

// css
import 'simplebar-react/dist/simplebar.min.css';

// material core
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Card } from '@mui/material';

// components
import ProductExpandRow from './ProductExpandRow';

// helpers
// import { canAction } from 'helpers';

// hooks
// import usePagination from 'hooks/usePagination';

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

ProductList.propsType = {
  product: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    category: PropTypes.string.isRequired,
    barcode: PropTypes.string.isRequired,
    oldPrice: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
    stock: PropTypes.shape({
      quantity: PropTypes.number.isRequired,
      variants: PropTypes.number.isRequired,
    }).isRequired,
    status: PropTypes.number.isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  handleExpandRow: PropTypes.func,
};

export default ProductList;
