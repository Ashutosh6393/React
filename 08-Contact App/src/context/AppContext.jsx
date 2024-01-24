import react, { createContext, useState } from "react";
import React from "react";

export const context = createContext({
  userContacts: [],
  inputValue: "",
  setInputValue: () => {},
  setUserContacts: () => {},
  handleEdit: () => {},
});

const AppContext = ({ children }) => {
  const [userContacts, setUserContacts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleEdit = () => {
  };

  const value = {
    handleEdit,
    userContacts,
    setUserContacts,
    inputValue,
    setInputValue,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default AppContext;
