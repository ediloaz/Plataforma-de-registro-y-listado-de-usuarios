import { Button, Collapse, Grid } from "@mui/material";

export const RegisterButtonActions = ({ step, onNextStep, onRestartSteps }) => {
  const _onRestartSteps = () => {
    if (window.confirm("¿Estás seguro de que deseas cancelar y perder el proceso?")) {
      onRestartSteps();
    }
  }

  return (
    <Grid container width="100%" px="17px">
      <Grid item xs={12} md={step == 0 ? 12 : 6}>
        <Button variant="contained" color="primary" sx={{ height: '48px', textTransform: 'none' }} fullWidth onClick={onNextStep}>Continuar</Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Collapse in={step !== 0}>
          <Button variant="text" color="primary" sx={{ height: '48px', textTransform: 'none' }} fullWidth onClick={_onRestartSteps}>
            Cancelar
          </Button>
        </Collapse>
      </Grid>
    </Grid>
  );
};
