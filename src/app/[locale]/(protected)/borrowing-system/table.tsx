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
import { Download, DriveFileRenameOutline, Edit, Email } from "@mui/icons-material";
import StatusChip from "@/components/shared/StatusChipCustom";
import { formatNumber } from "@/utils/utils";

interface BorrowingDocument {
  documentId: string;
  issueDate: string;
  returnDate: string;
  status: string;
  itemReturned: number;
  itemBorrow: number;
  totalPrice: number;
}

const BorrowingDocumentTable: React.FC = () => {
  const router = useRouter();

  const totalItems = 100; // Define the total number of items
  const [currentItems, setCurrentItems] = useState<string[]>([]);

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
    router.push(`/borrowing-system/returning/B001`);
    // router.push(`/user-management/edit-profile/${keyId}`)
  };
  // Example data for the borrowing document
  const borrowingDocuments: BorrowingDocument[] = [
    {
      documentId: "B001",
      issueDate: "2024-09-01",
      returnDate: "2024-09-15",
      status: "damaged",
      itemBorrow: 5,
      itemReturned: 0,
      totalPrice: 3247244
    },
    {
      documentId: "B002",
      issueDate: "2024-09-01",
      returnDate: "2024-09-15",
      status: "returned-partially",
      itemBorrow: 5,
      itemReturned: 2,
      totalPrice: 958832
    },
    {
      documentId: "B003",
      issueDate: "2024-09-01",
      returnDate: "2024-09-15",
      status: "in-progress",
      itemBorrow: 5,
      itemReturned: 0,
      totalPrice: 94383
    },
    {
      documentId: "B004",
      issueDate: "2024-09-01",
      returnDate: "2024-09-15",
      status: "borrowed",
      itemBorrow: 5,
      itemReturned: 0,
      totalPrice: 839302
    },
    {
      documentId: "B005",
      issueDate: "2024-09-01",
      returnDate: "2024-09-15",
      status: "returned",
      itemBorrow: 5,
      itemReturned: 5,
      totalPrice: 93938
    },
    {
      documentId: "B006",
      issueDate: "2024-09-01",
      returnDate: "2024-09-15",
      status: "overdue",
      itemBorrow: 0,
      itemReturned: 0,
      totalPrice: 345973
    },
  ];

  return (
    <BaseCard title="Borrowing Documents">
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
                  Return Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Total Price
                </Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {borrowingDocuments.map((doc, index) => (
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
                  <Typography variant="h6">{doc.returnDate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6"><StatusChip status={doc.status} /></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">{formatNumber(doc.totalPrice)} ฿</Typography>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    color="secondary"
                    sx={{ ml: 2 }}
                    onClick={() => handleEdit("1")}
                  >
                    <DriveFileRenameOutline />
                  </IconButton>
                  <ConfirmDelete
                    itemName="Sample Item"
                    onDelete={handleDeleteItem}
                  />
                  <IconButton
                    size="small"
                    color="secondary"
                    // sx={{ ml: 2 }}
                    onClick={() => handleEdit("1")}
                  >
                    <Download />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="success"
                    onClick={() => handleRemove("1")}
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
