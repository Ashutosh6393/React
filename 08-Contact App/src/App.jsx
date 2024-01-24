import Header from "./components/Header";
import Search from "./components/Search";
import Contacts from "./components/Contacts";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({})
  const onOpen = (data) => {
    setModalData(data)
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative max-w-[400px] m-auto h-[100vh] border p-4 border-gray-700">
      <Header />
      <Search onOpen={onOpen} onClose={onClose} />
      <Contacts onOpen={onOpen}/>
      {isOpen && <Modal isOpen={isOpen} onClose={onClose} data={modalData} />
      }
    </div>
  );
}

export default App;
