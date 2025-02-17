import { Home } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Resources } from "@theme/Resources";

export const NotFound = () => {

  const { notFoundLogo } = Resources();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ flexGrow: 1, height: '100vh', width: '100vw', background: (theme) => theme.palette.primary.main, color: '#fff', }}
    >
      <Typography variant="h1" sx={{fontWeight: '400', fontSize: '2.5rem !important'}}>
       404
      </Typography>
      <img src={notFoundLogo} alt="logo" style={{maxWidth: '20em', margin: '2em', filter: 'drop-Shadow(0 4px 6px #000)' }} />
      <Typography variant="h4" sx={{mb: '2em'}}>
        La página que estás buscando no se encontró.
      </Typography>
      <Button component={Link} to="/" color="primary" variant="contained" endIcon={<Home/>}>Regresar al inicio</Button>
    </Grid>
  );
};
