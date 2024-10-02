"use client";

import { Grid, Box, Stack, Pagination } from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
//component
import ProductServiceTable from "./table";
import BaseCard from "@/components/shared/BaseCard";
import Breadcrumb from "@/components/shared/BreadcrumbCustom";

const UserManagement = () => {

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Breadcrumb/>
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <ProductServiceTable />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default UserManagement;
