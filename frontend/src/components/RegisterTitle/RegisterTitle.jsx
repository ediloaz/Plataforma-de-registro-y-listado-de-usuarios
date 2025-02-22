import { ArrowBackRounded } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { Resources } from "@theme/Resources";

export const RegisterTitle = ({ title, step, onPreviousStep }) => {
  const { logo } = Resources();
  
  const displayBackButton = step !== 0;

  return (
    <Grid container width="100%" pt="10px" pl={{ xs: "0" }} display={{ xs: "block", md: "none" }} justifyContent="center" alignItems="center">
      <Grid item xs={12} pb="32px" display="flex" justifyContent="center" alignItems="center">
        {displayBackButton && (
          <IconButton onClick={onPreviousStep} sx={{ display: 'block', position: "absolute", left: "10px"}}>
            <ArrowBackRounded />
          </IconButton>
        )}
        <img src={logo} alt="logo" style={{ width: "130px" }} />
      </Grid>
    </Grid>
  );
};
