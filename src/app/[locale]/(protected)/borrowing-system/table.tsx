"use client";

import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { Box, Grid, Grid2, IconButton, Paper, Typography } from "@mui/material";
import BaseCard from "@/components/shared/BaseCard";
import SearchForm from "@/components/shared/SearchForm";
import ConfirmDelete from "@/components/shared/ConfirmDialogCustom";
import { useRouter } from "next/navigation";
import {
  CloudDownload,
  Download,
  DriveFileRenameOutline,
  EditCalendar,
  Email,
  ForwardToInbox,
  ManageSearch,
} from "@mui/icons-material";
import StatusChip from "@/components/shared/StatusChipCustom";
import { formatNumber } from "@/utils/utils";

interface BorrowingDocument {
  id: string;
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
  const [rows, setRows] = useState<BorrowingDocument[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });

  const columns: GridColDef[] = [
    { field: "documentId", headerName: "Document ID", width: 150 },
    { field: "borrower", headerName: "Borrower", width: 150 },
    { field: "siteName", headerName: "Sitename", width: 150 },
    { field: "itemReturn", headerName: "Items Return", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => <StatusChip status={params.value} />,
    },
    {
      field: "totalPrice",
      headerName: "Charge Price (bath)",
      width: 150,
      renderCell: (params) => formatNumber(params.value),
    },
    {
      field: "actions",
      headerName: "",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <>
          {params.row.status === "in-progress" ? (
            <IconButton
              size="small"
              color="secondary"
              onClick={() => handleEdit(params.row.id)}
            >
              <EditCalendar />
            </IconButton>
          ) : (
            <IconButton
              size="small"
              color="secondary"
              onClick={() => handleUpdate(params.row.id)}
            >
              <ManageSearch />
            </IconButton>
          )}

          <IconButton
            size="small"
            color="info"
            onClick={() => handleDeleteItem(params.row.id)}
          >
            <CloudDownload />
          </IconButton>
          <IconButton
            size="small"
            color="success"
            onClick={() => handleRemove(params.row.id)}
          >
            <ForwardToInbox />
          </IconButton>
        </>
      ),
    },
  ];

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/borrowing-documents?page=${paginationModel.page + 1}&pageSize=${
          paginationModel.pageSize
        }`
      );
      const result = await response.json();

      setRows(result.data);
      setRowCount(result.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [paginationModel]);

  const handleUpdate = (id: string) => {
    router.push(`/borrowing-system/returning/${id}`);
  };

  const handleEdit = (id: string) => {
    router.push(`/borrowing-system/edit-borrow-document/${id}`);
  };

  const handleDeleteItem = (id: string) => {
    console.log("Delete item with ID:", id);
    // Your delete logic goes here
  };

  const handleRemove = (id: string) => {
    return (
      <ConfirmDelete
        itemName="Sample Item"
        onDelete={() => handleDeleteItem(id)}
      />
    );
  };

  return (
    <BaseCard title="Borrowing Table">
      <DataGrid
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        sx={{ border: 0 }}
        rows={rows}
        columns={columns}
        paginationMode="server"
        rowCount={rowCount}
        // paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        loading={loading}
      />
    </BaseCard>
  );
};

export default BorrowingDocumentTable;
