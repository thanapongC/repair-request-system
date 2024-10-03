// components/RepairForm.tsx

import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import PartsTable from "./tables/PartsTable";
import SummaryPrice from "./SummaryPrice";

interface Part {
  id: number;
  partCode: string;
  partName: string;
  partModel: string;
  partDetails: string;
  partPrice: number;
}

const RepairForm: React.FC = () => {
  const [parts, setParts] = useState<Part[]>([]);
  const [partCode, setPartCode] = useState("");
  const [partName, setPartName] = useState("");
  const [partModel, setPartModel] = useState("");
  const [partDetails, setPartDetails] = useState("");
  const [partPrice, setPartPrice] = useState<number | "">("");
  const [laborCost, setLaborCost] = useState<number | "">("");
  const [repairTime, setRepairTime] = useState<number | "">("");

  const handleAddPart = () => {
    if (partCode && partName && partModel && partDetails && partPrice) {
      const newPart: Part = {
        id: Date.now(),
        partCode,
        partName,
        partModel,
        partDetails,
        partPrice: Number(partPrice),
      };
      setParts([...parts, newPart]);
      clearInputs();
    }
  };

  const clearInputs = () => {
    setPartCode("");
    setPartName("");
    setPartModel("");
    setPartDetails("");
    setPartPrice("");
  };

  const handleDeletePart = (id: number) => {
    setParts(parts.filter((part) => part.id !== id));
  };

  return (
    <Box p={3} border="1px solid #ccc" borderRadius="8px">
      <Typography variant="h6" gutterBottom>
        Cost & Duration
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Insert Cost & Duration
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <TextField
            label="Repair Durarion (Hour)"
            type="number"
            variant="outlined"
            fullWidth
            size="small"
            value={repairTime}
            // onChange={(e) => setRepairTime(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Supervisor Email"
            type="number"
            variant="outlined"
            fullWidth
            size="small"
            value={repairTime}
            // onChange={(e) => setRepairTime(e.target.value)}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
        Equipment List
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Insert Your Equipment List
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <TextField
            label="SKU Part"
            variant="outlined"
            fullWidth
            size="small"
            value={partCode}
            onChange={(e) => setPartCode(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Part Name"
            variant="outlined"
            fullWidth
            size="small"
            value={partName}
            onChange={(e) => setPartName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Serial Part"
            variant="outlined"
            fullWidth
            size="small"
            value={partModel}
            onChange={(e) => setPartModel(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Part Detail"
            variant="outlined"
            fullWidth
            size="small"
            value={partDetails}
            onChange={(e) => setPartDetails(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Part Price"
            variant="outlined"
            fullWidth
            type="number"
            size="small"
            value={partPrice}
            // onChange={(e) => setPartPrice(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Quantity"
            variant="outlined"
            fullWidth
            type="number"
            size="small"
            value={partPrice}
            // onChange={(e) => setPartPrice(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>
            Add Part
          </Button>
        </Grid>
      </Grid>

      <Grid xs={12} spacing={2} sx={{ mt: 2 }}>
        <PartsTable />
        <SummaryPrice />
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} container justifyContent={"flex-end"}>
          <Button variant="contained" color="secondary" sx={{ mr: 1 }}>
            Update Status And Next Step
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RepairForm;
