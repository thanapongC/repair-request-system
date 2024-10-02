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

const BorrowingDocument = () => {
  // State to manage form input
  const [documentId, setDocumentId] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [status, setStatus] = useState("Borrowed");

  // Handle form submission
  const handleFormSubmit = () => {
    const formData = {
      documentId,
      issueDate,
      returnDate,
      status,
    };
    console.log("Form Data:", formData);
  };

  return (
    <Box p={3} border="1px solid #ccc" borderRadius="8px">
      <Typography variant="h6" gutterBottom>
        Equipment Borrowing Document
      </Typography>

      <Grid container spacing={2}>
        {/* Document ID */}
        <Grid item xs={6}>
          <TextField
            label="Document ID"
            value={documentId}
            onChange={(e) => setDocumentId(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Issue Date */}
        <Grid item xs={6}>
          <TextField
            label="Issue Date"
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>

        {/* Return Date */}
        <Grid item xs={6}>
          <TextField
            label="Return Date"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>

        {/* Status */}
        <Grid item xs={6}>
          <Select
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            fullWidth
          >
            <MenuItem value="Borrowed">In Progress</MenuItem>
            <MenuItem value="Borrowed">Borrowed</MenuItem>
            <MenuItem value="Returned">Returned</MenuItem>
            <MenuItem value="Overdue">Overdue</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BorrowingDocument;
