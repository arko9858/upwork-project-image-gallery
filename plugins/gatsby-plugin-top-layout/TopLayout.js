import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme, { darkTheme } from "../../src/theme";
import Layout from "../../src/components/Layout/Layout";
import { Switch } from "@material-ui/core";
import { Container } from "@material-ui/core";

export default function TopLayout(props) {
  const [darkThemeOn, setDarkThemeOn] = useState(false);

  useEffect(() => {
    console.log("darkThemeOn");
    console.log(darkThemeOn);
  }, [darkThemeOn]);

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
      <ThemeProvider theme={darkThemeOn ? darkTheme : theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container maxWidth="lg">
          <div style={{ display: "flex", justifyContent:'flex-end',paddingTop:'16px'}}>
            <Switch
              style={{ float: "right" }}
              checked={darkThemeOn}
              onChange={(e) => setDarkThemeOn(e.target.checked)}
            />
          </div>
          <Layout>{props.children}</Layout>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};