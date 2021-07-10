import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import AccountContext from "../../../contexts/AccountContext";

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "#AA47F5",
    color: "#FFF",
    padding: "4px 16px",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: purple["500"],
    },
  },
}));

const LoginButton = () => {
  const classes = useStyles();
  const { setTickets, accountId, setAccountId, setConnected } =
    useContext(AccountContext);

  const testAccountId = "2U8SD89";

  const handleClick = () => {
    if (!accountId || accountId.length <= 0) {
      setAccountId(testAccountId);
      setTickets(3);
      setConnected(true);
    }
  };

  return (
    <Button onClick={handleClick} size="small" className={classes.button}>
      {accountId && accountId.length > 0
        ? "ACCOUNT_ID: " + accountId
        : "Connect Your Wallet"}
    </Button>
  );
};

export default LoginButton;
