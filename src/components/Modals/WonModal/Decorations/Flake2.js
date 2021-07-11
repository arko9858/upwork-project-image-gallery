import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "76px",
    left:"356px",
    fontSize: "1.8rem",
    zIndex:'100',

    [theme.breakpoints.down("xs")]: {
      top:'16px',
      left:'186px',
      fontSize:'1.5rem'
    },
  },
}));

const Flake2 = () => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={classes.root}
      xmlns="http://www.w3.org/2000/svg"
      width="48.179"
      height="22.486"
      viewBox="0 0 48.179 22.486"
    >
      <path
        d="M4865.727,294.773l25.768,22.486,22.411-22.486Z"
        transform="translate(-4865.727 -294.773)"
        fill="#e7b6f5"
      />
    </SvgIcon>
  );
};

export default Flake2;
