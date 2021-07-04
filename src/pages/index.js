import React from "react";
import ImageCard from "../components/ImageCard/ImageCard";
import { Grid } from "@material-ui/core";
import ImageSortButtons from "../components/ImageSortButtons/ImageSortButtons";

const testData = [
  {
    imgTitle: "SWIMMINGPOOL",
    active: true,
    topLeftText: "Raffle ends",
    topRightText: "21 day",
    bottomLeftText: "",
    buttonText: "Participate",
  },
  {
    imgTitle: "ROSA",
    active: false,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "23.5 SCRT",
    buttonText: "Active",
  },
  {
    imgTitle: "BLUE",
    active: true,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "",
    buttonText: "Send",
  },
  {
    imgTitle: "SWIMMINGPOOL",
    active: true,
    topLeftText: "Raffle ends",
    topRightText: "21 day",
    bottomLeftText: "",
    buttonText: "Participate",
  },
  {
    imgTitle: "ROSA",
    active: false,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "23.5 SCRT",
    buttonText: "Active",
  },
  {
    imgTitle: "BLUE",
    active: true,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "",
    buttonText: "Send",
  },
];

const IndexPage = () => {
  return (
    <div style={{ paddingTop: 32 }}>
      <ImageSortButtons />
      <Grid container spacing={3}>
        {testData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <ImageCard
              imgTitle={item.imgTitle}
              active={item.active}
              topLeftText={item.topLeftText}
              topRightText={item.topRightText}
              bottomLeftText={item.bottomLeftText}
              buttonText={item.buttonText}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default IndexPage;
