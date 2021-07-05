import React from "react";
import Link from "../Link/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: "8px 0",
    marginLeft: "20px",
    [theme.breakpoints.up("xs")]: {
      margin: "16px auto",
    },
  },
  link: {
    marginRight: "24px",
    color: "#707070",
  },
}));

const ImageSortButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav aria-label="Filter By">
        <Link className={classes.link} to="/">
          ART
        </Link>
        <Link className={classes.link} to="/">
          CHAMPAGNE
        </Link>
        <Link className={classes.link} to="/">
          RAFFLE
        </Link>
        <Link className={classes.link} to="/">
          OWNED
        </Link>
      </nav>
    </div>
  );
};

export default ImageSortButtons;
