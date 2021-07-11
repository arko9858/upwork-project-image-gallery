import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: "96px",
    right: "304px",
    fontSize: "1.7rem",
    zIndex:'100',

    [theme.breakpoints.down("xs")]: {
      bottom:'320px',
      right:'32px',
      fontSize:'1.5rem'
    },
  },
}));

const Flake6 = () => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={classes.root}
      xmlns="http://www.w3.org/2000/svg"
      width="37.817"
      height="42.888"
      viewBox="0 0 37.817 42.888"
    >
      <path
        d="M5016.141,673.12l37.817,42.888V683.517Z"
        transform="translate(-5016.141 -673.12)"
        fill="#e7b6f5"
      />
    </SvgIcon>
  );
};

export default Flake6;
