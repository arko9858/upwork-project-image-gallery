import React, { useState } from "react";
import { Grid, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import StyledButton from "../../Buttons/StyledButton/StyledButton";
import RedeemTicketsButton from "../../Buttons/RedeemTicketsButton/RedeemTicketsButton";
import HeaderTitle from "../../HeaderTitle/HeaderTitle";
import NavLinks from "../../NavLinks/NavLinks";
import HeaderParagraph from "../../HeaderParagraph/HeaderParagraph";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:'0 16px',
    [theme.breakpoints.down("xs")]: {
      padding:"0 8px"
    },
  },

  buttonContainerDesktop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonContainerTablet: {
    textAlign: "right",
    padding: "8px",
  },

  connectButton: {
    backgroundColor: "#AA47F5",
    color: "#FFF",
    padding: "4px 16px",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: purple["500"],
    },
  },

  mobileActionButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems:'center'
  },
}));

const Header = () => {
  const classes = useStyles();

  const [redeemTicketsIconText, setRedeemTicketsIconText] = useState("?");
  const [connectWalletButtonText, setConnectWalletButtonText] = useState(
    "Connect Your Wallet"
  );

  const [delegateButtonText, setDelegateButtonText] = useState("Delegate Now");

  const handleRedeemButtonClick = () => {
    console.log("redeem button clicked");
  };

  const handleConnectWalletButtonClick = () => {
    setConnectWalletButtonText("ACCOUNT_ID: 2U8SD89");
    setRedeemTicketsIconText("3");
    setDelegateButtonText("Stake now");
  };

  return (
    <header className={classes.root}>
      {/* desktop view */}
      <Hidden mdDown>
        <Grid container>
          <Grid item xs={7}>
            <HeaderTitle />
            <HeaderParagraph />
            <StyledButton>{delegateButtonText}</StyledButton>
          </Grid>

          <Grid item xs={5}>
            <div className={classes.buttonContainerDesktop}>
              <RedeemTicketsButton
                iconText={redeemTicketsIconText}
                onClick={handleRedeemButtonClick}
              />
              <Button
                onClick={handleConnectWalletButtonClick}
                size="small"
                className={classes.connectButton}
              >
                {connectWalletButtonText}
              </Button>
            </div>
            <NavLinks />
          </Grid>
        </Grid>
      </Hidden>

      {/* tablet view */}
      <Hidden lgUp xsDown>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <HeaderTitle />
            <HeaderParagraph />
          </Grid>

          <Grid item xs={5}>
            <div className={classes.buttonContainerTablet}>
              <Button
                onClick={handleConnectWalletButtonClick}
                size="small"
                className={classes.connectButton}
              >
                {connectWalletButtonText}
              </Button>

              <NavLinks />
            </div>
          </Grid>
          <Grid item xs={7}>
            <StyledButton>{delegateButtonText}</StyledButton>
          </Grid>
          <Grid item xs={5}>
            <RedeemTicketsButton
              iconText={redeemTicketsIconText}
              onClick={handleRedeemButtonClick}
            />
          </Grid>
        </Grid>
      </Hidden>

      {/* mobile view */}
      <Hidden smUp>
        <Button
          onClick={handleConnectWalletButtonClick}
          size="small"
          className={classes.connectButton}
        >
          {connectWalletButtonText}
        </Button>
        <NavLinks />
        <HeaderTitle />
        <HeaderParagraph />
        <div className={classes.mobileActionButtonContainer}>
          <StyledButton>{delegateButtonText}</StyledButton>
          <RedeemTicketsButton
            iconText={redeemTicketsIconText}
            onClick={handleRedeemButtonClick}
          />
        </div>
      </Hidden>
    </header>
  );
};

export default Header;
