import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background:
      "transparent linear-gradient(270deg, #C4B480 0%, #95C0D6 100%) 0% 0% no-repeat padding-box",

    borderRadius: "27px",
    color: "white",
    padding:'8px 16px'
  },
  text: {
      color:'#fff',
      textTransform:'uppercase',
      letterSpacing:'0px',
   
      
  },
});

const StyledButton = (props) => {
  const classes = useStyles();

  return (
    <Button size="small" className={classes.root}>
      <Typography className={classes.text}>{props.children}</Typography>
    </Button>
  );
};

export default StyledButton;
