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

const BorrowedEquipmentList = () => {
  // State to manage form input
  const [equipmentId, setEquipmentId] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [equipmentName, setEquipmentName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [equipmentStatus, setEquipmentStatus] = useState("Available");
  const [rentalPricePerDay, setRentalPricePerDay] = useState(0);
  const [rentalDays, setRentalDays] = useState(1);

  // Handle form submission
  const handleFormSubmit = () => {
    const formData = {
      equipmentId,
      equipmentName,
      quantity,
      equipmentStatus,
      rentalPricePerDay,
      rentalDays,
    };
    console.log("Borrowed Equipment:", formData);
  };

  return (
    <Box p={3} border="1px solid #ccc" borderRadius="8px">
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Add Borrowed Equipment Category
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Category Name"
            size="small"
            value={equipmentId}
            onChange={(e) => setEquipmentId(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            Add Category
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Add Borrowed Equipment List
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Select
            label="Equipment Status"
            value={1}
            onChange={(e) => setEquipmentStatus(e.target.value as string)}
            fullWidth
          >
            <MenuItem value="1">Undefind</MenuItem>
            <MenuItem value="2">Category 1</MenuItem>
            <MenuItem value="3">Category 2</MenuItem>
          </Select>
        </Grid>

        {/* Equipment ID */}
        <Grid item xs={6}>
          <TextField
            label="Equipment ID (S/N)"
            value={equipmentId}
            onChange={(e) => setEquipmentId(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Equipment Name */}
        <Grid item xs={6}>
          <TextField
            label="Equipment Name"
            value={equipmentName}
            onChange={(e) => setEquipmentName(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Quantity */}
        <Grid item xs={2}>
          <TextField
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            fullWidth
          />
        </Grid>

        {/* Equipment Status */}
        {/* <Grid item xs={6}>
          <Select
            label="Equipment Status"
            value={equipmentStatus}
            onChange={(e) => setEquipmentStatus(e.target.value as string)}
            fullWidth
          >
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Under Maintenance">Under Maintenance</MenuItem>
            <MenuItem value="Returned">Returned</MenuItem>
          </Select>
        </Grid> */}

        {/* Rental Price Per Day */}
        <Grid item xs={4}>
          <TextField
            label="Rental Price per Day"
            type="number"
            value={rentalPricePerDay}
            onChange={(e) => setRentalPricePerDay(parseFloat(e.target.value))}
            fullWidth
          />
        </Grid>

        {/* Number of Rental Days */}
        <Grid item xs={4}>
          <TextField
            label="Start Date"
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="End Date"
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Remake"
            type="text"
            multiline
            rows={3}
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            Add Borrow Equipment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BorrowedEquipmentList;
