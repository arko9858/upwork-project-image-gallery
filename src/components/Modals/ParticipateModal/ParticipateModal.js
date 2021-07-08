import React from "react";
import { Typography, Grid, Divider, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import VioletOrangeButton from "../../Buttons/VioletOrangeButton/VioletOrangeButton";
import testImage1 from "../../../images/testImage1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "48px 36px",
    width: "768px",
  },
  img: {
    width: "100%",
    height: "256px",
    overflow: "hidden",
    display: "block",
    [theme.breakpoints.down("xs")]: {
      height: "180px",
    },
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

  button: {
    textAlign: "center",
    marginTop: "48px",
  },

  mobileRoot: {
    width: "100vw",
    maxWidth: "400px",
    padding: "32px 36px",
    paddingTop: "48px",
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
    marginTop: "32px",
  },
}));

const ParticipateModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const imageLabel = "SWIMMINGPOOL";
  const locationDate = "Azul, 2021";
  const imageDesc = "Floating in the secrets of the invisible depths.";

  const handleParticipateClick = () => {
    console.log("Participate Button clicked");
    handleClose();
  };

  return (
    <ModalWrapper open={open} handleClose={handleClose}>
      <Hidden xsDown>
        <div className={classes.root}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={7}>
              <img className={classes.img} src={testImage1} alt="test 1" />
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

              <div className={classes.button}>
                <VioletOrangeButton onClick={handleParticipateClick}>
                  Participate
                </VioletOrangeButton>
              </div>
            </Grid>
          </Grid>
        </div>
      </Hidden>
      <Hidden smUp>
        <div className={classes.mobileRoot}>
          <img className={classes.img} src={testImage1} alt="test 1" />

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

            <div className={classes.button}>
              <VioletOrangeButton onClick={handleParticipateClick}>
                Participate
              </VioletOrangeButton>
            </div>
          </div>
        </div>
      </Hidden>
    </ModalWrapper>
  );
};

export default ParticipateModal;
