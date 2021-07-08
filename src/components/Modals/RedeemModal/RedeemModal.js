import React from "react";
import { Typography, Grid, Divider, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import VioletOrangeButton from "../../Buttons/VioletOrangeButton/VioletOrangeButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "32px 36px",
    width: "768px",
  },
  title: {
    fontSize: "2.35rem",
    marginBottom: "28px",
    marginTop: "16px",
  },
  imageLabel: {
    fontSize: "1.2rem",
  },
  divider: {
    borderTop: "1px solid rgba(42, 44, 100,.6)",
    margin: "12px 0",
  },
  imageDesc: {
    fontSize: "1rem",
  },
  instructions: {
    fontSize: "1.1rem",
    margin: "20px 0",
    letterSpacing: "0px",
  },
  button: {
    textAlign: "center",
  },

  mobileRoot: {
    width: "100vw",
    maxWidth: "400px",
    padding: "32px 36px",
  },
  mobileTitle: {
    fontSize: "1.9rem",
    marginBottom: "16px",
  },
  mobileDivider: {
    borderTop: "1px solid rgba(42, 44, 100,.6)",
    margin: "12px 0",
  },
  mobileDescriptions: {
    width: "200px",
    margin: "0 auto",
  },
  mobileInstructions: {
    margin: "16px 0",
    marginTop: "24px",
  },
}));

const RedeemModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const titleText = "Yay! Congratulations you won 3 NFT’s!";
  const imageLabel = "SWIMMINGPOOL";
  const locationDate = "Azul, 2021";
  const imageDesc = "Floating in the secrets of the invisible depths.";
  const instructions = "DOWNLOAD YOUR PRIZE AND SAVE IT LOCALLY.";

  const handleDownloadGifClick = () => {
    console.log("download gif clicked");
    handleClose();
  };

  return (
    <ModalWrapper open={open} handleClose={handleClose}>
      <Hidden xsDown>
        <div className={classes.root}>
          <Typography
            className={classes.title}
            color="textSecondary"
            variant="h4"
          >
            {titleText}
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={7}>
              <ImageCarousel />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography color="textSecondary" className={classes.imageLabel}>
                {imageLabel}
              </Typography>
              <Typography color="textSecondary" variant="body1">
                {locationDate}
              </Typography>
              <Divider className={classes.divider} />
              <Typography
                className={classes.imageDesc}
                variant="body2"
                color="textSecondary"
              >
                {imageDesc}
              </Typography>
              <Typography
                className={classes.instructions}
                color="textSecondary"
              >
                {instructions}
              </Typography>
              <div className={classes.button}>
                <VioletOrangeButton onClick={handleDownloadGifClick}>
                  Download gif
                </VioletOrangeButton>
              </div>
            </Grid>
          </Grid>
        </div>
      </Hidden>
      <Hidden smUp>
        <div className={classes.mobileRoot}>
          <Typography
            className={classes.mobileTitle}
            color="textSecondary"
            variant="h5"
            align="center"
          >
            {titleText}
          </Typography>
          <ImageCarousel />
          <div className={classes.mobileDescriptions}>
            <Typography
              color="textSecondary"
              align="center"
              variant="subtitle1"
            >
              {imageLabel}
            </Typography>
            <Typography color="textSecondary" align="center" variant="body2">
              {locationDate}
            </Typography>
            <Divider variant="middle" className={classes.mobileDivider} />
            <Typography variant="body2" color="textSecondary" align="center">
              {imageDesc}
            </Typography>
            <Typography
              className={classes.mobileInstructions}
              align="center"
              variant="body2"
              color="textSecondary"
            >
              {instructions}
            </Typography>
            <div className={classes.button}>
              <VioletOrangeButton onClick={handleDownloadGifClick}>
                Download gif
              </VioletOrangeButton>
            </div>
          </div>
        </div>
      </Hidden>
    </ModalWrapper>
  );
};

export default RedeemModal;
