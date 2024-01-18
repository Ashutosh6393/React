import Header from "./components/Header";
import FoodResults from "./components/FoodResults";
import { FoodContext } from "./context/AppContext";
import { useContext, useEffect, useState } from "react";
function App() {
  return (
    <>
      <Header />
      <FoodResults />
    </>
  );
}

export default App;
