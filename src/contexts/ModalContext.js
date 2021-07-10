import React, { createContext,  useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = (props) => {
  const [participateModalOpen, setParticipateModalOpen] = useState(false);
  const [participateModalData, setParticipateModalData] = useState(null);

  const [delegateWarningModalOpen, setDelegateWarningModalOpen] =
    useState(false);

  const providerValue = {
    participateModalOpen,
    setParticipateModalOpen,
    delegateWarningModalOpen,
    setDelegateWarningModalOpen,
    participateModalData,
    setParticipateModalData,
  };

  return (
    <ModalContext.Provider value={providerValue}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
