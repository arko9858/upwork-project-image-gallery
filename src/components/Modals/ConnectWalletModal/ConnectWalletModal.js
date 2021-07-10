import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ExclamationIcon from "../../../images/ExclamationIcon.png";
import ExclamationIconDarkMode from "../../../images/ExclamationIconDarkMode.png";
import ThemeContext from "../../../contexts/ThemeContext";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "32px 40px",
  },
  imageContainer: {
    textAlign: "right",
    marginRight: "32px",
  },
  iconImage: {
    height: "80px",
    width: "auto",
  },
  text: {
    fontSize: "1.55rem",
  },
}));

const ConnectWalletModal = ({ open, handleClose }) => {
  const classes = useStyles();

  const darkModeOn = useContext(ThemeContext);

  const warningText1 = "PLEASE CONNECT";
  const warningText2 = "YOUR WALLET";

  return (
    <ModalWrapper open={open} handleClose={handleClose}>
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img
            src={darkModeOn ? ExclamationIconDarkMode : ExclamationIcon}
            alt="Please connect your wallet"
            className={classes.iconImage}
          />
        </div>
        <div>
          <Typography className={classes.text} variant="body1">
            {warningText1}
          </Typography>
          <Typography className={classes.text} variant="body1">
            {warningText2}
          </Typography>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ConnectWalletModal;
