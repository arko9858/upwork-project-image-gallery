import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import VioletOrangeButton from "../../Buttons/VioletOrangeButton/VioletOrangeButton";
import Flake1 from "./Decorations/Flake1";
import Flake2 from "./Decorations/Flake2";
import Flake3 from "./Decorations/Flake3";
import Flake4 from "./Decorations/Flake4";
import Flake5 from "./Decorations/Flake5";
import Flake6 from "./Decorations/Flake6";
import Flake7 from "./Decorations/Flake7";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "32px 36px",
    paddingBottom: "24px",
    width: "768px",
    position: "relative",
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

const WonModal = ({ open, handleClose }) => {
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
      {/* for desktop and tablet */}
      <Hidden xsDown>
        <div className={classes.root}>
          <Flake1 />
          <Flake2 />
          <Flake3 />
          <Flake4 />
          <Flake5 />
          <Flake6 />
          <Flake7 />
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
                variant="body1"
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

      {/* for mobile */}
      <Hidden smUp>
        <div className={classes.mobileRoot}>
          <Flake1 />
          <Flake2 />
          <Flake4 />
          <Flake5 />
          <Flake6 />
          <Flake7 />

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

export default WonModal;
