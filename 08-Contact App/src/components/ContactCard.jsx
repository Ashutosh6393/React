import React from "react";
import { IoIosContact } from "react-icons/io";
import { MdOutlineEdit, MdDelete } from "react-icons/md";

const ContactCard = ({ data }) => {
  return (
    <div className="flex bg-[#FFEAAE] justify-evenly rounded-lg items-center p-2 gap-2">
      <IoIosContact className="text-5xl text-yellow-800 w-[20%] flex-1" />
      <div className="text-sm w-[50%]">
        <p className="font-semibold">{data.name}</p>
        <p className="">{data.email}</p>
        <p className="">{data.mobileNumber}</p>
      </div>
      <MdOutlineEdit className="text-3xl text-gray-800 flex-1 w-[10%]" />
      <MdDelete className="text-3xl text-purple-800 flex-1 w-[10%]" />
    </div>
  );
};

export default ContactCard;
