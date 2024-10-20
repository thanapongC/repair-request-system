// "use client";

// import React, { useState } from "react";
// import {
//   Typography,
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Chip,
//   TableContainer,
//   IconButton,
//   Button,
//   Grid,
//   Alert,
//   Avatar,
//   Pagination,
// } from "@mui/material";
// import BaseCard from "@/components/shared/BaseCard";
// import {
//   CloudDownload,
//   DriveFileRenameOutline,
//   Email,
//   Print,
//   RemoveCircle,
// } from "@mui/icons-material";
// import Link from "next/link";
// import { useDatabaseContext, UserManagement } from "@/contexts/dbContext";
// import { formatNumber, formatUtcDate, makeDateMonth } from "@/utils/utils";
// import StatusChip from "@/components/shared/StatusChipCustom";
// import { useRouter } from "next/navigation";
// import ConfirmDelete from "@/components/shared/ConfirmDialogCustom";
// import SearchForm from "@/components/shared/SearchForm";
// import StatusAlert from "@/components/shared/StatusAlert";
// import PaginationComponent from "@/components/shared/Pagination";

// interface UserTableProps {
//   data?: UserManagement[];
// }

// const UserTable: React.FC<UserTableProps> = () => {
//   const { userState } = useDatabaseContext();

//   const router = useRouter();

//   const totalItems = 100; // Define the total number of items
//   const [currentItems, setCurrentItems] = useState<string[]>([]);

//   // Handle page change by updating the current items to display
//   const handlePageChange = (
//     items: string[],    // This is the array of paginated items
//     currentPage: number,
//     itemsPerPage: number
//   ) => {
//     console.log(`Current Page: ${currentPage}, Items Per Page: ${itemsPerPage}`);
//     setCurrentItems(items); // Update the displayed items
//   };

//   const [alertStatus, setAlertStatus] = useState<{
//     status: "success" | "error" | "info" | "warning";
//     message: string;
//     show: boolean;
//   }>({
//     status: "error",
//     message: "create insert update delete success",
//     show: true,
//   });

//   const handleDeleteItem = () => {
//     console.log("Item deleted");
//     // Your delete logic goes here
//   };

//   const handleRemove = (keyId: string) => {
//     return <ConfirmDelete itemName="Sample Item" onDelete={handleDeleteItem} />;
//     // removeQuotation(keyId)
//   };

//   const handleEdit = (keyId: string) => {
//     router.push(`/user-management/edit-profile/user-1`);
//     // router.push(`/user-management/edit-profile/${keyId}`)
//   };

//   return (
//     <BaseCard title={""}>
//       <TableContainer
//         sx={{
//           width: {
//             xs: "274px",
//             sm: "100%",
//           },
//         }}
//       >

//         <Table
//           aria-label="table"
//           sx={{
//             whiteSpace: "nowrap",
//             mt: 2,
//           }}
//         >
//           <TableHead>
//             <TableRow>
//               <TableCell></TableCell>
//               <TableCell>
//                 <Typography color="textSecondary" variant="h6">
//                   Employee Name
//                 </Typography>
//               </TableCell>
//               <TableCell>
//                 <Typography color="textSecondary" variant="h6">
//                   Role
//                 </Typography>
//               </TableCell>
//               <TableCell>
//                 <Typography color="textSecondary" variant="h6">
//                   Status
//                 </Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography color="textSecondary" variant="h6">
//                   Email
//                 </Typography>
//               </TableCell>
//               <TableCell align="center">
//                 {/* <Typography color="textSecondary" variant="h6">
//                   Edit/Remove
//                 </Typography> */}
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {userState.map((data, index) => (
//               <TableRow key={index}>
//                 <TableCell>
//                   <Avatar />
//                 </TableCell>
//                 <TableCell>
//                   <Box display="flex" alignItems="center">
//                     <Box>
//                       <Typography variant="h6" fontWeight={600}>
//                         {data.name} {data.surname}
//                       </Typography>
//                       {/* <Typography color="textSecondary" fontSize="13px">
//                         No.{" "}
//                         {data.headForm
//                           ? data.headForm?.quotationNumber
//                           : "1xx-11x-xxx"}
//                       </Typography> */}
//                     </Box>
//                   </Box>
//                 </TableCell>
//                 <TableCell>
//                   <Typography color="textSecondary" variant="h6">
//                     {data.roleId}
//                   </Typography>
//                 </TableCell>
//                 <TableCell>
//                   <StatusChip status={data.status} />
//                 </TableCell>
//                 <TableCell align="center">{data.email}</TableCell>
//                 <TableCell align="center">
//                   <IconButton
//                     size="small"
//                     color="secondary"
//                     sx={{ ml: 2 }}
//                     onClick={() => handleEdit(data.keyId)}
//                   >
//                     <DriveFileRenameOutline />
//                   </IconButton>
//                   <ConfirmDelete
//                     itemName="Sample Item"
//                     onDelete={handleDeleteItem}
//                   />
//                   <IconButton
//                     size="small"
//                     color="success"
//                     // onClick={() => handleRemove(data.keyId)}
//                   >
//                     <Email />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <PaginationComponent
//            totalItems={totalItems}
//            itemsPerPageOptions={[5, 10, 20]} // Optional, defaults to [5, 10, 20]
//            onPageChange={handlePageChange}   // This handles page changes
//         />
//         <StatusAlert
//           status={alertStatus.status}
//           message={alertStatus.message}
//           show={alertStatus.show}
//           onClose={() => setAlertStatus((prev) => ({ ...prev, show: false }))}
//         />
//       </TableContainer>
//     </BaseCard>
//   );
// };

// export default UserTable;

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

interface MaintenenceDocument {
  documentId: string;
  issueDate: string;
  repairDuration: string;
  repirePrice: string;
  statusRepair: string;
}

const UserTable: React.FC = () => {
  const router = useRouter();
  const [rows, setRows] = useState<MaintenenceDocument[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });

  const columns: GridColDef[] = [
    { field: "userId", headerName: "User ID", width: 150 },
    { field: "employeeName", headerName: "Employee Name", width: 150 },
    { field: "role", headerName: "Role", width: 150 },
    {
      field: "company",
      headerName: "Company",
      width: 150,
    },
    {
      field: "position",
      headerName: "Position",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => <StatusChip status={params.value} />,
    },
    {
      field: "actions",
      headerName: "",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            size="small"
            color="secondary"
            onClick={() => handleEdit(params.row.id)}
          >
            <EditCalendar />
          </IconButton>

          <ConfirmDelete itemName="Sample Item" onDelete={handleDeleteItem} />
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
        `/api/users?page=${paginationModel.page + 1}&pageSize=${
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

  const handleDeleteItem = () => {
    console.log("Item deleted");
    // Your delete logic goes here
  };

  const handleRemove = (keyId: string) => {
    return <ConfirmDelete itemName="Sample Item" onDelete={handleDeleteItem} />;
    // removeQuotation(keyId)
  };

  const handleEdit = (keyId: string) => {
    router.push(`/maintenance-request/edit-maintenance-request/MA001`);
    // router.push(`/user-management/edit-profile/${keyId}`)
  };

  const handleUpdate = (keyId: string) => {
    router.push(`/maintenance-request/progress/MA001`);
    // router.push(`/user-management/edit-profile/${keyId}`)
  };

  // const handleRemove = (id: string) => {
  //   return (
  //     <ConfirmDelete
  //       itemName="Sample Item"
  //       onDelete={() => handleDeleteItem(id)}
  //     />
  //   );
  // };

  return (
    <BaseCard title="Users Table">
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

export default UserTable;
