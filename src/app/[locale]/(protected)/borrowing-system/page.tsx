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

const BorrowPage = () => {
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
      <Breadcrumb
        title="Borrowing-Returning"
        breadcrumbs={[
          { name: "Home", href: "/dashboard" },
          { name: "All Document" },
        ]}
      />
      <BaseCard title="Borrowing Filter">
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
                value={statusBorrow}
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
        <BorrowingDocumentTable />
      </Grid2>
    </PageContainer>
  );
};

export default BorrowPage;
