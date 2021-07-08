import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import AccountContext from "../../../contexts/AccountContext";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "transparent linear-gradient(270deg, #C4B480 0%, #95C0D6 100%) 0% 0% no-repeat padding-box",

    borderRadius: "27px",
    color: "white",
    padding: "8px 16px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 16px",
      height: "36px",
    },
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },
}));

const DelegateButton = ({ onClick }) => {
  const classes = useStyles();
  const [accountId] = useContext(AccountContext);

  return (
    <Button size="small" className={classes.root} onClick={onClick}>
      <Typography className={classes.text}>
        {accountId && accountId.length > 0 ? "Stake Now" : "Delegate Now"}
      </Typography>
    </Button>
  );
};

export default DelegateButton;
