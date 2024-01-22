import React from "react";

const Modal = ({ children }) => {
    const handleSaveContact = (event)=>{
        event.preventDefault();
    }

  return (
    <dialog
      className="rounded-lg absolute top-[50%] min-h-[200px] w-[80%] bg-white p-4 "
      open
    >
      <div className="flex flex-col h-[100%] justify-between gap-3">
        <form className="flex flex-col gap-2" onSubmit={handleSaveContact}>
          <input
            type="text"
            id="name"
            className="border-gray-600 border-2 rounded-lg p-1"
            placeholder="Enter Name.."
            // required
          />
          <input
            type="text"
            id="name"
            className="border-gray-600 border-2 rounded-lg p-1"
            placeholder="Email.."
            // required
          />
          <input
            type="number"
            id="number"
            className="border-gray-600 border-2 rounded-lg p-1"
            placeholder="Mobile Number.."
            // required
          />
          <button type="submit" className=" bg-gray-900 text-white p-2 rounded-md">Save</button>
        </form>
        <form method="dialog">
          <button className=" bg-gray-900 text-white p-2 rounded-md">
            Close
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
