import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
} from "@mui/material";

const BorrowerInformation = () => {
  // State to manage form input
  const [borrowerName, setBorrowerName] = useState("");
  const [borrowerId, setBorrowerId] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  // Handle form submission
  const handleFormSubmit = () => {
    const formData = {
      borrowerName,
      borrowerId,
      contactInfo,
    };
    console.log("Borrower Information:", formData);
  };

  return (
    <Box p={3} border="1px solid #ccc" borderRadius="8px">
      <Typography variant="h6" gutterBottom>
        Borrower Information
      </Typography>

      <Grid container spacing={2}>
        {/* Borrower Name */}
        <Grid item xs={6}>
          <TextField
            label="Borrower Name"
            value={borrowerName}
            onChange={(e) => setBorrowerName(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Borrower ID */}
        <Grid item xs={6}>
          <TextField
            label="Borrower ID"
            value={borrowerId}
            onChange={(e) => setBorrowerId(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12}>
          <TextField
            label="Contact Information"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            fullWidth
          />
        </Grid>

      </Grid>
    </Box>
  );
};

export default BorrowerInformation;
