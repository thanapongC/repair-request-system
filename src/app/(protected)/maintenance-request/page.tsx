"use client";

import { Grid, Box } from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
import {useTranslations} from 'next-intl';

const Dashboard = () => {
  
  const t = useTranslations("HomePage");

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <h1>{t("title")}</h1>;
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
