import React from "react";
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
} from "@mui/material";
import BaseCard from "@/components/shared/BaseCard";
import {
  CloudDownload,
  DriveFileRenameOutline,
  Email,
  Print,
  RemoveCircle,
} from "@mui/icons-material";
import Link from "next/link";
import { useDatabaseContext, UserManagement } from "@/contexts/dbContext";
import { formatNumber, formatUtcDate, makeDateMonth } from "@/utils/utils";
import StatusChip from "@/components/shared/statusChip";
import { useRouter } from "next/navigation";
import ConfirmDelete from "@/components/shared/confirmDialog";

interface ProductTableProps {
  data?: UserManagement[];
}

const ProductServiceTable: React.FC<ProductTableProps> = () => {
  const { userState } = useDatabaseContext();

  const router = useRouter();

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
          <Grid container item xs={6}>
            <Link href={"/user-management/add-new-user"}>
              <Button
                variant="contained"
                color="warning"
                sx={{ marginBottom: "5px" }}
              >
                Add User
              </Button>
            </Link>
          </Grid>
          <Grid container item xs={6} justifyContent="flex-end"></Grid>
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
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Id
                </Typography>
              </TableCell>
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
                  <Typography fontSize="15px" fontWeight={500}>
                    {index + 1}
                  </Typography>
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
                  <StatusChip status={data.status} />
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
      </TableContainer>
    </BaseCard>
  );
};

export default ProductServiceTable;
