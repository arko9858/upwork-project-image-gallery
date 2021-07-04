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
    type: "dark",
  },
});

export default lightTheme;
