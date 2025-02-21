import { ArrowBackRounded } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { Resources } from "@theme/Resources";

export const RegisterTitle = ({ title, step, onPreviousStep }) => {
  const { logo } = Resources();
  
  const displayBackButton = step !== 0;

  return (
    <Grid container width="100%" pl={{ xs: "0", md: "20px" }}>
      <Grid item xs={12} pt="42px" pb="32px" display="flex" justifyContent={{ xs: "center", md: "start" }} alignItems="center">
        {displayBackButton && (
          <IconButton onClick={onPreviousStep} sx={{ display: { xs: 'block', md: 'none' }, position: "absolute", left: "10px"}}>
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
