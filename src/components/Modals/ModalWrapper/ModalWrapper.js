import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ThemeContext from "../../../contexts/ThemeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backdropFilter: "blur(24px)",
    minWidth: "100px",
    minHeight: "50px",
  },

  contentBackgroundLight: {
    backgroundColor: "rgba(255,255,255,.5)",
    color: "#2A2C64",
  },
  contentBackgroundDark: {
    backgroundColor: "rgba(50,50,50,.5)",
    color: "#fff",
  },
}));

const ModalWrapper = ({ open, handleClose, children }) => {
  const classes = useStyles();
  const darkModeOn = useContext(ThemeContext);

  const backdropStyleLight = {
    backgroundColor: "rgba(200, 200, 200, 0.1)",
    backdropFilter: "blur(8px)",
  };

  const backdropStyleDark = {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(8px)",
  };

  return (
    <Modal
      className={classes.root}
      open={open}
      onClose={handleClose}
      BackdropProps={{
        style: darkModeOn ? backdropStyleDark : backdropStyleLight,
      }}
    >
      <div
        className={
          darkModeOn
            ? classes.contentBackgroundDark
            : classes.contentBackgroundLight
        }
      >
        <div className={classes.content}>{children}</div>
      </div>
    </Modal>
  );
};

export default ModalWrapper;
