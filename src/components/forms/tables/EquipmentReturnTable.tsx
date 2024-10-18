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
import {
  EditNoteTwoTone,
  DeleteSweepTwoTone,
  Visibility,
} from "@mui/icons-material";
import BaseCard from "@/components/shared/BaseCard";
import { formatNumber } from "@/utils/utils";
import EquipmentRepairForm from "../EquipmentRepairForm";
import ViewRemakeDialog from "@/components/shared/RemakeViewer";
import UpdateEquipmentDialog from "../UpdateEquipmentDialog";

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
    totalPrice: 2500,
  },
  {
    equipmentId: 2,
    equipmentName: "Bulldozer",
    quantity: 1,
    status: "Under Maintenance",
    rentalPricePerDay: 800,
    rentalDays: 3,
    totalPrice: 2400,
  },
];

const EquipmentReturnTable: React.FC = () => {
  const [equipments, setEquipments] = useState<Equipment[]>(initialData);

  const [open, setOpen] = useState(false);
  const [remakeText, setRemakeText] = useState("This is the remake content.");

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedEquipments = [...equipments];
    updatedEquipments[index].status = newStatus;
    setEquipments(updatedEquipments);
  };

  const [open2, setOpen2] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("Borrow");

  const handleOpenDialog2 = () => {
    setOpen(true);
  };

  const handleCloseDialog2 = () => {
    setOpen(false);
  };

  const handleSave = (newStatus: string, remark: string) => {
    console.log("New Status:", newStatus);
    console.log("Remark:", remark);
    setCurrentStatus(newStatus);
  };

  return (
    <BaseCard title="Equipment Rental">
      <TableContainer
        sx={{
          width: {
            xs: "254px",
            sm: "100%",
          },
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  #S/N
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Equipment Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Days Left
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Amount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Charge Price
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Remake
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Update
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Returned Remake
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {products.map((product) => ( */}
            <>
              <TableRow key={1}>
                <TableCell colSpan={6}>Category 1</TableCell>
              </TableRow>
              {/* {product.subProductList && */}
              {/* // product.subProductList.map((subProduct) => ( */}
              <TableRow key={1}>
                <TableCell style={{ paddingLeft: 34 }}>S/N123456</TableCell>
                <TableCell>Product 1</TableCell>
                <TableCell align="right">10</TableCell>
                <TableCell align="right">3</TableCell>

                <TableCell align="right">3000</TableCell>
                <TableCell align="left">
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={handleOpenDialog}
                    // onClick={() => handleEditSubProduct(subProduct)}
                  >
                    <Visibility />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={handleOpenDialog2}
                  >
                    <EditNoteTwoTone />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={handleOpenDialog}
                    // onClick={() => handleEditSubProduct(subProduct)}
                  >
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>

              {/* ))} */}
              {/* <TableRow key={1} sx={{ backgroundColor: "#E67E5F", color: '#fff' }}>
                <TableCell colSpan={3} sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontWeight: 700, color: '#fff' }}>Total</Typography>
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right" sx={{ color: '#fff'}}>
                  <Typography sx={{ fontWeight: 500 }}>
                    {formatNumber(9000)} ฿
                  </Typography>
                </TableCell>
                <TableCell colSpan={2}></TableCell>
              </TableRow> */}
            </>
            {/* ))} */}
          </TableBody>
        </Table>
        <ViewRemakeDialog
          open={open}
          onClose={handleCloseDialog}
          remake={remakeText}
        />
        <UpdateEquipmentDialog
          open={open}
          onClose={handleCloseDialog2}
          currentStatus={currentStatus}
          onSave={handleSave}
        />
      </TableContainer>
    </BaseCard>
  );
};

export default EquipmentReturnTable;
