import React, { createContext, useState } from "react";

const AccountContext = createContext();

export const AccountContextProvider = (props) => {
  const [tickets, setTickets] = useState(0);
  const [accountId, setAccountId] = useState("");
  const [staked, setStaked] = useState(false);
  const [connected, setConnected] = useState(false);
  const [availableBalance, setAvailableBalance] = useState(23);

  const providerValue = {
    tickets,
    setTickets,
    accountId,
    setAccountId,
    staked,
    setStaked,
    connected,
    setConnected,
    availableBalance,
    setAvailableBalance,
  };

  return (
    <AccountContext.Provider value={providerValue}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
