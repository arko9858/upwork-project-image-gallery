import React, { Fragment, useState } from "react";
import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DelegateButton from "../../Buttons/DelegateButton/DelegateButton";
import RedeemTicketsButton from "../../Buttons/RedeemTicketsButton/RedeemTicketsButton";
import HeaderTitle from "../../HeaderTitle/HeaderTitle";
import NavLinks from "../../NavLinks/NavLinks";
import HeaderParagraph from "../../HeaderParagraph/HeaderParagraph";
import LoginButton from "../../Buttons/LoginButton/LoginButton";
import WonModal from "../../Modals/WonModal/WonModal";
import StakeModal from "../../Modals/StakeModal/StakeModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  buttonContainerDesktop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonContainerTablet: {
    textAlign: "right",
  },
  itemSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const Header = () => {
  const classes = useStyles();

  // won modal states and actions
  const [wonModalOpen, setWonModalOpen] = useState(false);
  const openWonModal = () => {
    setWonModalOpen(true);
  };
  const closeWonModal = () => {
    setWonModalOpen(false);
  };

  // ##########################

  // participate modal states and actions
  // const [participateModalIsOpen, setParticipateModalIsOpen] = useState(false);
  // const openParticipateModal = () => {
  //   seParticipateModalIsOpen(true);
  // };
  // const closeParticipateModal = () => {
  //   setParticipateModalIsOpen(false);
  // };

  // ##########################

  // stake modal states and actions
  const [stakeModalOpen, setStakeModalOpen] = useState(false);

  const openStakeModal = () => {
    setStakeModalOpen(true);
  };
  const closeStakeModal = () => {
    setStakeModalOpen(false);
  };

  // #######################

  const handleRedeemButtonClick = () => {
    openWonModal();
  };

  const handleDelegateButtonClick = () => {
    openStakeModal();
  };

  return (
    <Fragment>
      <header className={classes.root}>
        {/* desktop view */}
        <Hidden mdDown>
          <Grid container>
            <Grid item xs={7}>
              <HeaderTitle />
              <HeaderParagraph />
              <DelegateButton onClick={handleDelegateButtonClick} />
            </Grid>

            <Grid item xs={5}>
              <div className={classes.buttonContainerDesktop}>
                <RedeemTicketsButton onClick={handleRedeemButtonClick} />
                <LoginButton />
              </div>
              <NavLinks />
            </Grid>
          </Grid>
        </Hidden>

        {/* tablet view */}
        <Hidden lgUp xsDown>
          <Grid container alignItems="center">
            <Grid item xs={7}>
              <HeaderTitle />
              <HeaderParagraph />
            </Grid>

            <Grid item xs={5}>
              <div className={classes.buttonContainerTablet}>
                <LoginButton />

                <NavLinks />
              </div>
            </Grid>
          </Grid>
          <div className={classes.itemSpaceBetween}>
            <DelegateButton onClick={handleDelegateButtonClick}/>
            <RedeemTicketsButton onClick={handleRedeemButtonClick} />
          </div>
        </Hidden>

        {/* mobile view */}
        <Hidden smUp>
          <LoginButton />
          <NavLinks />
          <HeaderTitle />
          <HeaderParagraph />
          <div className={classes.itemSpaceBetween}>
            <DelegateButton onClick={handleDelegateButtonClick}/>
            <RedeemTicketsButton onClick={handleRedeemButtonClick} />
          </div>
        </Hidden>
      </header>
      <WonModal open={wonModalOpen} handleClose={closeWonModal} />
      <StakeModal open={stakeModalOpen} handleClose={closeStakeModal} />
    </Fragment>
  );
};

export default Header;
