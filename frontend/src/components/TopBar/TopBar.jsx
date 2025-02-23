import { Resources } from "@theme/Resources";
import { Link, useNavigate } from 'react-router-dom';
import { LogoutRounded } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, useTheme } from "@mui/material";
import { SwitchThemeButton } from "../CustomThemeProvider/CustomThemeProvider";

export const TopBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { logoWhite, backgroundTopBar } = Resources();
  
  const goToRegister = (page) => {
    navigate("/Registrar");
  }

  return (
    <AppBar position="fixed" enableColorOnDark 
      sx={{
        width: '100%',
        height: '83px',
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
      <Toolbar sx={{ height: '83px', px: '68px !important' }}>
        <SwitchThemeButton sx={{ top: '24px', right: { xs: '110px', md: '130px'} }} />
        <Grid container alignItems="center" justifyContent="space-between">
          <Link to="/list" style={{ display: 'grid', alignItems: 'center' }} ><img src={logoWhite} width={106} alt="logoWhite" /></Link>
          <IconButton title="Salir" onClick={goToRegister}>
            <LogoutRounded sx={{ color: theme.palette.common.white }} />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
