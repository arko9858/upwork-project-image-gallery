import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import VioletOrangeButton from "../../Buttons/VioletOrangeButton/VioletOrangeButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "24px 36px",
  },
  title: {
    fontSize: "2.1rem",
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
    fontSize: "1.1rem",
  },
  instructions: {
    fontSize: "1.1rem",
    margin: "20px 0",
    letterSpacing:'0px'
  },
  button:{
    textAlign:'center',
  }
}));

const RedeemModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const titleText = "Yay! Congratulations you won 3 NFT’s!";
  const imageLabel = "SWIMMINGPOOL";
  const locationDate = "Azul, 2021";
  const imageDesc = "Floating in the secrets of the invisible depths.";
  const instructions = "DOWNLOAD YOUR PRIZE AND SAVE IT LOCALLY.";

  return (
    <ModalWrapper open={open} handleClose={handleClose}>
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
            <Typography className={classes.imageDesc} color="textSecondary">
              {imageDesc}
            </Typography>
            <Typography className={classes.instructions} color="textSecondary">
              {instructions}
            </Typography>
            <div className={classes.button}>
              <VioletOrangeButton>Download gif</VioletOrangeButton>
            </div>
          </Grid>
        </Grid>
      </div>
    </ModalWrapper>
  );
};

export default RedeemModal;
