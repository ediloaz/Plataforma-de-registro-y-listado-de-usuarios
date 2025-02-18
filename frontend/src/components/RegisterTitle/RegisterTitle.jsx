import { ArrowBackRounded } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { Resources } from "@theme/Resources";

export const RegisterTitle = ({ title, step, setStep }) => {
  const { logo } = Resources();
  
  const onPrevious = () => {
    if (step === 0) {
      return;
    }
    setStep(step - 1);
  }

  const displayBackButton = step !== 0;

  return (
    <Grid container width="100%">
      <Grid item xs={12} pt="42px" pb="32px" display="flex" justifyContent={{ xs: "center", md: "start" }} alignItems="center">
        {displayBackButton && (
          <IconButton onClick={onPrevious} sx={{ display: { xs: 'block', md: 'none' }, position: "absolute", left: "10px"}}>
            <ArrowBackRounded />
          </IconButton>
        )}
        <img src={logo} alt="logo" style={{ width: "130px" }} />
      </Grid>
      <Grid item xs={12} pt={0} pb="50px" display="flex" justifyContent={{ xs: "center", md: "start" }} alignItems="center">
        <Typography fontSize="24px" fontWeight="bold">
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};
