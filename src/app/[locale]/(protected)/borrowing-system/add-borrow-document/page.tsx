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

const BorrowingPage = () => {
  return (
    <PageContainer>
      <Breadcrumb />
      <DashboardCard>
        <Grid2 container spacing={3} sx={{ p: 3 }}>
          <Grid2 size={6}>
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
            <BorrowingDocument />
          </Grid2>
          <Grid2 size={6}>
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
            <BorrowerInformation />
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="h6" gutterBottom>
              Equipment List
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Insert Your Borrower Equipment List
            </Typography>
            <BorrowedEquipmentList />
            <EquipmentTable />
            <SummaryPrice />
            <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                Add Document
              </Button>
              <Button variant="contained" color="secondary" sx={{ mr: 1 }}>
                Add & Download Document
              </Button>
              <Button variant="outlined">Cancel</Button>
            </Box>
          </Grid2>
        </Grid2>

        {/* Add other TabPanels for Notifications, Bills, and Security if needed */}
      </DashboardCard>
    </PageContainer>
  );
};

export default BorrowingPage;
