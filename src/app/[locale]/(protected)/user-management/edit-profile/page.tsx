"use client";

import React from "react";
import { NextPage } from "next";
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
import DashboardCard from "@/components/shared/BaseCard";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProfileImageUpload from "@/components/forms/ProfileImage";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import PersonalDetailsForm from "@/components/forms/PersonalDetailForm";
import UserAuthenForm from "@/components/forms/UserAuthenForm";

const AccountSettings: NextPage = () => {
  return (
    <PageContainer>
      <Breadcrumb />
      <DashboardCard>
        <Grid container spacing={3} sx={{ p: 3 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Change Profile
              </Typography>
              <Typography
                style={{ marginBottom: 20 }}
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                Change your profile picture from here
              </Typography>
              <ProfileImageUpload />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Allowed JPG, GIF or PNG. Max size of 800K
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>

              <Typography variant="h6" gutterBottom>
                Authen Setting
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                To change your password please confirm here
              </Typography>
              <UserAuthenForm />
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
              <PersonalDetailsForm />
              <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                  Update
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

export default AccountSettings;
