import React from "react";
import { ButtonBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  redeemTextIcon: {
    borderRadius: "50%",
    backgroundColor: "#BBB08A",
    color: "#fff",
    height: "48px",
    width: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  redeemTicketsText: {
    letterSpacing: "0px",
    marginLeft: "8px",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },
}));

const RedeemTicketsButton = ({ iconText, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase disableRipple onClick={onClick}>
        <div className={classes.redeemTextIcon}>
          <Typography variant="h4">{iconText}</Typography>
        </div>
        <Typography
          className={classes.redeemTicketsText}
          color="textPrimary"
          variant="subtitle1"
        >
          REDEEM TICKETS
        </Typography>
      </ButtonBase>
    </div>
  );
};

export default RedeemTicketsButton;
