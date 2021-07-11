import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: "16px",
    left: "180px",
    fontSize: "1.8rem",
    zIndex:"100",
    [theme.breakpoints.down("xs")]: {
      bottom:'336px',
      left:'32px',
      fontSize:'1.5rem'
    },
  },
}));

const Flake4 = () => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={classes.root}
      xmlns="http://www.w3.org/2000/svg"
      width="47.037"
      height="37.005"
      viewBox="0 0 47.037 37.005"
    >
      <path
        d="M4605.97,792.935l38.223,15.372,8.814-37Z"
        transform="translate(-4605.97 -771.302)"
        fill="#e7b6f5"
      />
    </SvgIcon>
  );
};

export default Flake4;
