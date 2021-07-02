import React, { useState } from "react";
import { Grid, Typography, Button, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import Link from "../../Link/Link";

const textColor = "#777";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: theme.spacing(1),
    color: theme.palette.type==='dark'?"#bbb":"#555"
  },
  titleBigText: {
    marginRight: theme.spacing(1),
    fontWeight: 700,
  },
  titleSmallText: {
    fontWeight: 700,
  },
  paragraph: {
    maxWidth: "75%",
    color:textColor
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  connectButton: {
    backgroundColor: purple["300"],
    color: theme.palette.getContrastText(purple["300"]),
    padding: "4px 16px",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: purple["500"],
    },
  },
  redeemButton: {
    display: "flex",
    alignItems: "center",
  },
  redeemTicketsText: {
    color: textColor,
  },
  redeemTextIcon: {
    borderRadius: "50%",
    backgroundColor: "#cab577",
    color: "#fff",
    height: "48px",
    width: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "8px",
  },
  navLinks: {
    color: "#ccc",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "16px",
  },
  link: {
    color: textColor,
    margin: "0 8px",
  },
}));

const Header = () => {
  const classes = useStyles();

  const [redeemTicketsIconText, setRedeemTicketsIconText] = useState("?");
  const [connectWalletButtonText, setConnectWalletButtonText] = useState(
    "Connect Your Wallet"
  );

  const handleRedeemButtonClick = () => {
    console.log("redeem button clicked");
  };

  const handleConnectWalletButtonClick = () => {
    setConnectWalletButtonText("ACCOUNT_ID: 2U8SD89");
    setRedeemTicketsIconText("3");
  };

  return (
    <header className={classes.root}>
      <Grid container>
        <Grid item xs={7}>
          <div className={classes.titleContainer}>
            <Typography className={classes.titleBigText} variant="h4">
              AZUL COLLECTION
            </Typography>
            <Typography className={classes.titleSmallText} variant="h6">
              BY SECRET UNDERGROUND
            </Typography>
          </div>
          <Typography className={classes.paragraph} paragraph>
            Stake your SCRT with Secret Underground and participate in the NFT's
            digital art raffle twice a month.
          </Typography>
        </Grid>

        <Grid item xs={5}>
          <div className={classes.buttonContainer}>
            <ButtonBase
              onClick={handleRedeemButtonClick}
              className={classes.redeemButton}
            >
              <div className={classes.redeemTextIcon}>
                <Typography variant="h4">{redeemTicketsIconText}</Typography>
              </div>
              <Typography
                className={classes.redeemTicketsText}
                variant="button"
              >
                Redeem Tickets
              </Typography>
            </ButtonBase>
            <Button
              onClick={handleConnectWalletButtonClick}
              size="small"
              className={classes.connectButton}
            >
              {connectWalletButtonText}
            </Button>
          </div>
          <div className={classes.navLinks}>
            <Link className={classes.link} to="/">
              HOW TO JOIN
            </Link>
            <Link className={classes.link} to="/">
              ABOUT
            </Link>
            <Link className={classes.link} to="/">
              SOCIAL
            </Link>
          </div>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
