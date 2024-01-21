import React, { useEffect, useContext } from "react";
import { MdPersonAdd } from "react-icons/md";
import ContactCard from "./ContactCard";
import { collection, getDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { context } from "../context/AppContext";

const Contacts = () => {
  const {userContacts, setUserContacts} = useContext(context);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const getDocRef = collection(db, "contacts");
        const contactSnap = await getDocs(getDocRef);
        const contactLists = contactSnap.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        // console.log(contactLists);
        setUserContacts(contactLists);
      } catch (error) {
        // console.log(error);
      }
    };
    getContacts();
  }, []);
  return (
    <section className="w-full flex flex-col h-full pt-6 pb-6 gap-2">
      {
        userContacts.map(data=> <ContactCard key={data.id} data={data}/>)
      }

      {/* <section className="w-full h-full flex gap-3 justify-center items-center">
        <button className="border-2 p-3 rounded-full text-lg text-white hover:bg-[#4f4f4f]">
          <MdPersonAdd />
        </button>
        <h2 className="text-white text-xl font-bold">No Contacts Found</h2>
      </section>
       */}
    </section>
  );
};

export default Contacts;
