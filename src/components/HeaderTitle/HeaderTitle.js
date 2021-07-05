import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ThemeContext from "../../contexts/ThemeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  textColorLight: {
    color: "#4B4B4B",
  },
  textColorDark: {
    color: "#BEBEBE",
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
  const darkModeOn = useContext(ThemeContext);

  return (
    <div
      className={darkModeOn ? classes.textColorDark : classes.textColorLight}
    >
      <div className={classes.root}>
        <Typography
          className={classes.titleBigText}
          color="inherit"
          variant="h4"
        >
          AZUL COLLECTION
        </Typography>
        <Typography
          className={classes.titleSmallText}
          color="inherit"
          variant="h6"
        >
          BY SECRET UNDERGROUND
        </Typography>
      </div>
    </div>
  );
};

export default HeaderTitle;
