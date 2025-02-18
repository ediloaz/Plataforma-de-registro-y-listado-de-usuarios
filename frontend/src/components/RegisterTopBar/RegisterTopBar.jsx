import { AppBar, Box, Collapse, Divider, Grid, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { DarkMode, LightMode, LogoutRounded, Menu } from "@mui/icons-material";
import { useThemeModeContext, useToggleThemeContext } from "@components/CustomThemeProvider/CustomThemeProvider";
import { Link } from "react-router-dom";
import { usePageStore } from "@stores/usePageStore";
import { Resources } from "@theme/Resources";

export const RegisterTopBar = ({ displayImage }) => {
  const theme = useTheme();
  const themeMode = useThemeModeContext();
  const toggleTheme = useToggleThemeContext();
  const title = usePageStore((store) => store.title);
  const { logo, backgroundTopBar, loginBackground } = Resources();
  
  return (
    <AppBar position={displayImage ? "relative" : "fixed"} enableColorOnDark
      sx={{
        width: '100%',
        maxHeight: '610px',
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
      <Toolbar sx={{ maxHeight: '610px', px: '0px !important' }}>
        <Grid container display="flex" alignItems="center" justifyContent="space-between">
          <Collapse in={displayImage} sx={{ width: '100%' }}>
            <Grid item xs={12} md={0} p="50px" display="flex" justifyContent="center" alignItems="center">
              <img src={loginBackground} alt="loginBackground" style={{ width: "100%", maxWidth: '330px', maxHeight: '438px' }} />
            </Grid>
          </Collapse>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
