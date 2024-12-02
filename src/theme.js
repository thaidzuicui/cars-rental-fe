import { extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#ff5252",
          paper: "#ffffff",
        },
        secondary: {
          main: "#ffffff",
          paper: "3D5278",
        },
        blue: {
          main: "#3563E9",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#1a202c",
          paper: "#293346",
        },
        secondary: {
          main: "#1a202c",
          paper: "#F6F7F9",
        },
        blue: {
          main: "#3563E9",
        },
      },
    },
  },
});

export default theme;
