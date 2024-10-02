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
      <Typography variant="h6" gutterBottom>
        Borrowed Equipment List
      </Typography>

      <Grid container spacing={2}>
        {/* Equipment ID */}
        <Grid item xs={6}>
          <TextField
            label="Equipment ID"
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
        <Grid item xs={4}>
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
            label="Number of Rental Days"
            type="number"
            value={rentalDays}
            onChange={(e) => setRentalDays(parseInt(e.target.value))}
            fullWidth
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>
            Add Equipment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BorrowedEquipmentList;
