"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EquipmentRepairForm from "@/components/forms/EquipmentRepairForm";
import PageContainer from "@/components/container/PageContainer";
import DashboardCard from "@/components/shared/BaseCard";
import Breadcrumb from "@/components/shared/BreadcrumbCustom";
import { Grid, StepContent } from "@mui/material";
import RepairForm from "@/components/forms/AddPartsForm";
import PendingApproval from "@/components/shared/PendingApproval";

const steps = [
  "Add parts and assess cost",
  "Awaiting supervisor approval",
  "Awaiting parts withdrawal",
  "Repair started",
  "Repair in progress",
  "Repair completed",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function _renderStepContent(step: number) {
    switch (step) {
      case 0:
        return <RepairForm />;
      case 1:
        return <PendingApproval />;
      case 2:
        return <RepairForm />;
      case 3:
        return <RepairForm />;
      case 4:
        return <RepairForm />;
      case 5:
        return <RepairForm />;
      default:
        return <div>Not Found</div>;
    }
  }

  function _renderStepDescription(step: number) {
    switch (step) {
      case 0:
        return "The document status will change to 'Awaiting approval' after you add parts and specify the repair duration.";
      case 1:
        return "The system has sent an email to the maintenance supervisor. Please wait for approval from the maintenance supervisor.";
      case 2:
        return "3";
      case 3:
        return "3";
      case 4:
        return "3";
      case 5:
        return "3";
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Breadcrumb />
      <Box mt={5} p={3} border="1px solid #ccc" borderRadius="8px">
        Read Document (MA001) --- (*You Can Read Document Details Here)
      </Box>
      <Grid spacing={2} mt={2}>
        <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={() => handleBack()}>
          Back Step (for test only)
        </Button>
        <Button variant="contained" color="secondary" sx={{ mr: 1 }} onClick={() => handleNext()}>
          Next Part (for test only)
        </Button>
      </Grid>
      <Stepper activeStep={activeStep} sx={{ mt: 5 }} orientation="vertical">
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          labelProps.optional = (
            <Typography variant="caption">
              {_renderStepDescription(index)}
            </Typography>
          );
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
              <StepContent>
                <React.Fragment>
                  <Box sx={{ pt: 1 }}>
                    <PageContainer>
                      <DashboardCard>{_renderStepContent(index)}</DashboardCard>
                    </PageContainer>
                  </Box>
                </React.Fragment>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
