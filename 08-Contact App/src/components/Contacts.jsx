import React, { useEffect, useContext, useState , useRef} from "react";
import { MdPersonAdd } from "react-icons/md";
import ContactCard from "./ContactCard";
import { collection, getDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { context } from "../context/AppContext";
import Modal from "./Modal";

const Contacts = () => {
  const dialog = useRef();
  const [noContacts, setNoContacts] = useState(true);
  const { userContacts, setUserContacts, openModal, setOpenModal, inputValue } =
    useContext(context);

  const handleAddContact = () => {
    // setOpenModal(true);
    dialog.current.showModal();
  };

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
        setUserContacts(contactLists);
        setNoContacts(false);
      } catch (error) {}
    };
    getContacts();
  }, []);



  useEffect(()=>{},[userContacts])
  let filteredData;
  if (userContacts && inputValue) {
    filteredData = (userContacts.filter(item=> item.name.toLowerCase().startsWith(inputValue.toLowerCase())))
  }


  return (
    <div className="relative">
      {<Modal ref={dialog} />}

      <section className="w-full flex flex-col h-full pt-6 pb-6 gap-2">
        {inputValue && filteredData.map(item=> <ContactCard key={item.id} data={item}/>)}
        {!inputValue && userContacts.map(item=> <ContactCard key={item.id} data={item}/>)}

        {noContacts && (
          <section className="pt-10 w-full h-full flex gap-3 justify-center items-center">
            <button
              onClick={handleAddContact}
              className="border-2 p-3 rounded-full text-lg text-white hover:bg-[#4f4f4f]"
            >
              <MdPersonAdd />
            </button>
            <h2 className="text-white text-xl font-bold">No Contacts Found</h2>
          </section>
        )}
      </section>
    </div>
  );
};

export default Contacts;
