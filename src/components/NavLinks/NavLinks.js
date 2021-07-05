import React from "react";
import Link from "../Link/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#ccc",
    margin: "24px 0",
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
  },
  link: {
    color: "#777",
    marginRight: "16px",
    [theme.breakpoints.up("sm")]: {
      marginRight: 0,
      marginLeft: "16px",
    },
  },
}));

const NavLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav aria-label="Page Links">
        <Link className={classes.link} to="/">
          HOW TO JOIN
        </Link>
        <Link className={classes.link} to="/">
          ABOUT
        </Link>
        <Link className={classes.link} to="/">
          SOCIAL
        </Link>
      </nav>
    </div>
  );
};

export default NavLinks;
