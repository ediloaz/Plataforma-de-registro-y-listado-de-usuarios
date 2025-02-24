import { Steps } from "./Steps/Steps";
import { Box, Grid } from "@mui/material";
import { useRegister } from "./useRegister";
import { titlesRegisterSteps } from "@constants/titles";
import { RegisterTitle } from "@components/RegisterTitle/RegisterTitle";
import { RegisterTopBar } from "@components/RegisterTopBar/RegisterTopBar";
import { LeftImageRegistration } from "@components/LeftImageRegistration/LeftImageRegistration";
import { RegisterButtonActions } from "@components/RegisterButtonActions/RegisterButtonActions";
import { SwitchThemeButton } from "../../components/CustomThemeProvider/CustomThemeProvider";

export const Register = () => {
  const {
    step,
    photo,
    document,
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
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          top: 0,
          width: "50%",
          position: "sticky",
          backgroundColor: "#fff",
          display: { xs: "none", md: displayLeftImage ? "block" : "none" },
        }}
      >
        <LeftImageRegistration />
      </Box>

      <Box sx={{ flex: 1, overflowY: "auto", pb: 4 }}>
        <Grid
          container
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: boxWidth, mx: "auto" }}
        >
          <Grid item xs={12} md={step === 0 ? 12 : 12}>
            <SwitchThemeButton sx={{ right: { xs: '20px', md: step == 0 ? '50%' : '30px'} }} />
            <RegisterTopBar 
              step={step}
              onPreviousStep={onPreviousStep}
              displayMobileImage={displayMobileImage} 
            />
            <Box height="44px" m={0} />
            <RegisterTitle
              step={step}
              title={titlesRegisterSteps?.[step]}
              onPreviousStep={onPreviousStep}
            />
            <Steps
              step={step}
              photo={photo}
              document={document}
              setPhoto={setPhoto}
              register={register}
              setValue={setValue}
              onNextStep={onNextStep}
              setDocument={setDocument}
              onRestartSteps={onRestartSteps}
            />
            <RegisterButtonActions
              step={step}
              onNextStep={onNextStep}
              handleSubmit={handleSubmit}
              onRestartSteps={onRestartSteps}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}