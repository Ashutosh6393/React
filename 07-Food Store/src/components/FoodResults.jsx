import React from "react";
import styled from "styled-components";
import FoodItem from "./FoodItem";

const FoodResults = () => {
  return (
    <MainContainer>
      <ItemsContainer>
        <FoodItem />
        <FoodItem />
        <FoodItem />
    
      </ItemsContainer>
    </MainContainer>
  );
};

export default FoodResults;

const MainContainer = styled("div")`
  width: 100%;
  min-height: 75vh;
  max-height: auto;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.62),
      rgba(0, 0, 0, 0.62)
    ),
    url("/images/bg.png");
  background-size: cover;
  background-repeat: repeat-y;
`;

const ItemsContainer = styled("div")`
  width: 100%;
  margin: auto;
  padding: 3vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;