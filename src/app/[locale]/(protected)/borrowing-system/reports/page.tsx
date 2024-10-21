"use client";

import {
  Grid2,
  Box,
  TextField,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
} from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
import { useTranslations } from "next-intl";
import Breadcrumb from "@/components/shared/BreadcrumbCustom";
import BaseCard from "@/components/shared/BaseCard";
import { useState } from "react";

const BorrowReportPage = () => {
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
      <Breadcrumb
        title="Borrowing-Returning Reports"
        breadcrumbs={[
          { name: "Home", href: "/dashboard" },
          { name: "Borrowing-Returning", href: "/borrowing-system" },
          { name: "Borrowing-Returning Reports" },
        ]}
      />
      <BaseCard title="Borrowing Reports">
        <Box mt={3}>
          <Grid2 container spacing={3}>
            <Grid2 size={4}>
              <TextField
                label="Site Name (optional)"
                type="text"
                // value={returnDate}
                // onChange={(e) => setReturnDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid2>

            <Grid2 size={4}>
              <TextField
                label="Equipment Name (optional)"
                type="text"
                // value={returnDate}
                // onChange={(e) => setReturnDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid2>
            <Grid2 size={4}></Grid2>
            <Grid2 size={4}>
              <TextField
                label="Borrower Name (optional)"
                type="text"
                // value={returnDate}
                // onChange={(e) => setReturnDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid2>

            <Grid2 container size={12} sx={{ mt: 1 }}>
              <Grid2  size={4}>
                <Typography variant="h6" gutterBottom>
                  Repair Status (optional)
                </Typography>

                <RadioGroup
                  value={repairLocation}
                  onChange={handleLocationChange}
                  sx={{ marginBottom: 2 }}
                >
                  <FormControlLabel
                    value="Returned"
                    control={<Radio />}
                    label="Returned"
                  />
                  <FormControlLabel
                    value="Borrowed"
                    control={<Radio />}
                    label="Borrowed"
                  />
                  <FormControlLabel
                    value="Damaged"
                    control={<Radio />}
                    label="Damaged"
                  />
                  <FormControlLabel
                    value="Overdue"
                    control={<Radio />}
                    label="Overdue"
                  />
                </RadioGroup>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2} sx={{ mt: 1 }}>
            <Grid2 size={4}>
              <TextField
                label="Start Date"
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
              />
            </Grid2>

            <Grid2 size={4}>
              <TextField
                label="End Date"
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
              />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2} sx={{ mt: 1 }}>
            <Grid2 size={12}>
              <Button variant="contained" color="success" sx={{ mr: 1 }}>
                Export (.csv)
              </Button>
              <Button variant="contained" color="warning" sx={{ mr: 1 }}>
                Clear All
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </BaseCard>
    </PageContainer>
  );
};

export default BorrowReportPage;
