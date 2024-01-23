import react, { createContext, useState } from "react";
import React from "react";

export const context = createContext({
  userContacts: [],
  inputValue: "",
  addContactModalOpen: false,
  openModal: false,
  setInputValue: () => {},
  setUserContacts: () => {},
  setOpenModal: ()=>{},
  handleEdit: ()=>{},
  setAddContactModalOpen: ()=>{},
});

const AppContext = ({ children }) => {
  const [userContacts, setUserContacts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [addContactModalOpen, setAddContactModalOpen] = useState(false)

  const [openModal, setOpenModal] = useState(false);

  const handleEdit = ()=>{
    setOpenModal(true);

    console.log('hh');
  }

  const value = {
    addContactModalOpen,
    setAddContactModalOpen,
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
