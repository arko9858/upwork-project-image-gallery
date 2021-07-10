import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FilterContext from "../../contexts/FilterContext";
import ThemeContext from "../../contexts/ThemeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    maxWidth: "500px",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "8px",
    marginBottom: "24px",
  },

  textLight: {
    color: "#707070",
    textTransform: "uppercase",
    "&:hover": {
      color: "#212121",
      cursor: "pointer",
    },
  },

  textDark: {
    color: "#707070",
    textTransform: "uppercase",
    "&:hover": {
      color: "#fafafa",
      cursor: "pointer",
    },
  },

  activeTextLight: {
    color: "#000",
  },
  activeTextDark: {
    color: "#fff",
  },
}));

const ImageSortButtons = () => {
  const classes = useStyles();
  const { filterString, setFilterString } = useContext(FilterContext);
  const darkModeOn = useContext(ThemeContext);

  const artTag = "art";
  const champagneTag = "champagne";
  const raffleTag = "raffle";
  const ownedTag = "owned";
  const activeTag = "active";

  const handleArtClick = () => {
    setFilterString(artTag);
  };
  const handleChampagneClick = () => {
    setFilterString(champagneTag);
  };
  const handleRaffleClick = () => {
    setFilterString(raffleTag);
  };
  const handleOwnedClick = () => {
    setFilterString(ownedTag);
  };
  const handleActiveClick = () => {
    setFilterString(activeTag);
  };

  const checkActive = (tag) => {
    if (filterString === tag) {
      return darkModeOn ? classes.activeTextDark : classes.activeTextLight;
    }

    return "";
  };

  const themedText = darkModeOn ? classes.textDark : classes.textLight;

  return (
    <div className={classes.root}>
      <Typography
        className={themedText + " " + checkActive(artTag)}
        onClick={handleArtClick}
      >
        Art
      </Typography>
      <Typography
        className={themedText + " " + checkActive(champagneTag)}
        onClick={handleChampagneClick}
      >
        CHAMPAGNE
      </Typography>
      <Typography
        className={themedText + " " + checkActive(raffleTag)}
        onClick={handleRaffleClick}
      >
        RAFFLE
      </Typography>
      <Typography
        className={themedText + " " + checkActive(ownedTag)}
        onClick={handleOwnedClick}
      >
        OWNED
      </Typography>
      <Typography
        className={themedText + " " + checkActive(activeTag)}
        onClick={handleActiveClick}
      >
        ACTIVE
      </Typography>
    </div>
  );
};

export default ImageSortButtons;
