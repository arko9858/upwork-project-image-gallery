import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Heart from "../../../images/Heart.png";
import HeartDarkMode from "../../../images/HeartDarkMode.png";
import ThemeContext from "../../../contexts/ThemeContext";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    padding: "40px",
  },
  imageContainer: {
    textAlign: "center",
    marginTop:'16px'
  },
  iconImage: {
    height: "48px",
    width: "auto",
  },
  text: {
    fontSize: "1.5rem",
  },
}));

const LostModal = ({ open, handleClose }) => {
  const classes = useStyles();

  const darkModeOn = useContext(ThemeContext);

  const text1 = "Sorry, this time you didn't win.";
  const text2 = "Stay tune and join the next raffle.";

  return (
    <ModalWrapper open={open} handleClose={handleClose}>
      <div className={classes.root}>
        <Typography className={classes.text} variant="body2">
          {text1}
        </Typography>
        <Typography className={classes.text} variant="body2">
          {text2}
        </Typography>
        <div className={classes.imageContainer}>
          <img
            src={darkModeOn ? HeartDarkMode : Heart}
            alt="Please connect your wallet"
            className={classes.iconImage}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default LostModal;
