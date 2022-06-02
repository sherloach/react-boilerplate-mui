import { useState } from 'react';
import PropTypes from 'prop-types';

// material core
import {
  Box,
  Button,
  Divider,
  CardContent,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  FormControlLabel,
  Switch,
} from '@mui/material';

const states = [
  {
    value: 'healthcare',
    label: 'Healthcare',
  },
  {
    value: 'makeup',
    label: 'Makeup',
  },
  {
    value: 'dress',
    label: 'Dress',
  },
  {
    value: 'skincare',
    label: 'Skincare',
  },
  {
    value: 'jewelry',
    label: 'Jewelry',
  },
  {
    value: 'blouse',
    label: 'Blouse',
  },
];

const ProductExpandDetail = ({ product, handleExpandRow }) => {
  const [values, setValues] = useState(product);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Typography variant="h6">Basic details</Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the product name"
                  label="Product name"
                  name="name"
                  onChange={handleChange}
                  required
                  value={values.name}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="SKU"
                  name="id"
                  onChange={handleChange}
                  disabled
                  required
                  value={values.sku}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant="outlined"
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Barcode"
                  name="barcode"
                  disabled
                  onChange={handleChange}
                  required
                  value={values.barcode}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h6">Pricing and stocks</Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the old price"
                  label="Old price"
                  name="oldPrice"
                  type="number"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    shrink: 'true',
                  }}
                  required
                  value={values.oldPrice}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="New price"
                  name="newPrice"
                  type="number"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    shrink: 'true',
                  }}
                  required
                  value={values.newPrice}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControlLabel control={<Switch />} label="Keep selling when stock is empty" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: '8px 16px',
        }}
      >
        <Button color="primary" variant="contained" sx={{ m: 1 }}>
          Update
        </Button>
        <Button
          color="primary"
          variant="outlined"
          sx={{ m: 1 }}
          onClick={() => handleExpandRow('')}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

ProductExpandDetail.propsType = {
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
  handleExpandRow: PropTypes.func,
};

export default ProductExpandDetail;
