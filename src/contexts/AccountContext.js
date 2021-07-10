import React, { createContext, useState } from "react";

const AccountContext = createContext();

export const AccountContextProvider = (props) => {
  const [tickets, setTickets] = useState(0);
  const [accountId, setAccountId] = useState("");
  const [staked, setStaked] = useState(false);
  const [connected, setConnected] = useState(false);


  const providerValue = {
    tickets,
    setTickets,
    accountId,
    setAccountId,
    staked,
    setStaked,
    connected,
    setConnected,
  };

  return (
    <AccountContext.Provider value={providerValue}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
