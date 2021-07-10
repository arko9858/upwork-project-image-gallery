import React from "react";
import ImageCard from "../components/ImageCard/ImageCard";
import { Grid } from "@material-ui/core";
import ImageSortButtons from "../components/ImageSortButtons/ImageSortButtons";
import testImage1 from "../images/testImage1.jpg";
import testImage2 from "../images/testImage2.jpg";
import testImage3 from "../images/testImage3.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "32px",
  },
}));

const testData = [
  {
    imgTitle: "SWIMMINGPOOL",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage1,
    active: true,
    topLeftText: "Raffle ends",
    topRightText: "21 day",
    bottomLeftText: "",
    buttonText: "Participate",
  },
  {
    imgTitle: "ROSA",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage2,
    active: false,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "23.5 SCRT",
    buttonText: "Activ",
  },
  {
    imgTitle: "BLUE",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage3,
    active: true,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "",
    buttonText: "Send",
  },
  {
    imgTitle: "SWIMMINGPOOL",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage1,
    active: true,
    topLeftText: "Raffle ends",
    topRightText: "21 day",
    bottomLeftText: "",
    buttonText: "Participate",
  },
  {
    imgTitle: "ROSA",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage2,
    active: false,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "23.5 SCRT",
    buttonText: "Activ",
  },
  {
    imgTitle: "BLUE",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage3,
    active: true,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "",
    buttonText: "Send",
  },
];

const IndexPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageSortButtons />

      {/* image list */}
      <Grid container spacing={6}>
        {testData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <ImageCard
              imgTitle={item.imgTitle}
              imgSrc={item.imgSrc}
              active={item.active}
              topLeftText={item.topLeftText}
              topRightText={item.topRightText}
              bottomLeftText={item.bottomLeftText}
              buttonText={item.buttonText}
              modalData={{
                title: item.imgTitle,
                uploadedBy: item.uploadedBy,
                desc: item.imgDesc,
                imgSrc: item.imgSrc,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default IndexPage;
