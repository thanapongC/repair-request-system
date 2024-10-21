"use client";

import {
  Grid,
  Box,
  Grid2,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
import { useTranslations } from "next-intl";
import Breadcrumb from "@/components/shared/BreadcrumbCustom";
import MaintenanceTable from "./table";
import BaseCard from "@/components/shared/BaseCard";
import { useState } from "react";

const BorrowPage = () => {
  const t = useTranslations("HomePage");
  const [statusMA, setStatusMA] = useState("all-status");

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Breadcrumb
        title="Maintenance Requests"
        breadcrumbs={[
          { name: "Home", href: "/dashboard" },
          { name: "All Maintenance Requests" },
        ]}
      />
      <BaseCard title="Maintenance Filter">
        <Grid2
          direction="row"
          container
          spacing={3}
          sx={{ background: "#fff" }}
        >
          <Grid2 size={3}>
            <TextField label="Document ID (optional)" type="text" fullWidth />
          </Grid2>
          <Grid2 size={3}>
            <TextField label="Site Name (optional)" type="text" fullWidth />
          </Grid2>

          <Grid2 size={3}>
            <TextField
              label="Equipment Name (optional)"
              type="text"
              fullWidth
            />
          </Grid2>
          <Grid2 size={3}>
            <TextField label="Borrower Name (optional)" type="text" fullWidth />
          </Grid2>
          <Grid2 size={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusMA}
                label="Status"
                // onChange={handleChange}
              >
                <MenuItem value={"all-status"}>All Status</MenuItem>
                <MenuItem value={"borrowed"}>borrowed</MenuItem>
                <MenuItem value={"returned"}>returned</MenuItem>
                <MenuItem value={"damaged"}>damaged</MenuItem>
                <MenuItem value={"in-progress"}>in-progress</MenuItem>
                <MenuItem value={"returned-partially"}>in-progress</MenuItem>
                <MenuItem value={"overdue"}>overdue</MenuItem>
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
        <MaintenanceTable />
      </Grid2>
    </PageContainer>
  );
};

export default BorrowPage;
