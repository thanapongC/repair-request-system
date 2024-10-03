import React from 'react';
import { NextPage } from 'next';
import { Container, Typography, Box, CircularProgress, Button } from '@mui/material';
import Head from 'next/head';

const PendingApproval: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pending Approval - Your App Name</title>
        <meta name="description" content="Waiting for supervisor approval" />
      </Head>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
          }}
        >
          <CircularProgress size={60} sx={{ mb: 4 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Pending Approval
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Your Document is currently awaiting approval from a supervisor.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Please check back later or contact support if you have any questions.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 5 }}>
            Approve
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default PendingApproval;