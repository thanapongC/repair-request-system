"use client";

import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
  IconButton,
  Button,
  Grid,
  Alert,
  Avatar,
  Pagination,
} from "@mui/material";
import BaseCard from "@/components/shared/BaseCard";
import {
  CloudDownload,
  DriveFileRenameOutline,
  Email,
  Print,
  RemoveCircle,
} from "@mui/icons-material";
import { useDatabaseContext, UserManagement } from "@/contexts/dbContext";
import StatusChip from "@/components/shared/StatusChip";
import { useRouter } from "next/navigation";
import ConfirmDelete from "@/components/shared/ConfirmDialog";
import SearchForm from "@/components/shared/SearchForm";
import StatusAlert from "@/components/shared/StatusAlert";
import PaginationComponent from "@/components/shared/Pagination";

interface MaintenanceTableProps {
  data?: UserManagement[];
}

const MaintenanceTable: React.FC<MaintenanceTableProps> = () => {
  const { userState } = useDatabaseContext();

  const router = useRouter();

  const totalItems = 100; // Define the total number of items
  const [currentItems, setCurrentItems] = useState<string[]>([]);

  // Handle page change by updating the current items to display
  const handlePageChange = (
    items: string[],    // This is the array of paginated items
    currentPage: number, 
    itemsPerPage: number
  ) => {
    console.log(`Current Page: ${currentPage}, Items Per Page: ${itemsPerPage}`);
    setCurrentItems(items); // Update the displayed items
  };

  const [alertStatus, setAlertStatus] = useState<{
    status: "success" | "error" | "info" | "warning";
    message: string;
    show: boolean;
  }>({
    status: "error",
    message: "create insert update delete success",
    show: true,
  });

  const handleDeleteItem = () => {
    console.log("Item deleted");
    // Your delete logic goes here
  };

  const handleRemove = (keyId: string) => {
    return <ConfirmDelete itemName="Sample Item" onDelete={handleDeleteItem} />;
    // removeQuotation(keyId)
  };

  const handleEdit = (keyId: string) => {
    router.push(`/user-management/edit-profile`);
    // router.push(`/user-management/edit-profile/${keyId}`)
  };

  return (
    <BaseCard title={""}>
      <TableContainer
        sx={{
          width: {
            xs: "274px",
            sm: "100%",
          },
        }}
      >
        <Grid container>
          <Grid container item xs={12}>
            <SearchForm />
          </Grid>
        </Grid>

        <Table
          aria-label="table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Employee Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Role
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Status
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="textSecondary" variant="h6">
                  Email
                </Typography>
              </TableCell>
              <TableCell align="center">
                {/* <Typography color="textSecondary" variant="h6">
                  Edit/Remove
                </Typography> */}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userState.map((data, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Avatar />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {data.name} {data.surname}
                      </Typography>
                      {/* <Typography color="textSecondary" fontSize="13px">
                        No.{" "}
                        {data.headForm
                          ? data.headForm?.quotationNumber
                          : "1xx-11x-xxx"}
                      </Typography> */}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {data.roleId}
                  </Typography>
                </TableCell>
                <TableCell>
                  <StatusChip status={data.status} />
                </TableCell>
                <TableCell align="center">{data.email}</TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    color="secondary"
                    sx={{ ml: 2 }}
                    onClick={() => handleEdit(data.keyId)}
                  >
                    <DriveFileRenameOutline />
                  </IconButton>
                  <ConfirmDelete
                    itemName="Sample Item"
                    onDelete={handleDeleteItem}
                  />
                  <IconButton
                    size="small"
                    color="success"
                    // onClick={() => handleRemove(data.keyId)}
                  >
                    <Email />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationComponent
           totalItems={totalItems}
           itemsPerPageOptions={[5, 10, 20]} // Optional, defaults to [5, 10, 20]
           onPageChange={handlePageChange}   // This handles page changes
        />
        <StatusAlert
          status={alertStatus.status}
          message={alertStatus.message}
          show={alertStatus.show}
          onClose={() => setAlertStatus((prev) => ({ ...prev, show: false }))}
        />
      </TableContainer>
    </BaseCard>
  );
};

export default MaintenanceTable;
