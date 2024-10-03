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
import { StepContent } from "@mui/material";
import RepairForm from "@/components/forms/AddPartsForm";

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
        return <RepairForm />;
      case 2:
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
        return "2";
      case 2:
        return "3";
      default:
        return <div>Not Found</div>;
    }
  }

  const handleSkip = () => {
    // if (!isStepOptional(activeStep)) {
    //   // You probably want to guard against something like this,
    //   // it should never occur unless someone's actively trying to break something.
    //   throw new Error("You can't skip a step that isn't optional.");
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Breadcrumb />
      <Box mt={5} p={3} border="1px solid #ccc" borderRadius="8px">
        Read Document (MA001) --- (*You Can Read Document Details Here)
      </Box>
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
                      <DashboardCard>
                        {_renderStepContent(index)}
                      </DashboardCard>
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
