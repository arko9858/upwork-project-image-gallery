import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "transparent linear-gradient(270deg, #F16331 0%, #AC1CA6 100%) 0% 0% no-repeat padding-box",

    borderRadius: "27px",
    color: "white",
    padding: "8px 24px",
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "0px",
  },
}));

const VioletOrangeButton = ({ onClick, children }) => {
  const classes = useStyles();

  return (
    <Button onClick={onClick} size="small" className={classes.root}>
      <Typography className={classes.text}>{children}</Typography>
    </Button>
  );
};

export default VioletOrangeButton;
