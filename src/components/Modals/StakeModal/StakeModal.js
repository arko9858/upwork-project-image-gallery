import React, { useContext, useState } from "react";
import { Typography, Grid, InputBase, Hidden, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import VioletOrangeButton from "../../Buttons/VioletOrangeButton/VioletOrangeButton";
import ThemeContext from "../../../contexts/ThemeContext";
import AccountContext from "../../../contexts/AccountContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "36px 56px",
    width: "664px",
  },
  description: {
    width: "68%",
    margin: "8px 0",
  },

  inputArea: {
    margin: "20px 0",
  },

  inputLight: {
    background: "rgba(255, 255, 255, 0.5)",
    padding: "16px",
    borderRadius: "4px",
    fontSize: "1.2rem",
    color: "rgba(0, 0, 0, 0.87)",

    "&::placeholder": {
      color: "#000",
      fontSize: "1.3rem",
    },

    "&:hover": {
      backgroundColor: "rgba(255,255,255,.8)",
    },
  },
  inputDark: {
    background: "#FFFFFF43",
    padding: "16px",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "1.2rem",
    "&::placeholder": {
      fontSize: "1.3rem",
      color: "#fff",
      opacity: ".75",
    },

    "&:hover": {
      backgroundColor: "rgba(255,255,255,.4)",
    },
  },

  button: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  },

  paperLight: {
    marginBottom: "8px",
    padding: "4px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  },

  paperDark: {
    marginBottom: "8px",
    padding: "4px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#626263",
  },
  paperLabel: {
    fontSize: "1.15rem",
  },

  mobileRoot: {
    width: "100vw",
    maxWidth: "424px",
    padding: "36px 16px",
    textAlign: "center",
  },
  mobileTitle: {
    fontSize: "1.6rem",
  },
  mobileDescription: {
    padding: "0 16px",
    marginTop: "10px",
    marginBottom: "24px",
  },
  mobileButton: {
    marginTop: "24px",
    marginBottom: "20px",
  },
  mobilePapers: {
    padding: "0 12px",
  },
}));

const StakeModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const darkModeOn = useContext(ThemeContext);
  const { availableBalance } = useContext(AccountContext);

  const title = "Stake with Secret Underground";
  const description =
    "Stake your SCRT with Secret Underground in the Mountains and with some luck win this NFT.";

  const accountId = "2U8SD89";

  const [scrtAmount, setScrtAmount] = useState("");

  const handleInputChange = (e) => {
    setScrtAmount(e.target.value);
  };

  const handleStakeOnClick = () => {
    console.log("Stake button clicked");
    console.log("Amount: " + scrtAmount);
    setScrtAmount("");
    handleClose();
  };

  return (
    <ModalWrapper open={open} handleClose={handleClose}>
      <Hidden xsDown>
        <div className={classes.root}>
          <Typography variant="h4">{title}</Typography>
          <Typography className={classes.description}>{description}</Typography>
          <div className={classes.inputArea}>
            <Grid container justify="space-between" spacing={4}>
              <Grid item xs={6}>
                <InputBase
                  fullWidth
                  placeholder="Enter amount in SCRT"
                  value={scrtAmount}
                  onChange={handleInputChange}
                  inputProps={
                    darkModeOn
                      ? { className: classes.inputDark }
                      : { className: classes.inputLight }
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <div className={classes.button}>
                  <VioletOrangeButton onClick={handleStakeOnClick}>
                    Stake Now
                  </VioletOrangeButton>
                </div>
              </Grid>
            </Grid>
          </div>
          <Paper
            className={darkModeOn ? classes.paperDark : classes.paperLight}
            square
            elevation={0}
          >
            <Typography className={classes.paperLabel} color="textSecondary">
              Your Account:
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {accountId}
            </Typography>
          </Paper>
          <Paper
            className={darkModeOn ? classes.paperDark : classes.paperLight}
            square
            elevation={0}
          >
            <Typography className={classes.paperLabel} color="textSecondary">
              Available Balance:
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {availableBalance + " SCRT"}
            </Typography>
          </Paper>
        </div>
      </Hidden>
      <Hidden smUp>
        <div className={classes.mobileRoot}>
          <Typography className={classes.mobileTitle} variant="h5">
            {title}
          </Typography>
          <Typography variant="body2" className={classes.mobileDescription}>
            {description}
          </Typography>
          <InputBase
            placeholder="Enter amount in SCRT"
            value={scrtAmount}
            onChange={handleInputChange}
            inputProps={
              darkModeOn
                ? { className: classes.inputDark }
                : { className: classes.inputLight }
            }
          />
          <div className={classes.mobileButton}>
            <VioletOrangeButton onClick={handleStakeOnClick}>
              Stake Now
            </VioletOrangeButton>
          </div>
          <div className={classes.mobilePapers}>
            <Paper
              className={darkModeOn ? classes.paperDark : classes.paperLight}
              square
              elevation={0}
            >
              <Typography color="textSecondary">Your Account:</Typography>
              <Typography color="textSecondary" variant="body2">
                {accountId}
              </Typography>
            </Paper>
            <Paper
              className={darkModeOn ? classes.paperDark : classes.paperLight}
              square
              elevation={0}
            >
              <Typography color="textSecondary">Available Balance:</Typography>
              <Typography color="textSecondary" variant="body2">
                {availableBalance + " SCRT"}
              </Typography>
            </Paper>
          </div>
        </div>
      </Hidden>
    </ModalWrapper>
  );
};

export default StakeModal;
