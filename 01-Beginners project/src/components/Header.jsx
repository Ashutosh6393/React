import React from "react";
import "./Header.css";
const Header = () => {
  function getRandom(n) {
    return Math.floor(Math.random() * n);
  }

  const words = ["Fundamentals", "Core", "Essentials"];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {words[getRandom(3)]} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
};

export default Header;
