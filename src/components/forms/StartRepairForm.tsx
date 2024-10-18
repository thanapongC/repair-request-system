import React, { useState } from "react";
import { NextPage } from "next";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Button,
  Input,
  TextField,
  Grid,
} from "@mui/material";
import Head from "next/head";
import { Label } from "recharts";

const StartRepairForm: NextPage = () => {
  const [date, setReturnDate] = useState(new Date());

  const handleWithdraw = () => {
    // Implement withdrawal logic here
    console.log("Withdrawal initiated");
    // You might want to add a state to show a success message or redirect the user
  };

  return (
    <>
      <Head>
        <title>Awaiting Parts Withdrawal - Your App Name</title>
        <meta name="description" content="Awaiting parts withdrawal" />
      </Head>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "40vh",
            textAlign: "center",
          }}
        >
          <CircularProgress size={60} sx={{ mb: 4 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Repair Start Date Scheduling
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Waiting for the repair start date to be scheduled.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="date"
                label="Repair Date"
                variant="outlined"
                margin="normal"
                value={date}
                fullWidth
                //   value={repairDate}
                //   onChange={(e) => setRepairDate(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="time"
                label="Repair Time"
                variant="outlined"
                margin="normal"
                value={date}
                fullWidth
                //   value={repairDate}
                //   onChange={(e) => setRepairDate(e.target.value)}
                required
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleWithdraw}
            sx={{ mt: 2 }}
          >
            Start the repair
          </Button>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            click the "Start the repair" button to begin the repair
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default StartRepairForm;
