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
  TableContainer,
  Grid,
  IconButton,
} from "@mui/material";
import BaseCard from "@/components/shared/BaseCard";
import SearchForm from "@/components/shared/SearchForm";
import StatusAlert from "@/components/shared/StatusAlert";
import ConfirmDelete from "@/components/shared/ConfirmDialogCustom";
import PaginationComponent from "@/components/shared/Pagination";
import { useRouter } from "next/navigation";
import {
  Download,
  DriveFileRenameOutline,
  Edit,
  Email,
} from "@mui/icons-material";
import StatusChip from "@/components/shared/StatusChipCustom";
import { formatNumber } from "@/utils/utils";
import { IconEye } from "@tabler/icons-react";

interface MADocument {
  documentId: string;
  issueDate: string;
  statusRepair: string;
  repairDuration: number;
  repirePrice: number;
}

const repairStatuses = [
  "pending",
  "in-progress",
  "on-hold",
  "completed",
  "cancelled",
  "awaiting-approval",
  "under-review",
  "parts-ordered",
  "ready-for-pickup",
  "unrepairable"
];

const BorrowingDocumentTable: React.FC = () => {
  const router = useRouter();

  const totalItems = 100; // Define the total number of items
  const [currentItems, setCurrentItems] = useState<string[]>([]);

    // Example data for the borrowing document
    const MADocuments: MADocument[] = [
      {
        documentId: "B001",
        issueDate: "2024-09-01",
        repairDuration: 3,
        repirePrice: 98473,
        statusRepair: "pending",
      },
      // {
      //   documentId: "B002",
      //   issueDate: "2024-09-01",
      //   repairDuration: 3,
      //   repirePrice: 98473,
      //   statusRepair: "in-progress",
      // },
      // {
      //   documentId: "B003",
      //   issueDate: "2024-09-01",
      //   repairDuration: 3,
      //   repirePrice: 98473,
      //   statusRepair: "on-hold",
      // },
      {
        documentId: "B004",
        issueDate: "2024-09-01",
        repairDuration: 3,
        repirePrice: 98473,
        statusRepair: "completed",
      },
      {
        documentId: "B005",
        issueDate: "2024-09-01",
        repairDuration: 3,
        repirePrice: 98473,
        statusRepair: "cancelled",
      },
      {
        documentId: "B006",
        issueDate: "2024-09-01",
        repairDuration: 3,
        repirePrice: 98473,
        statusRepair: "awaiting-approval",
      },
      {
        documentId: "B007",
        issueDate: "2024-09-01",
        repairDuration: 3,
        repirePrice: 98473,
        statusRepair: "under-review",
      },
      {
        documentId: "B008",
        issueDate: "2024-09-01",
        repairDuration: 3,
        repirePrice: 98473,
        statusRepair: "parts-ordered",
      },
      {
        documentId: "B009",
        issueDate: "2024-09-01",
        repairDuration: 3,
        repirePrice: 98473,
        statusRepair: "ready-for-pickup",
      },
      {
        documentId: "B010",
        issueDate: "2024-09-01",
        repairDuration: 3,
        repirePrice: 98473,
        statusRepair: "unrepairable",
      },
    ];
  

  // Handle page change by updating the current items to display
  const handlePageChange = (
    items: string[], // This is the array of paginated items
    currentPage: number,
    itemsPerPage: number
  ) => {
    console.log(
      `Current Page: ${currentPage}, Items Per Page: ${itemsPerPage}`
    );
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
    router.push(`/maintenance-request/progress/MA001`);
    // router.push(`/user-management/edit-profile/${keyId}`)
  };
  return (
    <BaseCard title="Maintenance Documents">
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
        <Grid container>
          <Grid container item xs={12}>
            {/* You can add a search form here if needed */}
          </Grid>
        </Grid>

        <Table
          aria-label="Borrowing Document Table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Document ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Issue Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Repire Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Repire Duration
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Repire Price
                </Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {MADocuments.map((doc, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="h6" fontWeight={600}>
                    {doc.documentId}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">{doc.issueDate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">
                    <StatusChip status={doc.statusRepair} />
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">{doc.repairDuration}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">
                    {formatNumber(doc.repirePrice)} ฿
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    color="secondary"
                    sx={{ ml: 2 }}
                    onClick={() => handleEdit("1")}
                  >
                    <IconEye />
                  </IconButton>
                  <ConfirmDelete
                    itemName="Sample Item"
                    onDelete={handleDeleteItem}
                  />
                  <IconButton
                    size="small"
                    color="secondary"
                    // sx={{ ml: 2 }}
                    // onClick={() => handleEdit("1")}
                  >
                    <Download />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="success"
                    // onClick={() => handleRemove("1")}
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
          onPageChange={handlePageChange} // This handles page changes
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

export default BorrowingDocumentTable;
