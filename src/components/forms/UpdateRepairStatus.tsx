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
  Select,
  MenuItem,
} from "@mui/material";
import Head from "next/head";
import { Label } from "recharts";

const UpdateRepairStatus: NextPage = () => {
  const [date, setReturnDate] = useState(new Date());
  const [status, setStatus] = useState("completed");

  const handleWithdraw = () => {
    // Implement withdrawal logic here
    console.log("Withdrawal initiated");
    // You might want to add a state to show a success message or redirect the user
  };

  return (
    <>
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
            Waiting for repair equipment.
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            If your equipment has been repaired, don’t forget to update the
            repair status.
          </Typography>
          <Grid container my={3}>
            <Grid container item xs={6} justifyContent={"flex-end"} pr={2}>
              <TextField
                type="date"
                size="small"
                label="Repair Completed Date"
                variant="outlined"
                value={date}
                fullWidth
                //   value={repairDate}
                //   onChange={(e) => setRepairDate(e.target.value)}
                required
              />
            </Grid>
            <Grid container item xs={6}>
              <Select
                label="Status"
                value={status}
                size="small"
                onChange={(e) => setStatus(e.target.value as string)}
                fullWidth
              >
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="unrepairable">Unrepairable</MenuItem>
              </Select>
            </Grid>
            <Grid container item xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Remark"
                variant="outlined"
                multiline
                rows={3}
                sx={{ mt: 2}}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleWithdraw}
            sx={{ mt: 1 }}
          >
            Repair Complete
          </Button>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            click the "Repair Complete" button to finish the repair
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default UpdateRepairStatus;
