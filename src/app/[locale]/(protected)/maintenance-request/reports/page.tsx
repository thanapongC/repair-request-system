"use client";

import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
import { useTranslations } from "next-intl";
import Breadcrumb from "@/components/shared/BreadcrumbCustom";
import BaseCard from "@/components/shared/BaseCard";
import { useState } from "react";

const MAReportPage = () => {
  const t = useTranslations("HomePage");

  const [issueDate, setIssueDate] = useState("");
  const [repairLocation, setRepairLocation] = useState<string>("");
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairLocation(event.target.value);
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Breadcrumb
        title="Maintenance Reports"
        breadcrumbs={[
          { name: "Home", href: "/dashboard" },
          { name: "Maintenance Requests", href: "/maintenance-request" },
          { name: "Maintenance Reports" },
        ]}
      />

      <BaseCard title="Maintenance Reports">
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField
                label="Site Name (optional)"
                type="text"
                // value={returnDate}
                // onChange={(e) => setReturnDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Equipment Name (optional)"
                type="text"
                // value={returnDate}
                // onChange={(e) => setReturnDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <TextField
                label="Supervisor Name (optional)"
                type="text"
                // value={returnDate}
                // onChange={(e) => setReturnDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Person in Charge (optional)"
                type="text"
                // value={returnDate}
                // onChange={(e) => setReturnDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid container item xs={12} sx={{ mt: 1 }}>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  Repair Location (optional)
                </Typography>

                <RadioGroup
                  value={repairLocation}
                  onChange={handleLocationChange}
                  sx={{ marginBottom: 2 }}
                >
                  <FormControlLabel
                    value="on-site"
                    control={<Radio />}
                    label="On-Site Repair"
                  />
                  <FormControlLabel
                    value="off-site"
                    control={<Radio />}
                    label="Off-Site Repair"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  Repair By (optional)
                </Typography>

                <RadioGroup
                  value={repairLocation}
                  onChange={handleLocationChange}
                  sx={{ marginBottom: 2 }}
                >
                  <FormControlLabel
                    value="ํyourself"
                    control={<Radio />}
                    label="By Yourself"
                  />
                  <FormControlLabel
                    value="company"
                    control={<Radio />}
                    label="By Company"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container item xs={12} sx={{ mt: 1 }}>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  Repair Status (optional)
                </Typography>

                <RadioGroup
                  value={repairLocation}
                  onChange={handleLocationChange}
                  sx={{ marginBottom: 2 }}
                >
                  <FormControlLabel
                    value="on-site"
                    control={<Radio />}
                    label="Unrepairable"
                  />
                  <FormControlLabel
                    value="off-site"
                    control={<Radio />}
                    label="Complete"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <TextField
                label="Start Date"
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="End Date"
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" color="success" sx={{ mr: 1 }}>
                Export (.csv)
              </Button>
              <Button variant="contained" color="warning" sx={{ mr: 1 }}>
                Clear All
              </Button>
            </Grid>
          </Grid>
        </Box>
      </BaseCard>
    </PageContainer>
  );
};

export default MAReportPage;
