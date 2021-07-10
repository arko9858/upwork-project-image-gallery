import React, { useContext, useEffect, useState } from "react";
import ImageCard from "../components/ImageCard/ImageCard";
import Grid from "@material-ui/core/Grid";
import ImageSortButtons from "../components/ImageSortButtons/ImageSortButtons";
import testImage1 from "../images/testImage1.jpg";
import testImage2 from "../images/testImage2.jpg";
import testImage3 from "../images/testImage3.jpg";
import { makeStyles } from "@material-ui/core/styles";
import FilterContext from "../contexts/FilterContext";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "32px 0",
  },
}));

const testData = [
  {
    imgTitle: "Fox",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage1,
    active: false,
    topLeftText: "Raffle ends",
    topRightText: "21 day",
    bottomLeftText: "",
    buttonText: "Participate",
    tag: "art",
  },
  {
    imgTitle: "Cat",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage2,
    active: true,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "23.5 SCRT",
    buttonText: "Activ",
    tag: "champagne",
  },
  {
    imgTitle: "Squirrel",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage3,
    active: false,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "",
    buttonText: "Send",
    tag: "raffle",
  },
  {
    imgTitle: "Fox",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage1,
    active: false,
    topLeftText: "Raffle ends",
    topRightText: "21 day",
    bottomLeftText: "",
    buttonText: "Participate",
    tag: "art",
  },
  {
    imgTitle: "Cat",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage2,
    active: true,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "23.5 SCRT",
    buttonText: "Activ",
    tag: "champagne",
  },
  {
    imgTitle: "Squirrel",
    imgDesc: "Floating in the secrets of the invisible depths.",
    uploadedBy: "Azul, 2021",
    imgSrc: testImage3,
    active: false,
    topLeftText: "Owner",
    topRightText: "unknown",
    bottomLeftText: "",
    buttonText: "Send",
    tag: "raffle",
  },
];

const IndexPage = () => {
  const classes = useStyles();
  const { filterString } = useContext(FilterContext);

  const [filteredData, setFilteredData] = useState([]);

  const filterData = () => {
    let x = [];
    let y = [];
    if (filterString === "active") {
      x = testData.filter((item) => item.active === true);
      y = testData.filter((item) => item.active !== true);

      setFilteredData(x.concat(y));
    } else {
      x = testData.filter((item) => item.tag === filterString);
      y = testData.filter((item) => item.tag !== filterString);

      setFilteredData(x.concat(y));
    }
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterString]);

  return (
    <div className={classes.root}>
      <ImageSortButtons />

      {/* image list */}
      <Grid container spacing={5}>
        {filteredData.map((item, index) => (
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
