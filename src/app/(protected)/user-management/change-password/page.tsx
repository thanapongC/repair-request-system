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
import Breadcrumb from "@/components/shared/breadcrumb";
import DashboardCard from "@/components/shared/BaseCard";
import ChangePasswordForm from "@/components/forms/changePasswordForm";

const ChangePasswordPage: NextPage = () => {
  return (
    <PageContainer>
      <Breadcrumb />
      <DashboardCard>
        <Grid container spacing={3} sx={{ p: 3 }}>
          <Grid item xs={12} >
            <Typography variant="h6" gutterBottom>
              Change Password
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              To change your password please confirm here
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <ChangePasswordForm />
          </Grid>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default ChangePasswordPage;
