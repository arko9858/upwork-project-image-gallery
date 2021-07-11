import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "0px",
    left: "64px",
    fontSize: "2.6rem",
    zIndex:'100',

    [theme.breakpoints.down("xs")]: {
      top:'0px',
      left:'56px',
      fontSize:'2.6rem'
    },
  },
}));

const Flake5 = () => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={classes.root}
      xmlns="http://www.w3.org/2000/svg"
      width="62.175"
      height="74.601"
      viewBox="0 0 62.175 74.601"
    >
      <path
        d="M4398.356,178.7l-30.792,45.661L4429.74,253.3v-59Z"
        transform="translate(-4367.565 -178.701)"
        fill="#e7b6f5"
      />
    </SvgIcon>
  );
};

export default Flake5;
