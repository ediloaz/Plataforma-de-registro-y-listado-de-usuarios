import { Button, Collapse, Grid } from "@mui/material";

export const RegisterButtonActions = ({ step, onNextStep, handleSubmit, onRestartSteps }) => {
  const _onRestartSteps = () => {
    if (window.confirm("¿Estás seguro de que deseas cancelar y perder el proceso?")) {
      onRestartSteps();
    }
  }

  const isFinalStep = step === 2;

  return (
    <Grid container width="100%"  px={{ xs: '17px', md: '38px', xl: '98px' }} display="flex" flexDirection={{ xs: 'row', md: 'row-reverse' }}>
      <Grid item xs={12} md={step == 0 ? 12 : 2} xl={step == 0 ? 12 : 1}>
        <Button variant="contained" color="primary" sx={{ height: '48px', textTransform: 'none' }} fullWidth onClick={isFinalStep ? handleSubmit : onNextStep}>Continuar</Button>
      </Grid>
      <Grid item xs={12} md={2} xl={1}>
        <Collapse in={step !== 0}>
          <Button variant="text" color="primary" sx={{  height: '48px', textTransform: 'none' }} fullWidth onClick={_onRestartSteps}>
            Cancelar
          </Button>
        </Collapse>
      </Grid>
    </Grid>
  );
};
