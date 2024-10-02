"use client";

import { Grid, Box } from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
import {useTranslations} from 'next-intl';
import Breadcrumb from "@/components/shared/BreadcrumbCustom";
import MaintenanceTable from "./table";

const BorrowPage = () => {
  
  const t = useTranslations("HomePage");

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Breadcrumb/>
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <MaintenanceTable />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default BorrowPage;
