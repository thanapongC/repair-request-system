"use client";
import { Grid, Box, Button, Typography, Paper, Grid2 } from "@mui/material";
import PageContainer from "@/components/container/PageContainer";

// components
import DashboardCard from "@/components/shared/DashboardCard";
import Breadcrumb from "@/components/shared/BreadcrumbCustom";
import BorrowingDocument from "@/components/forms/DocumentDetails";
import BorrowerInformation from "@/components/forms/BorrowerInformation";
import BorrowedEquipmentList from "@/components/forms/NewBorrowedEquipment";
import EquipmentTable from "@/components/forms/tables/EquipmentTable";
import SummaryPrice from "@/components/forms/SummaryPrice";
import BorrowReturnDetails from "@/components/forms/BorrowReturnDetails";
import EquipmentReturnTable from "@/components/forms/tables/EquipmentReturnTable";

const LendingPage = () => {
  return (
    <PageContainer>
      <Breadcrumb
        title="Returning"
        breadcrumbs={[
          { name: "Home", href: "/dashboard" },
          { name: "Borrowing-Returning", href: "/borrowing-system" },
          { name: "Returning" },
        ]}
      />
      <DashboardCard>
        <Grid2 container spacing={3} sx={{ p: 3 }}>
          <Grid2 size={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Document Details
              </Typography>
              <Typography
                style={{ marginBottom: 20 }}
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                Insert Your Document Details
              </Typography>
              <BorrowingDocument status="edit" />
            </Paper>
          </Grid2>
          <Grid2 size={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Borrower Details
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                style={{ marginBottom: 20 }}
              >
                Insert Your Borrower Details
              </Typography>
              <BorrowerInformation status="edit" />
            </Paper>
          </Grid2>
          <Grid2 size={12}>
            {/* <Paper sx={{ p: 3 }}> */}
            <EquipmentReturnTable />
            {/* <SummaryPrice /> */}
            <Grid2 sx={{ mt: 2 }}>
              <BorrowReturnDetails />
            </Grid2>

            <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                All Returned
              </Button>
              <Button variant="outlined">Cancel</Button>
            </Box>
            {/* </Paper> */}
          </Grid2>
        </Grid2>

        {/* Add other TabPanels for Notifications, Bills, and Security if needed */}
      </DashboardCard>
    </PageContainer>
  );
};

export default LendingPage;
