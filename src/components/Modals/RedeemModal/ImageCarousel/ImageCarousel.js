import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import testImage from "../../../../images/testImage.jpg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  img: {
    width: "100%",
    height: "256px",
    overflow: "hidden",
    display: "block",
  },
  stepper: {
    backgroundColor: "rgba(255,255,255,0)",
  },
}));

const testData = [
  { imgUrl: testImage, label: "test image" },
  { imgUrl: testImage, label: "test image" },
  { imgUrl: testImage, label: "test image" },
];

const ImageCarousel = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = testData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={testData[activeStep].imgUrl}
        alt={testData[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        className={classes.stepper}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <Typography color="textSecondary">Next</Typography>
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            <Typography color="textSecondary">Back</Typography>
          </Button>
        }
      />
    </div>
  );
};

export default ImageCarousel;
