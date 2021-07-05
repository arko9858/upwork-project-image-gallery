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
    letterSpacing:'0px',
    marginLeft: "8px",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  roundButton: {
    borderRadius: "50%",
  },
}));

const RedeemTicketsButton = ({ iconText, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase onClick={onClick} className={classes.roundButton}>
        <div className={classes.redeemTextIcon}>
          <Typography variant="h4">{iconText}</Typography>
        </div>
      </ButtonBase>
      <Typography
        className={classes.redeemTicketsText}
        color="textPrimary"
        variant="subtitle1"
        onClick={onClick}
      >
        REDEEM TICKETS
      </Typography>
    </div>
  );
};

export default RedeemTicketsButton;
