"use client";

import {
  Box,
  Button,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
import { useTranslations } from "next-intl";
import Breadcrumb from "@/components/shared/BreadcrumbCustom";
import MaintenanceTable from "./table";
import SearchForm from "@/components/shared/SearchForm";
import { useState } from "react";
import BaseCard from "@/components/shared/BaseCard";

const BorrowPage = () => {
  const t = useTranslations("HomePage");

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
      <BaseCard title="Borrowing Filter">
        <Grid2
          direction="row"
          container
          spacing={3}
          sx={{ background: "#fff" }}
        >
          <Grid2 size={3}>
            <TextField
              label="Site Name (optional)"
              type="text"
              size="small"
              // value={returnDate}
              // onChange={(e) => setReturnDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid2>

          <Grid2 size={3}>
            <TextField
              label="Equipment Name (optional)"
              type="text"
              size="small"
              // value={returnDate}
              // onChange={(e) => setReturnDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={3}>
            <TextField
              label="Borrower Name (optional)"
              type="text"
              size="small"
              // value={returnDate}
              // onChange={(e) => setReturnDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={3}>
            <Button variant="contained" color="success" sx={{ mr: 1 }}>
              Search
            </Button>
            <Button variant="contained" color="warning" sx={{ mr: 1 }}>
              Clear All
            </Button>
          </Grid2>
        </Grid2>
      </BaseCard>
      <Grid2 sx={{ mt: 2}}>
        
      <MaintenanceTable />
      </Grid2>
    </PageContainer>
  );
};

export default BorrowPage;
