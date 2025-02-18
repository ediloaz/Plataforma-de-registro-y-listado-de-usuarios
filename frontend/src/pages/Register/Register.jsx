import { Box } from "@mui/material";
import { titlesRegisterSteps } from "@constants/titles";
import { RegisterTopBar } from "@components/RegisterTopBar/RegisterTopBar";
import { RegisterTitle } from "@components/RegisterTitle/RegisterTitle";
import { Steps } from "./Steps/Steps";
import { useState } from "react";

export const Register = () => {
  const [step, setStep] = useState(0);
  const displayImage = step == 0;
  const boxWidth = displayImage ? "100%" : "100vw";
  
  return (
    <Box width={boxWidth} height="100%" minHeight="100vh" pb="22px" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
      <RegisterTopBar displayImage={displayImage} />
      <Box height="10px" m={0} />
      <RegisterTitle title={titlesRegisterSteps?.[step]} step={step} setStep={setStep} />
      <Steps step={step} setStep={setStep} />
    </Box>
  );
}