import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  Button,
  Grid,
  Typography,
} from "@mui/material";

const BorrowReturnDetails = () => {
  // State to manage form input
  const [borrowDate, setBorrowDate] = useState("");
  const [actualReturnDate, setActualReturnDate] = useState("");
  const [returnStatus, setReturnStatus] = useState("Returned Fully");
  const [remarks, setRemarks] = useState("");

  // Handle form submission
  const handleFormSubmit = () => {
    const formData = {
      borrowDate,
      actualReturnDate,
      returnStatus,
      remarks,
    };
    console.log("Borrow Return Details:", formData);
  };

  return (
    <Box p={3} border="1px solid #ccc" borderRadius="8px">
      <Typography variant="h6" gutterBottom>
        Borrow-Return Details
      </Typography>

      <Grid container spacing={2}>
        {/* Borrow Date */}
        <Grid item xs={6}>
          <TextField
            label="Borrow Date"
            type="date"
            value={borrowDate}
            onChange={(e) => setBorrowDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>

        {/* Actual Return Date */}
        <Grid item xs={6}>
          <TextField
            label="Actual Return Date"
            type="date"
            value={actualReturnDate}
            onChange={(e) => setActualReturnDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>

        {/* Return Status */}
        <Grid item xs={6}>
          <Select
            label="Return Status"
            value={returnStatus}
            onChange={(e) => setReturnStatus(e.target.value as string)}
            fullWidth
          >
            <MenuItem value="Returned Fully">Returned Fully</MenuItem>
            <MenuItem value="Returned Partially">Returned Partially</MenuItem>
            <MenuItem value="Damaged">Damaged</MenuItem>
          </Select>
        </Grid>

        {/* Remarks */}
        <Grid item xs={12}>
          <TextField
            label="Remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            multiline
            rows={4}
            fullWidth
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BorrowReturnDetails;
