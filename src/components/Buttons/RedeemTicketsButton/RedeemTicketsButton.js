import React from "react";
import { ButtonBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
    marginRight: "8px",
  },
  redeemTicketsText: {
    color: "777",
  },
});

const RedeemTicketsButton = ({ iconText, onClick }) => {
  const classes = useStyles();

  return (
    <ButtonBase onClick={onClick} className={classes.root}>
      <div className={classes.redeemTextIcon}>
        <Typography variant="h4">{iconText}</Typography>
      </div>
      <Typography className={classes.redeemTicketsText} variant="button">
        Redeem Tickets
      </Typography>
    </ButtonBase>
  );
};

export default RedeemTicketsButton;
