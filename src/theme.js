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
      default: "#eceff1",
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type:"dark",
  },
});

export default lightTheme;
