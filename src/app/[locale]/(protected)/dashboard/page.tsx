"use client";
import { Grid, Box, Grid2 } from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
import EarningsCard from "@/components/shared/EarningsCard_old";
import SalesOverview from "@/components/shared/RentalIncomeOverview";
import PendingDocuments from "@/components/shared/PendingDocuments";
import RepairOverview from "@/components/shared/RepairOverview";
import HelloCard from "@/components/shared/HelloCart";
import EquipmentWaitingRepair from "@/components/shared/EquipmentWaitingRepair";
import EquipmentNearDueforReturn from "@/components/shared/EquipmentNearDueforReturn";
// components

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid2 container spacing={3}>
          <Grid2 container size={5} spacing={2}>
            <Grid2 size={12}>
              <HelloCard name="Super Admin"/>
            </Grid2>
            <Grid2 container size={12}>
              <Grid2 size={6}>
                <EarningsCard amount={283940} label="Monthly revenue"/>
              </Grid2>
              <Grid2 size={6}>
                <EquipmentWaitingRepair count={12}/>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={7}>
            <SalesOverview />
          </Grid2>
          <Grid2 size={4}>
            <RepairOverview />
          </Grid2>
          <Grid2 size={8}>
            <PendingDocuments />
          </Grid2>
          <Grid2 size={12}>
          <EquipmentNearDueforReturn />
        </Grid2>
        </Grid2>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
