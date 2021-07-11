import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "224px",
    right: "40px",
    fontSize: "2.4rem",
    zIndex:'100',

    [theme.breakpoints.down("xs")]: {
      top:'8px',
      right:'100px',
      fontSize:'2rem'
    },
  },
}));

const Flake3 = () => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={classes.root}
      xmlns="http://www.w3.org/2000/svg"
      width="56.402"
      height="38.188"
      viewBox="0 0 56.402 38.188"
    >
      <path
        d="M5393.118,527.24,5372.1,553.463l56.4,11.966Z"
        transform="translate(-5372.098 -527.24)"
        fill="#e7b6f5"
      />
    </SvgIcon>
  );
};

export default Flake3;
