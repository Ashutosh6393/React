import React, { useEffect, useContext, useState, useRef } from "react";
import { MdPersonAdd } from "react-icons/md";
import ContactCard from "./ContactCard";
import { collection, getDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { context } from "../context/AppContext";

const Contacts = ({onOpen}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { userContacts, setUserContacts, inputValue } = useContext(context);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const getDocRef = collection(db, "contacts");
        // console.log(getDocRef);
        const contactSnap = await getDocs(getDocRef);
        // console.log(contactSnap.docs);
        const contactLists = contactSnap.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setUserContacts(contactLists);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  useEffect(() => {}, [userContacts]);

  let filteredData;
  if (userContacts && inputValue) {
    filteredData = userContacts.filter((item) =>
      item.name.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  }

  return (
    <>
      {isLoading && <p className="text-center w-full pt-10 text-lg text-white">Loading...</p>}
      {!isLoading && (
        <div className="relative">
          <section className="w-full flex flex-col h-full pt-6 pb-6 gap-2">
            {inputValue &&
              filteredData.map((item) => (
                <ContactCard key={item.id} data={item} onOpen={onOpen} />
              ))}
            {!inputValue &&
              userContacts.map((item) => (
                <ContactCard key={item.id} data={item} onOpen={onOpen}/>
              ))}

            {userContacts.length === 0 && (
              <section className="pt-10 w-full h-full flex gap-3 justify-center items-center">
                <button
                  onClick={()=>onOpen(null)}
                  className="border-2 p-3 rounded-full text-lg text-white hover:bg-[#4f4f4f]"
                >
                  <MdPersonAdd />
                </button>
                <h2 className="text-white text-xl font-bold">
                  No Contacts Found
                </h2>
              </section>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default Contacts;
