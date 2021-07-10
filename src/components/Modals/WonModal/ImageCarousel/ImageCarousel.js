import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import testImage1 from "../../../../images/testImage1.jpg";
import testImage2 from "../../../../images/testImage2.jpg";
import testImage3 from "../../../../images/testImage3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  stepper: {
    backgroundColor: "rgba(255,255,255,0)",
  },
}));

const testData = [
  { imgUrl: testImage1, label: "test image 1" },
  { imgUrl: testImage2, label: "test image 2" },
  { imgUrl: testImage3, label: "test image 3" },
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
          <IconButton
            color="secondary"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton
            color="secondary"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </div>
  );
};

export default ImageCarousel;
