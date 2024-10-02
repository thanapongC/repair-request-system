import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { EditNoteTwoTone, DeleteSweepTwoTone } from "@mui/icons-material";
import BaseCard from "@/components/shared/BaseCard";

interface Equipment {
  equipmentId: number;
  equipmentName: string;
  quantity: number;
  status: string;
  rentalPricePerDay: number;
  rentalDays: number;
  totalPrice: number;
}

const initialData: Equipment[] = [
  {
    equipmentId: 1,
    equipmentName: "Excavator",
    quantity: 2,
    status: "Borrow",
    rentalPricePerDay: 500,
    rentalDays: 5,
    totalPrice: 2500
  },
  {
    equipmentId: 2,
    equipmentName: "Bulldozer",
    quantity: 1,
    status: "Under Maintenance",
    rentalPricePerDay: 800,
    rentalDays: 3,
    totalPrice: 2400
  },
];


const EquipmentTable: React.FC = () => {
  const [equipments, setEquipments] = useState<Equipment[]>(initialData);

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedEquipments = [...equipments];
    updatedEquipments[index].status = newStatus;
    setEquipments(updatedEquipments);
  };

  return (
    <BaseCard title="Equipment Rental">
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Equipment ID</TableCell>
              <TableCell>Equipment Name</TableCell>
              <TableCell>Quantity</TableCell>
              {/* <TableCell>Equipment Status</TableCell> */}
              <TableCell>Rental Price per Day</TableCell>
              <TableCell>Number of Rental Days</TableCell>
              <TableCell>TotalPrice</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equipments.map((equipment, index) => (
              <TableRow key={equipment.equipmentId}>
                <TableCell>{equipment.equipmentId}</TableCell>
                <TableCell>{equipment.equipmentName}</TableCell>
                <TableCell>{equipment.quantity}</TableCell>
                <TableCell>
                  <Select
                    value={equipment.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                  >
                    <MenuItem value="Borrow">Borrow</MenuItem>
                    <MenuItem value="Under Maintenance">Under Maintenance</MenuItem>
                    <MenuItem value="Returned">Returned</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>{equipment.rentalPricePerDay}</TableCell>
                <TableCell>{equipment.rentalDays}</TableCell>
                <TableCell>{equipment.totalPrice}</TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <EditNoteTwoTone />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton color="error">
                    <DeleteSweepTwoTone />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseCard>
  );
};

export default EquipmentTable;
