import React, { useState} from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme, { darkTheme } from "../../src/theme";
import Layout from "../../src/components/Layout/Layout";
import { Container } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Brightness3, WbSunny } from "@material-ui/icons";
import ThemeContext from "../../src/contexts/ThemeContext";

export default function TopLayout(props) {
  const [darkThemeOn, setDarkThemeOn] = useState(false);

  const handleClick = () => {
    setDarkThemeOn(!darkThemeOn);
  };

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeContext.Provider value={darkThemeOn}>
        <ThemeProvider theme={darkThemeOn ? darkTheme : theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <Container maxWidth="lg" style={{ padding: "24px 16px" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                style={darkThemeOn ? { color: "#fff" } : { color: "#969696" }}
                onClick={handleClick}
                aria-label="toggle-theme"
              >
                {darkThemeOn ? <WbSunny /> : <Brightness3 />}
              </IconButton>
            </div>

            <Layout>{props.children}</Layout>
          </Container>
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
