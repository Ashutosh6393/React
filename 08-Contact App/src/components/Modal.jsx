import React, { useRef, useContext, forwardRef } from "react";
import { context } from "../context/AppContext";
const Modal = ({ onClose, data }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (data.id) {
      const fd = new FormData(event.target);
      const formdata = Object.fromEntries(fd.entries());
      console.log(formdata);
      console.log("we will modify Data here");
    } else {
      console.log("we will save new data here");
    }
    console.log("saved");
    onClose();
  };

  const name = useRef();
  const email = useRef();
  const number = useRef();

  if (data === null) {
    data = {
      name: "",
      email: "",
      mobileNumber: "",
    };
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-[#3030307a]">
      <div className=" rounded-lg   min-h-[200px] w-[80%] bg-white p-4 " open>
        <div className="flex flex-col h-[100%] justify-between gap-3">
          <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
            <input
              ref={name}
              type="text"
              id="name"
              className="border-gray-600 border-2 rounded-lg p-1"
              placeholder="Enter Name.."
              defaultValue={data.name}
              // required
            />
            <input
              ref={email}
              type="text"
              id="name"
              className="border-gray-600 border-2 rounded-lg p-1"
              placeholder="Email.."
              defaultValue={data.email}
              // required
            />
            <input
              ref={number}
              type="number"
              id="number"
              className="border-gray-600 border-2 rounded-lg p-1"
              placeholder="Mobile Number.."
              defaultValue={data.mobileNumber}
              minLength={10}
              maxLength={10}
              // required
            />
            <button
              type="submit"
              className=" bg-gray-900 text-white p-2 rounded-md"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className=" bg-gray-900 text-white p-2 rounded-md"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
