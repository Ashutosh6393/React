import { useState, createContext } from "react";

export const FoodContext = createContext({
  selectedCategory: "",
  searchedFood: "",
  foodData: [],
  setSearchedFood: () => {},
  setFoodData: () => {},
  setSelectedCategory: () => {},
});
const AppContext = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [foodData, setFoodData] = useState([]);
  const [searchedFood, setSearchedFood] = useState("");

  const appData = {
    searchedFood,
    setSearchedFood,
    selectedCategory,
    setSelectedCategory,
    foodData,
    setFoodData,
  };
  return (
    <FoodContext.Provider value={appData}>{children}</FoodContext.Provider>
  );
};

export default AppContext;
