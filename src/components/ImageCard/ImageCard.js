import React, { useContext } from "react";
import testImage from "../../images/testImage.jpg";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ThemeContext from "../../contexts/ThemeContext";
const activeButton =
  "transparent linear-gradient(270deg, #F16331 0%, #AC1CA6 100%) 0% 0% no-repeat padding-box";
const disabledButton =
  "transparent linear-gradient(270deg, #E0C6BD 0%, #DB75D7 100%) 0% 0% no-repeat padding-box";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
    margin: "16px 0",
  },

  media: {
    height: "360px",
  },
  cardContentLight: {
    padding: "16px 0",
    backgroundColor: "#F4F4F4",
  },
  cardContentDark: {
    padding: "16px 0",
    backgroundColor: "#221824",
  },
  divider: { padding: "0 24px" },
  div1: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 24px",
  },
  div2: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "24px",
    paddingRight: "16px",
  },
  actionButton: {
    background: activeButton,
    borderRadius: "27px",
    minWidth: "100px",
    color: "white",
    padding: "8px 16px",
    "&:disabled": {
      background: disabledButton,
      color: "white",
    },
  },
  title: {
    fontSize: "1.1rem",
    marginBottom: "20px",
    fontWeight: 500,
  },
  textStyle: {
    fontWeight: 500,
  },
}));

const ImageCard = ({
  imgTitle,
  active,
  topLeftText,
  topRightText,
  bottomLeftText,
  buttonText,
}) => {
  const classes = useStyles();
  const darkModeOn = useContext(ThemeContext);

  return (
    <Card elevation={0} className={classes.card} square>
      <CardMedia className={classes.media} image={testImage} title={imgTitle} />
      <CardContent
        className={
          darkModeOn ? classes.cardContentDark : classes.cardContentLight
        }
      >
        <Typography
          color="textSecondary"
          className={classes.title}
          variant="body2"
          align="center"
        >
          {imgTitle ? imgTitle : "ROSA"}
        </Typography>
        <div className={classes.divider}>
          <Divider />
        </div>
        <div className={classes.div1}>
          <Typography className={classes.textStyle} color="textSecondary">
            {topLeftText ? topLeftText : "Owner"}
          </Typography>
          <Typography className={classes.textStyle} color="textSecondary">
            {topRightText ? topRightText : "unknown"}
          </Typography>
        </div>
        <div className={classes.div2}>
          <Typography className={classes.textStyle} color="textSecondary">
            {bottomLeftText}
          </Typography>
          <Button
            disabled={!active}
            size="small"
            className={classes.actionButton}
          >
            {buttonText ? buttonText : "Participate"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
