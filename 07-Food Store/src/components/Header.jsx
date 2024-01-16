import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <HeaderContainer>
        <h1>FOODY ZONE</h1>
        <input type="text" placeholder="Search Food" />
      </HeaderContainer>
      <NavContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </NavContainer>
    </MainContainer>
  );
};

export default Header;


// styles 


const MainContainer = styled("div")`
  width: 100%;
  height: 25vh;
  padding-top: 4rem;
  padding-inline: 6rem;
  padding-bottom: 2rem;

  input {
    background-color: inherit;
    font-size: 1.3rem;
    padding: 0.3rem;
    border: 1px solid gray;
    border-radius: 0.3rem;
    color: white;
  }
  input:focus {
    outline: none;
  }

  h1 {
    font-size: 3rem;
  }
`;

const HeaderContainer = styled("header")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen (max-width: 800px) {
    
  }

`;

const NavContainer = styled("nav")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.8rem;
`;

const Button = styled("button")`
  padding: 0.5rem 1rem;
  background-color: #ff4343;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  border: none;
`;
