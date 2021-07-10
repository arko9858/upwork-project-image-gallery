import React, { Fragment, useContext, useState } from "react";
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
import ConnectWalletModal from "../../Modals/ConnectWalletModal/ConnectWalletModal";
import DelegateWarningModal from "../../Modals/DelegateWarningModal/DelegateWarningModal";
import LostModal from "../../Modals/LostModal/LostModal";
import ParticipateModal from "../../Modals/ParticipateModal/ParticipateModal";

import AccountContext from "../../../contexts/AccountContext";
import ParticipateContext from "../../../contexts/ParticipateContext";

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
  const { accountId, connected } = useContext(AccountContext);

  // for testing 2 modals
  const [toggle, setToggle] = useState(false);

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
  const { participateModalOpen, setParticipateModalOpen } =
    useContext(ParticipateContext);

  const closeParticipateModal = () => {
    setParticipateModalOpen(false);
  };

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

  // connect wallet modal states and actions
  const [connectWalletModalOpen, setConnectWalletModalOpen] = useState(false);

  const openConnectWalletModal = () => {
    setConnectWalletModalOpen(true);
  };
  const closeConnectWalletModal = () => {
    setConnectWalletModalOpen(false);
  };

  // #######################

  // delegate warning modal states and actions
  const [delegateWarningModalOpen, setDelegateWarningModalOpen] =
    useState(false);

  const openDelegateWarningModal = () => {
    setDelegateWarningModalOpen(true);
  };
  const closeDelegateWarningModal = () => {
    setDelegateWarningModalOpen(false);
  };

  // #######################

  // lost modal states and actions
  const [lostModalOpen, setLostModalOpen] = useState(false);

  const openLostModal = () => {
    setLostModalOpen(true);
  };
  const closeLostModal = () => {
    setLostModalOpen(false);
  };

  // #######################

  const handleRedeemButtonClick = () => {
    if (connected && accountId.length > 0) {
      if (toggle) {
        openWonModal();
        setToggle(!toggle);
      } else {
        openLostModal();
        setToggle(!toggle);
      }
    } else {
      openConnectWalletModal();
    }
  };

  const handleDelegateButtonClick = () => {
    if (connected && accountId.length > 0) {
      openStakeModal();
    } else {
      openDelegateWarningModal();
    }
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
            <DelegateButton onClick={handleDelegateButtonClick} />
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
            <DelegateButton onClick={handleDelegateButtonClick} />
            <RedeemTicketsButton onClick={handleRedeemButtonClick} />
          </div>
        </Hidden>
      </header>
      <WonModal open={wonModalOpen} handleClose={closeWonModal} />
      <StakeModal open={stakeModalOpen} handleClose={closeStakeModal} />
      <ConnectWalletModal
        open={connectWalletModalOpen}
        handleClose={closeConnectWalletModal}
      />
      <DelegateWarningModal
        open={delegateWarningModalOpen}
        handleClose={closeDelegateWarningModal}
      />
      <LostModal open={lostModalOpen} handleClose={closeLostModal} />
      <ParticipateModal
        open={participateModalOpen}
        handleClose={closeParticipateModal}
      />
    </Fragment>
  );
};

export default Header;
