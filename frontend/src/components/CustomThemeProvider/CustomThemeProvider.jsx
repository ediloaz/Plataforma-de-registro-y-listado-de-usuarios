import React, { useContext, createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import { getTheme } from "@theme/CustomTheme";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { ThemeModeSwitch } from "@components/ThemeModeSwitch/ThemeModeSwitch";

const themeModeContext = createContext();
const toggleThemeContext = createContext();

export const useThemeModeContext = () => {
  return useContext(themeModeContext);
};

export const useToggleThemeContext = () => {
  return useContext(toggleThemeContext);
};

export const CustomThemeProvider = (props) => {  
  const [themeMode, setThemeMode] = useLocalStorage('theme', useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light');

  const toggleThemeMode = () => {
    setThemeMode(themeMode == "dark" ? "light" : "dark");
  };
  return (
    <themeModeContext.Provider value={themeMode}>
      <toggleThemeContext.Provider value={toggleThemeMode}>
        <ThemeProvider theme={getTheme(themeMode)}>
          <CssBaseline />
          { props?.children ?? <></> }
        </ThemeProvider>
      </toggleThemeContext.Provider>
    </themeModeContext.Provider>
  );
};

export const SwitchThemeButton = ({ sx }) => {
  const toggleTheme = useToggleThemeContext();
  const themeMode = useThemeModeContext();
  return (
    <Box onClick={toggleTheme} sx={{ zIndex: (theme) => theme.zIndex.drawer + 2, position: 'fixed', top: '0px', right: '20px', ...sx}}>
      <ThemeModeSwitch checked={themeMode == "dark"} title="Cambiar modo" />
    </Box>
  )
}