import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "8px 0",
  },
});

const ImageSortButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>
        <Typography variant="button" color="textSecondary">
          Art
        </Typography>
      </Button>
      <Button>
        <Typography variant="button" color="textSecondary">
          Champagne
        </Typography>
      </Button>
      <Button>
        <Typography variant="button" color="textSecondary">
          Raffle
        </Typography>
      </Button>
      <Button>
        <Typography variant="button" color="textSecondary">
          Owned
        </Typography>
      </Button>
    </div>
  );
};

export default ImageSortButtons;
