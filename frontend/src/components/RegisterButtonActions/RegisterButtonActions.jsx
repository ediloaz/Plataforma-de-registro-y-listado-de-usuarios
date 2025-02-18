import { Button, Collapse, Grid } from "@mui/material";

export const RegisterButtonActions = ({ step, onContinue, onCancel }) => {
  const onConfirmCancel = () => {
    if (window.confirm("¿Estás seguro de que deseas cancelar y perder el proceso?")) {
      onCancel();
    }
  }

  return (
    <Grid container width="100%" px="17px">
      <Grid item xs={12} md={6}>
        <Button variant="contained" color="primary" sx={{ height: '48px', textTransform: 'none' }} fullWidth onClick={onContinue}>Continuar</Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Collapse in={step !== 0}>
          <Button variant="text" color="primary" sx={{ height: '48px', textTransform: 'none' }} fullWidth onClick={onConfirmCancel}>
            Cancelar
          </Button>
        </Collapse>
      </Grid>
    </Grid>
  );
};
