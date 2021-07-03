import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: theme.spacing(1),
    color: theme.palette.type === "dark" ? "#bbb" : "#555",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  titleBigText: {
    marginRight: theme.spacing(1),
    fontWeight: 700,
  },
  titleSmallText: {
    fontWeight: 700,
  },
}));

const HeaderTitle = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.titleBigText} variant="h4">
        AZUL COLLECTION
      </Typography>
      <Typography className={classes.titleSmallText} variant="h6">
        BY SECRET UNDERGROUND
      </Typography>
    </div>
  );
};

export default HeaderTitle;
