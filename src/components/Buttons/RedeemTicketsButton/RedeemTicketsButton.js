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
  },
  redeemTicketsText: {
    color: "777",
    marginLeft: "8px",
  },
});

const RedeemTicketsButton = ({ iconText, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase onClick={onClick}>
        <div className={classes.redeemTextIcon}>
          <Typography variant="h4">{iconText}</Typography>
        </div>
      </ButtonBase>
      <Typography className={classes.redeemTicketsText} variant="button">
        Redeem Tickets
      </Typography>
    </div>
  );
};

export default RedeemTicketsButton;
