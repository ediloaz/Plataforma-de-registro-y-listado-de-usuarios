import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { RegisterTopBar } from "@components/RegisterTopBar/RegisterTopBar";
import { RegisterTitle } from "@components/RegisterTitle/RegisterTitle";
import { RegisterButtonActions } from "@components/RegisterButtonActions/RegisterButtonActions";
import { BasicForm } from "../BasicForm/BasicForm";
import { LocationForm } from "../LocationForm/LocationForm";
import { PhotoForm } from "../PhotoForm/PhotoForm";

export const Steps = ({ step, setStep }) => {

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <BasicForm />;
      case 1:
        return <LocationForm />;
      case 2:
        return <PhotoForm />;
      default:
        return <BasicForm />;
    }
  }

  const onContinue = () => {
    if (step === 2) {
      return;
    }
    setStep(step + 1);
  }

  const onCancel = () => {
    setStep(0);
  }

  return (
    <Grid container width="100%">
      {getStepContent(step)}
      <RegisterButtonActions step={step} onContinue={onContinue} onCancel={onCancel} /> 
    </Grid>
  );
}