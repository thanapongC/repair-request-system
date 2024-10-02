"use client";
import { Grid, Box, Button, Typography, Paper } from "@mui/material";
import PageContainer from "@/components/container/PageContainer";

// components
import DashboardCard from "@/components/shared/DashboardCard";
import Breadcrumb from "@/components/shared/BreadcrumbCustom";
import BorrowingDocument from "@/components/forms/DocumentDetails";
import BorrowerInformation from "@/components/forms/BorrowerInformation";
import BorrowedEquipmentList from "@/components/forms/NewBorrowedEquipment";
import EquipmentTable from "@/components/forms/tables/EquipmentTable";
import SummaryPrice from "@/components/forms/SummaryPrice";
import MAApprove from "@/components/forms/MAApprove";
import MaintenanceDocument from "@/components/forms/MADocumentDetails";
import EquipmentRepairForm from "@/components/forms/EquipmentRepairForm";
import RepairLocationForm from "@/components/forms/RepairLocationForm";

const MaintenancePage = () => {
  return (
    <PageContainer>
      <Breadcrumb />
      <DashboardCard>
        <Grid container spacing={3} sx={{ p: 3 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                MA-Document Details
              </Typography>
              <Typography
                style={{ marginBottom: 20 }}
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                Insert Your MA-Document Details
              </Typography>
              <MaintenanceDocument />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Repair Location
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                style={{ marginBottom: 20 }}
              >
                Insert Your Repair Location
              </Typography>
              <RepairLocationForm />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Equipment List
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Insert Your Equipment List
              </Typography>
              <EquipmentRepairForm/>
              <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                  Add MA-Document
                </Button>
                <Button variant="outlined">Cancel</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Add other TabPanels for Notifications, Bills, and Security if needed */}
      </DashboardCard>
    </PageContainer>
  );
};

export default MaintenancePage;
