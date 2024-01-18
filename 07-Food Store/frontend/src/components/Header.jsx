import React, { useRef, useState, useContext } from "react";
import { styled } from "styled-components";
import { FoodContext } from "../context/AppContext";
const Header = () => {
  const searchFood = useRef();
  const { selectedCategory, setSelectedCategory, setSearchedFood } =
    useContext(FoodContext);

  const handleSearchFood = () => {
    setSearchedFood(searchFood.current.value);
  };

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.textContent);
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <h1>FOODY ZONE</h1>
        <input
          ref={searchFood}
          type="text"
          placeholder="Search Food"
          onChange={handleSearchFood}
        />
      </HeaderContainer>
      <NavContainer>
        <Button
          onClick={handleSelectCategory}
          className={selectedCategory === "All" ? "active" : undefined}
        >
          All
        </Button>
        <Button
          onClick={handleSelectCategory}
          className={selectedCategory === "Breakfast" ? "active" : undefined}
        >
          Breakfast
        </Button>
        <Button
          onClick={handleSelectCategory}
          className={selectedCategory === "Lunch" ? "active" : undefined}
        >
          Lunch
        </Button>
        <Button
          onClick={handleSelectCategory}
          className={selectedCategory === "Dinner" ? "active" : undefined}
        >
          Dinner
        </Button>
      </NavContainer>
    </MainContainer>
  );
};

export default Header;

// styles

const MainContainer = styled("div")`
  width: 100%;
  height: 15rem;
  padding-top: clamp(2rem, 3vw + 0.1rem, 5rem);
  padding-inline: clamp(2rem, 5vw + 0.5rem, 7rem);
  padding-bottom: 2rem;

  input {
    background-color: inherit;
    font-size: clamp(1.2rem, 1vw + 0.2rem, 2.2rem);
    padding: 0.3rem;
    border: 1px solid gray;
    border-radius: 0.3rem;
    color: white;
  }
  input:focus {
    border: 1px solid #ff4343;
    outline: none;
  }

  h1 {
    font-size: clamp(2rem, 2.5vw + 0.6rem, 6rem);
  }
  .active {
    background-color: #c93434;
  }
`;

const HeaderContainer = styled("header")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

const NavContainer = styled("nav")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(10px, 1vw + 0.5rem, 1.4rem);
  margin-top: 1.8rem;
`;

const Button = styled("button")`
  padding: 0.5rem 1rem;
  background-color: #ff4343;
  color: white;
  border-radius: 0.5rem;
  font-size: clamp(0.3rem, 1vw + 0.5rem, 2rem);
  border: none;
`;
