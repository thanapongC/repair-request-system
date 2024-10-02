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

const EquipmentRepairForm = () => {
  // State to manage form input
  const [documentId, setDocumentId] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [status, setStatus] = useState("Borrowed");

  const currentDate = new Date().toISOString().split("T")[0];

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
      <Grid container spacing={2}>
        {/* Document ID */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Equipment ID"
            variant="outlined"
            value={"E-28383"}
          />
        </Grid>

        {/* Issue Date */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Equipment Name"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Serial Number"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Issue Description"
            variant="outlined"
            multiline
            rows={4} // Set number of rows for multiline input
          />
        </Grid>

        {/* Status */}
        {/* <Grid item xs={6}>
          <Select
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            fullWidth
          >
            <MenuItem value="Borrowed">In Progress</MenuItem>
            <MenuItem value="Borrowed">Approve</MenuItem>
            <MenuItem value="Returned">Repair Completed</MenuItem>
            <MenuItem value="Returned">Repair Completed</MenuItem>
          </Select>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default EquipmentRepairForm;
