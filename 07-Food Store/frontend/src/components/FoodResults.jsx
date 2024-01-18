import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import FoodItem from "./FoodItem";
import { FoodContext } from "../context/AppContext";

const FoodResults = () => {
  const { foodData, setFoodData, selectedCategory, searchedFood } =
    useContext(FoodContext);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    async function fetchFood() {
      setIsFetched(false);
      const response = await fetch("http://localhost:9000/");
      const data = await response.json();
      setFoodData(data);
      setIsFetched(true);
    }
    fetchFood();
  }, []);

  useEffect(() => {}, [selectedCategory]);

  let filteredData = foodData;
  if (selectedCategory !== "All") {
    filteredData = foodData.filter((item) => {
      return item.type === selectedCategory.toLocaleLowerCase();
    });
  }

  if (searchedFood !== "") {
    filteredData = filteredData.filter((item) => {
      return item.name
        .toLocaleLowerCase()
        .startsWith(searchedFood.toLocaleLowerCase());
    });
  }

  return (
    <MainContainer>
      <ItemsContainer>
        {isFetched &&
          filteredData.map((item, index) => {
            return <FoodItem data={item} key={index} />;
          })}
      </ItemsContainer>
    </MainContainer>
  );
};

export default FoodResults;

const MainContainer = styled("div")`
  width: 100%;
  min-height: calc(100vh - 15rem);
  max-height: auto;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.62),
      rgba(0, 0, 0, 0.62)
    ),
    url("/images/bg.png");
  background-size: cover;
`;

const ItemsContainer = styled("div")`
  width: 100%;
  margin: auto;
  padding: 3vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: clamp(1rem, 2vh + 0.3rem, 4rem);
`;
