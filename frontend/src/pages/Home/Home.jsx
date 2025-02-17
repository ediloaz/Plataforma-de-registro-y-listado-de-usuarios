import { Grid, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ flexGrow: 1, height: '100vh', width: '100vw', background: (theme) => theme.palette.primary.main, color: '#fff', }}
    >
      <Typography variant="h1" sx={{fontWeight: '400', fontSize: '2.5rem !important'}}>
        Inicio
      </Typography>
    </Grid>
  );
};
