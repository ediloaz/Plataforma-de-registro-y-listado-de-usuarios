import { AppBar, Box, Collapse, Divider, Grid, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { ArrowBackRounded, DarkMode, LightMode, LogoutRounded, Menu } from "@mui/icons-material";
import { useThemeModeContext, useToggleThemeContext } from "@components/CustomThemeProvider/CustomThemeProvider";
import { Link } from "react-router-dom";
import { usePageStore } from "@stores/usePageStore";
import { Resources } from "@theme/Resources";

export const RegisterTopBar = ({ step, onPreviousStep, displayMobileImage }) => {
  const { logo, backgroundTopBar, loginBackground } = Resources();
  
  const displayBackButton = step !== 0;
  const theme = useTheme();

  return (
    <AppBar position={displayMobileImage ? "relative" : "fixed"} enableColorOnDark
      sx={{
        display: { xs: "block", md: step == 0 ? 'none' : 'block'},
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
      <Toolbar sx={{ minHeight: '34px !important', maxHeight: '610px', px: '0px !important' }}>
        <Grid container display="flex" alignItems="center" justifyContent="space-between">
          {displayBackButton && (
            <IconButton onClick={onPreviousStep} sx={{ display: { xs: 'none', md: 'block' }, position: "absolute", left: "10px" }}>
              <ArrowBackRounded fontSize="small" sx={{ color: theme.palette.common.white }} />
            </IconButton>
          )}
          <Collapse in={displayMobileImage} sx={{ width: '100%' }}>
            <Grid item xs={12} md={0} p="50px" display="flex" justifyContent="center" alignItems="center">
              <img src={loginBackground} alt="loginBackground" style={{ width: "100%", maxWidth: '330px', maxHeight: '438px' }} />
            </Grid>
          </Collapse>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
