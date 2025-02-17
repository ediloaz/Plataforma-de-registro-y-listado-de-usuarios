import { createTheme } from "@mui/material/styles";
import { esES as localeCoreES } from '@mui/material/locale';
import { esES as localeDataGridES } from "@mui/x-data-grid-premium";

export const BLACK_COLOR = "#000000";
export const WHITE_COLOR = "#FFFFFF";

export const getTheme = (mode) => {
  const theme = createTheme(
    {
      palette: {
        mode: mode,
        common: {
          black: BLACK_COLOR,
          white: WHITE_COLOR,
        },
        primary: {
          main: "#cf6f0e",
          light: "#f19539",
          dark: "#9f560b",
        },
        secondary: {
          main: "dark" ? "#bebdbd" : "#5C5B5B",
          light: "dark" ? "#f8f8f8" : "#363535",
          dark: "dark" ? "#838282" : "#828181",
        },
        red: {
          100: "#FFEBEE",
          200: "#FFCDD2",
          300: "#EF9A9A",
          400: "#E57373",
          500: "#D70B14",
          600: "#EF5350",
          700: "#E53935",
          800: "#D32F2F",
          900: "#B71C1C"
        },
        orange: {
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#D7712E",
          600: "#FB8C00",
          700: "#F57C00",
          800: "#EF6C00",
          900: "#E65100"
        },
        blue: {
          100: "#E3F2FD",
          200: "#BBDEFB",
          300: "#90CAF9",
          400: "#64B5F6",
          500: "#377CAC",
          600: "#2196F3",
          700: "#1976D2",
          800: "#1565C0",
          900: "#0D47A1"
        },
        yellow: {
          100: "#FFF9C4",
          200: "#FFF59D",
          300: "#FFF176",
          400: "#FFEE58",
          500: "#F7CD4F",
          600: "#FFEB3B",
          700: "#FDD835",
          800: "#FBC02D",
          900: "#F9A825"
        },
        green: {
          100: "#E8F5E9",
          200: "#C8E6C9",
          300: "#A5D6A7",
          400: "#81C784",
          500: "#3A864D",
          600: "#66BB6A",
          700: "#4CAF50",
          800: "#43A047",
          900: "#388E3C"
        },
        purple: {
          100: "#EDE7F6",
          200: "#D1C4E9",
          300: "#B39DDB",
          400: "#9575CD",
          500: "#7E57C2",
          600: "#673AB7",
          700: "#5E35B1",
          800: "#512DA8",
          900: "#4527A0"
        },
        gray: {
          main: mode == "dark" ? 'rgb(255, 255, 255, 0.12)' : "rgba(0, 0, 0, 0.12)",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#808080",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121"
        },
        highlight: {
          light: mode == "dark" ? 'rgb(255, 255, 255, 0.12)' : "rgb(0, 0, 0, 0.12)",
          main: mode == "dark" ? "#000" : "#2C2C2C"
        }
      },
      typography: {
        h1: {
          fontSize: "2rem !important",
        },
        h2: {
          fontSize: "1.75rem !important"
        },
        h3: {
          fontSize: "1.5rem !important"
        },
        h4: {
          fontSize: "1.25rem !important"
        },
        h5: {
          fontSize: "1rem !important"
        },
        h6: {
          fontSize: "0.75rem !important"
        },
      },
      components: {
        MuiDialog: {
          styleOverrides: {
            paper: {
              backgroundImage: 'none'
            },
          },
        },
        MuiDivider: {
          styleOverrides: {
            textAlignLeft: {
              '&::before': { width: '1em' },
              color: mode == "dark" ? 'rgb(255, 255, 255, 0.85)' : "rgb(0, 0, 0, 0.85)",
            }
          },
        },

        MuiTextField: {
          styleOverrides: {
            root: {
              '& * .Mui-disabled': {
                textFillColor: mode == "dark" ? 'rgb(255, 255, 255, 0.85) !important' : "rgb(0, 0, 0, 0.35) !important"
              }
            }
          },
        },
        MuiDataGrid: {
          styleOverrides: {
            root: {
              '& .dataGrid-rtl': {
                direction: 'rtl',
              },
            },
          },
        },

      },
    },
    localeCoreES,
    localeDataGridES,
  );

  return theme;
};
