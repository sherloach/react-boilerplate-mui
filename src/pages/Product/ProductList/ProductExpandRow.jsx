import PropTypes from 'prop-types';

// material core
import { IconButton, TableCell, TableRow, Box, Typography, LinearProgress } from '@mui/material';

// material icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// helpers
// import { canAction } from 'helpers';

// components
import ProductExpandDetail from './ProductExpandDetail';

// styles
import { editHighlightLine } from './styles';

const ProductExpandRow = ({ product, open, handleExpandRow }) => {
  const styles = editHighlightLine(open);

  return (
    <>
      <TableRow hover={true} sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell padding="checkbox" width="25%" sx={styles}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => handleExpandRow(open ? '' : product.name)}
          >
            {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell width="25%">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'background.default',
                backgroundImage: `url(${product.imageUrl})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden',
                width: '80px',
                height: '80px',
              }}
            />
            <Box sx={{ cursor: 'pointer', ml: 2 }}>
              <Typography variant="subtitle2">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                in {product.category}
              </Typography>
            </Box>
          </Box>
        </TableCell>
        <TableCell width="25%">
          <LinearProgress
            variant="determinate"
            color="success"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={product.stock.quantity}
            value={product.stock.quantity}
            sx={{
              height: '8px',
              width: '36px',
              borderRadius: '3px',
              backgroundColor: product.stock.quantity === 0 ? 'error.secondary' : '',
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {product.stock.quantity} in stock
            {product.stock.variants > 1 ? ` in ${product.stock.variants} variants` : ''}
          </Typography>
        </TableCell>
        <TableCell>${product.newPrice}</TableCell>
        <TableCell>{product.sku}</TableCell>
        <TableCell>
          <Typography
            component="span"
            variant="overline"
            sx={{
              display: 'inline-flex',
              backgroundColor: product.status === 1 ? 'success.main' : 'info.main',
              borderRadius: '12px',
              px: 1,
              color: 'neutral.900',
              whiteSpace: 'nowrap',
            }}
          >
            {product.status === 1 ? 'PUBLISHED' : 'DRAFT'}
          </Typography>
        </TableCell>
        <TableCell align="right">{product.protein}</TableCell>
      </TableRow>
      {open ? (
        <TableRow>
          <TableCell colSpan={7} sx={{ ...styles, p: 0 }}>
            <ProductExpandDetail product={product} />
          </TableCell>
        </TableRow>
      ) : (
        ''
      )}
    </>
  );
};

ProductExpandRow.propTypes = {
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

export default ProductExpandRow;
