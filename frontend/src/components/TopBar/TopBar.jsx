import { AppBar, Box, Divider, Grid, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { DarkMode, LightMode, LogoutRounded, Menu } from "@mui/icons-material";
import { useThemeModeContext, useToggleThemeContext } from "@components/CustomThemeProvider/CustomThemeProvider";
import { Link } from "react-router-dom";
import { usePageStore } from "@stores/usePageStore";
import { Resources } from "@theme/Resources";

export const TopBar = () => {
  const theme = useTheme();
  const themeMode = useThemeModeContext();
  const toggleTheme = useToggleThemeContext();
  const title = usePageStore((store) => store.title);
  const { logoWhite, backgroundTopBar } = Resources();
  console.log('top', backgroundTopBar)
  
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
        <Grid container alignItems="center" justifyContent="space-between">
          <Link to="/list" style={{ display: 'grid', alignItems: 'center' }} ><img src={logoWhite} width={106} alt="logoWhite" /></Link>
          <IconButton title="Salir">
            <LogoutRounded sx={{ color: theme.palette.common.white }} />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
