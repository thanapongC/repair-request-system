// "use client";

// import { Grid, Box, Stack, Pagination } from "@mui/material";
// import PageContainer from "@/components/container/PageContainer";
// //component
// import ProductServiceTable from "./table";
// import BaseCard from "@/components/shared/BaseCard";
// import Breadcrumb from "@/components/shared/BreadcrumbCustom";

// const UserManagement = () => {

//   return (
//     <PageContainer title="Dashboard" description="this is Dashboard">
//       <Breadcrumb/>
//       <Box mt={3}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} lg={12}>
//             <ProductServiceTable />
//           </Grid>
//         </Grid>
//       </Box>
//     </PageContainer>
//   );
// };

// export default UserManagement;

"use client";

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid2,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
import { useTranslations } from "next-intl";
import Breadcrumb from "@/components/shared/BreadcrumbCustom";
import BorrowingDocumentTable from "./table";
import SearchForm from "@/components/shared/SearchForm";
import { useState } from "react";
import BaseCard from "@/components/shared/BaseCard";

const UserManagementPage = () => {
  const t = useTranslations("HomePage");

  const [statusBorrow, setStatusBorrow] = useState("all-status");
  const [issueDate, setIssueDate] = useState("");
  const [repairLocation, setRepairLocation] = useState<string>("");
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairLocation(event.target.value);
  };

  const [value, setValue] = useState<number[]>([0, 999999999]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    // onChange(newValue as number[]);
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Breadcrumb />
      <BaseCard title="Users Filter">
        <Grid2
          direction="row"
          container
          spacing={3}
          sx={{ background: "#fff" }}
        >
          <Grid2 size={3}>
            <TextField label="User ID (optional)" type="text" fullWidth />
          </Grid2>
          <Grid2 size={3}>
            <TextField label="Company (optional)" type="text" fullWidth />
          </Grid2>

          <Grid2 size={3}>
            <TextField label="Position (optional)" type="text" fullWidth />
          </Grid2>
          <Grid2 size={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusBorrow}
                label="Status"
              >
                <MenuItem value={"all-status"}>All Status</MenuItem>
                <MenuItem value={"borrowed"}>Active</MenuItem>
                <MenuItem value={"returned"}>InActive</MenuItem>
                <MenuItem value={"damaged"}>Waiting</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusBorrow}
                label="Status"
              >
                <MenuItem value={"all-status"}>All Role</MenuItem>
                <MenuItem value={"borrowed"}>Admin</MenuItem>
                <MenuItem value={"returned"}>Supervisor</MenuItem>
                <MenuItem value={"damaged"}>Quality Control</MenuItem>
                <MenuItem value={"in-progress"}>Technician</MenuItem>
                <MenuItem value={"in-progress"}>Officer/Manager</MenuItem>
                <MenuItem value={"in-progress"}>Employee</MenuItem>
                <MenuItem value={"returned-partially"}>Maintenance/ Repair Technician</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={3}>
            <Button
              variant="contained"
              color="success"
              sx={{ width: "59%", height: "100%" }}
            >
              Search
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{ ml: 1, width: "37%", height: "100%" }}
            >
              Clear All
            </Button>
          </Grid2>
        </Grid2>
      </BaseCard>
      <Grid2 sx={{ mt: 2 }}>
        <BorrowingDocumentTable />
      </Grid2>
    </PageContainer>
  );
};

export default UserManagementPage;
