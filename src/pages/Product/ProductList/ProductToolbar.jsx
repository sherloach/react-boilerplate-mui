import { Box, Typography, Button } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';

const ProductToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h4">
        Products
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button startIcon={<AddIcon fontSize="small" />} color="primary" variant="contained">
          Add
        </Button>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Button startIcon={<FileUploadIcon fontSize="small" />} sx={{ mr: 1 }}>
        Import
      </Button>
      <Button startIcon={<DownloadIcon fontSize="small" />}>Export</Button>
    </Box>
  </Box>
);

export default ProductToolbar;
