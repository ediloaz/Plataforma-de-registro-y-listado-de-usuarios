import { Steps } from "./Steps/Steps";
import { Box, Grid } from "@mui/material";
import { useRegister } from "./useRegister";
import { titlesRegisterSteps } from "@constants/titles";
import { RegisterTitle } from "@components/RegisterTitle/RegisterTitle";
import { RegisterTopBar } from "@components/RegisterTopBar/RegisterTopBar";
import { LeftImageRegistration } from "@components/LeftImageRegistration/LeftImageRegistration";
import { RegisterButtonActions } from "@components/RegisterButtonActions/RegisterButtonActions";

export const Register = () => {
  const {
    step,
    loading,
    setValue,
    setPhoto,
    onNextStep,
    setDocument,
    onPreviousStep,
    onRestartSteps,
    register,
    handleSubmit,
  } = useRegister();

  const displayMobileImage = step == 0;
  const displayLeftImage = step == 0;
  const boxWidth = displayMobileImage ? "100%" : "100vw";
  
  return (
    <Box width={boxWidth} height="100%" minHeight="100vh" pb="22px" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
      <Grid container component="form" onSubmit={handleSubmit} width="100%">
        <Grid item xs={0} md={6} sx={{ display: { xs: "none", md: displayLeftImage ? "block" : "none"} }}>
          <LeftImageRegistration />
        </Grid>
        <Grid item xs={12} md={step == 0 ? 6 : 12}>
          <RegisterTopBar displayMobileImage={displayMobileImage} step={step} />
          <Box height="10px" m={0} />
          <RegisterTitle title={titlesRegisterSteps?.[step]} step={step} onPreviousStep={onPreviousStep} />
          <Steps step={step} setDocument={setDocument} setPhoto={setPhoto} register={register} setValue={setValue} onNextStep={onNextStep} onRestartSteps={onRestartSteps} />
          <RegisterButtonActions step={step} onNextStep={onNextStep} onRestartSteps={onRestartSteps} /> 
        </Grid>
      </Grid>
    </Box>
  );
}