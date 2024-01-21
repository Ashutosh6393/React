import React from "react";
import { BiSolidContact } from "react-icons/bi";

const Header = () => {
  return (
    <header className="w-full h-[60px] flex justify-center gap-4 p-5 items-center bg-white rounded-lg">
      <BiSolidContact className="text-2xl text-gray-800" />
      <h1 className="font-bold text-xl text-gray-800">Contacts App</h1>
    </header>
  );
};

export default Header;
