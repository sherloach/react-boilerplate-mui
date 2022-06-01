import { Helmet } from 'react-helmet';

// material core
import { Box, Container } from '@mui/material';

// mocks
import { products } from '__mocks__/products';

// components
import ProductToolbar from './ProductToolbar';
import ProductList from './ProductList';

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <ProductToolbar />
          <Box sx={{ pt: 3 }}>
            <ProductList products={products} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Products;
