import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#EFEFEF",
    },
    text: {
      primary: "#707070",
      secondary: "#2A2C64",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1060,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#1C1222",
      paper: "#1C1222",
    },
    text: {
      primary: "#989898",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1060,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default lightTheme;
