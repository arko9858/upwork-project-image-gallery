import React, { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterContextProvider = (props) => {
  const [filterString, setFilterString] = useState("champagne");

  const providerValue = {
    filterString,
    setFilterString,
  };

  return (
    <FilterContext.Provider value={providerValue}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
