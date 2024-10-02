"use client";
import { Grid, Box, Button, Typography, Paper } from "@mui/material";
import PageContainer from "@/components/container/PageContainer";

// components
import DashboardCard from "@/components/shared/DashboardCard";
// import PersonalDetailsForm from "@/components/forms/PersonalDetailForm";
// import UserAuthenForm from "@/components/forms/UserAuthenForm";
// import ProfileImageUpload from "@/components/forms/ProfileImage";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BorrowingDocument from "@/components/forms/DocumentDetails";

const BorrowingPage = () => {
  return (
    <PageContainer>
      <Breadcrumb />
      <DashboardCard>
        <Grid container spacing={3} sx={{ p: 3 }}>
          <Grid item xs={12} md={6}>
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
              <BorrowingDocument />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
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
              {/* <UserAuthenForm /> */}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Personal Details
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                To change your personal detail, edit and save from here
              </Typography>
              {/* <PersonalDetailsForm /> */}
              <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                  Add User
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

export default BorrowingPage;
