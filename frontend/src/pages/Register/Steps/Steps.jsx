import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { RegisterTopBar } from "@components/RegisterTopBar/RegisterTopBar";
import { RegisterTitle } from "@components/RegisterTitle/RegisterTitle";

import { BasicForm } from "../BasicForm/BasicForm";
import { LocationForm } from "../LocationForm/LocationForm";
import { PhotoForm } from "../PhotoForm/PhotoForm";

export const Steps = ({ step, setValue, setDocument, setPhoto, register, onNextStep, onRestartSteps }) => {

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <BasicForm register={register} />;
      case 1:
        return <LocationForm register={register} setValue={setValue} setDocument={setDocument} />;
      case 2:
        return <PhotoForm register={register} setValue={setValue} setPhoto={setPhoto} />;
      default:
        return <BasicForm register={register} />;
    }
  }

  return (
    <Grid container width="100%">
      {getStepContent(step)}
    </Grid>
  );
}