import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: "144px",
    left: "6px",
    fontSize: "1.7rem",
    zIndex:'100',

    [theme.breakpoints.down("xs")]: {
      bottom:'40px',
      left:'328px',
      fontSize:'1.9rem'
    },
  },
}));

const Flake7 = () => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={classes.root}
      xmlns="http://www.w3.org/2000/svg"
      width="38.112"
      height="49.094"
      viewBox="0 0 38.112 49.094"
    >
      <path
        d="M4316.468,576.238l-10.411,49.094h38.112Z"
        transform="translate(-4306.058 -576.238)"
        fill="#e7b6f5"
      />
    </SvgIcon>
  );
};

export default Flake7;
