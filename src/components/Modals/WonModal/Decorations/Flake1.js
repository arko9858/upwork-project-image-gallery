import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "96px",
    right: "110px",
    fontSize:'2.6rem',
    zIndex:'100',
    [theme.breakpoints.down("xs")]: {
      top:'8px',
      right:'40px',
      fontSize:'2rem'
    },
  },
}));

const Flake1 = () => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={classes.root}
      xmlns="http://www.w3.org/2000/svg"
      width="53.441"
      height="68.621"
      viewBox="0 0 53.441 68.621"
    >
      <path
        d="M5239.319,216.022s16.157,39.571-8.3,54.778,35.622,13.81,35.622,13.81l11.966-68.588Z"
        transform="translate(-5225.167 -216.022)"
        fill="#e7b6f5"
      />
    </SvgIcon>
  );
};

export default Flake1;
