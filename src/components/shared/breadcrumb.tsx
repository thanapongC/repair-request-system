import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumb = () => {
  return (
    <div>
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        Account Setting
      </Typography>
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ marginBottom: 2 }} // Add some margin below
      >
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Account Setting</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
