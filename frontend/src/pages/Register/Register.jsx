import { useState } from "react";
import { Steps } from "./Steps/Steps";
import { Box, Grid } from "@mui/material";
import { Resources } from "@theme/Resources";
import { titlesRegisterSteps } from "@constants/titles";
import { RegisterTitle } from "@components/RegisterTitle/RegisterTitle";
import { RegisterTopBar } from "@components/RegisterTopBar/RegisterTopBar";

export const Register = () => {
  const [step, setStep] = useState(0);

  const displayImage = step == 0;
  const displayLeftImage = step == 0;
  const boxWidth = displayImage ? "100%" : "100vw";

  const { backgroundTopBar, loginBackground } = Resources();
  
  return (
    <Box width={boxWidth} height="100%" minHeight="100vh" pb="22px" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
      <Grid container width="100%">
        <Grid item xs={0} md={6} sx={{ display: { xs: "none", md: displayLeftImage ? "block" : "none"
         } }}>
          <Box 
            width="100%" 
            height="100vh" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            sx={{
              position: 'relative', // <-- Agregar esta línea
              zIndex: (theme) => theme.zIndex.drawer + 1,
              background: 'linear-gradient(217.64deg, #006DFF -5.84%, #5038ED 106.73%)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${backgroundTopBar})`,
                backgroundRepeat: 'no-repeat',
                opacity: 0.1,
                zIndex: -1,
              },
            }}
          >
            <img src={loginBackground} alt="loginBackground" style={{ width: "100%", padding: '84px', maxWidth: '700px' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <RegisterTopBar displayImage={displayImage} step={step} />
          <Box height="10px" m={0} />
          <RegisterTitle title={titlesRegisterSteps?.[step]} step={step} setStep={setStep} />
          <Steps step={step} setStep={setStep} />
        </Grid>
      </Grid>
    </Box>
  );
}