import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface EarningsCardProps {
  amount: number;
}

const EarningsCard: React.FC<EarningsCardProps> = ({ amount }) => {
  return (
    <Paper sx={{ p: 2, bgcolor: '#ff9f87' }}>
      <Typography variant="subtitle2" color="white">Earnings</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
        <Typography variant="h4" color="white">${amount.toLocaleString()}</Typography>
        <AttachMoneyIcon sx={{ color: 'white', fontSize: 40 }} />
      </Box>
      <Typography variant="caption" color="white">Monthly Revenue</Typography>
    </Paper>
  );
};

export default EarningsCard;