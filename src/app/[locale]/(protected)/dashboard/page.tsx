'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/components/container/PageContainer';
import GreetingCard from '@/components/shared/GreetingCard';
import EarningsCard from '@/components/shared/EarningsCard';
import MonthlyFixCard from '@/components/shared/MonthlyFixCard';
import OverviewChart from '@/components/shared/OverviewChart';
import SalesOverview from '@/components/shared/SalesOverview';
import DailyActivity from '@/components/shared/DailyActivity';
import ProductPerformance from '@/components/shared/ProductPerformance';
// components


const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <SalesOverview />
        </Grid>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={4}>
          <DailyActivity />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ProductPerformance />
        </Grid>
        {/* <Grid item xs={12} lg={12}>
          <BlogCard />
        </Grid> */}
      </Grid>
    </Box>
  </PageContainer>
  )
}

export default Dashboard;