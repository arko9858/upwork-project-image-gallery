import React, { createContext, useState } from "react";

const ParticipateContext = createContext();

export const ParticipateContextProvider = (props) => {
  const [participateModalOpen, setParticipateModalOpen] = useState(false);

  const providerValue = {
    participateModalOpen,
    setParticipateModalOpen,
  };

  return (
    <ParticipateContext.Provider value={providerValue}>
      {props.children}
    </ParticipateContext.Provider>
  );
};

export default ParticipateContext;
