import react, { createContext, useState } from "react";
import React from "react";

export const context = createContext({
  userContacts: [],
  inputValue: "",
  openModal: false,
  setInputValue: () => {},
  setUserContacts: () => {},
  setOpenModal: ()=>{},
  handleEdit: ()=>{},
});

const AppContext = ({ children }) => {
  const [userContacts, setUserContacts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleEdit = ()=>{
    setOpenModal(true);

    console.log('hh');
  }

  const value = {
    handleEdit,
    userContacts,
    setUserContacts,
    inputValue,
    setInputValue,
    openModal,
    setOpenModal,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default AppContext;
