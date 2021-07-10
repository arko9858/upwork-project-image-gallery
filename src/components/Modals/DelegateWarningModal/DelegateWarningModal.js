import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ExclamationIcon from "../../../images/ExclamationIcon.png";
import ExclamationIconDarkMode from "../../../images/ExclamationIconDarkMode.png";
import ThemeContext from "../../../contexts/ThemeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "392px",
    width: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "28px 40px",
  },
  imageContainer: {
    textAlign: "right",
    paddingRight:'16px'
  },
  iconImage: {
    height: "80px",
    width: "auto",
  },
  text: {
    fontSize: "1.3rem",
  },
}));

const DelegateWarningModal = ({ open, handleClose }) => {
  const classes = useStyles();

  const darkModeOn = useContext(ThemeContext)

  const warningText1 = "You have to delegate to";
  const warningText2 = "Secret Underground";
  const warningText3 = "to be eligible for the raffle.";

  return (
    <ModalWrapper open={open} handleClose={handleClose}>
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img
            src={darkModeOn?ExclamationIconDarkMode:ExclamationIcon}
            alt="Please connect your wallet"
            className={classes.iconImage}
          />
        </div>
        <div>
          <Typography className={classes.text} variant="body2">
            {warningText1}
          </Typography>
          <Typography className={classes.text} variant="body2">
            {warningText2}
          </Typography>
          <Typography className={classes.text} variant="body2">
            {warningText3}
          </Typography>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DelegateWarningModal;
