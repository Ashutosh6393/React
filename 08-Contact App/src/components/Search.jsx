import React, { useRef, useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { context } from "../context/AppContext";


const Search = () => {
  const {inputValue, setInputValue} = useContext(context)

  const getInputValue = useRef();

  const handleInput = ()=>{
    setInputValue(getInputValue.current.value)
  }

  return (
    <div className=" w-full mt-[20px] flex justify-between ">
      <div className="flex gap-2 p-1 justify-start items-center border-2 rounded-lg">
        <IoSearchOutline className="text-white text-xl" />

        <input
          ref={getInputValue}
          type="text"
          className="focus:outline-none bg-inherit text-lg text-white placeholder:text-white "
          placeholder="Search Contact"
          onChange={handleInput}
        />
      </div>

      <button className="bg-white rounded-full p-2 ">
        <IoMdAdd className="text-black text-2xl" />
      </button>
    </div>
  );
};

export default Search;
