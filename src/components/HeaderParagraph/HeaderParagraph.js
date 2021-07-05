import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "550px",
  },
});

const HeaderParagraph = () => {
  const classes = useStyles();


  return (
    <Typography className={classes.root} paragraph color="textPrimary">
      Stake your SCRT with Secret Underground and participate in the NFT's
      digital art raffle twice a month.
    </Typography>
  );
};

export default HeaderParagraph;
