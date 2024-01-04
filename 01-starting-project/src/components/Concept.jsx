import React from "react";

const Concept = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default Concept;
