import react, { createContext, useState } from "react";
import React from "react";

export const context = createContext({
  userContacts: [],
  inputValue: "",
  setInputValue: () => {},
  setUserContacts: () => {},
});

const AppContext = ({ children }) => {
  const [userContacts, setUserContacts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const value = {
    userContacts,
    setUserContacts,
    inputValue,
    setInputValue,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default AppContext;
