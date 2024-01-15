import React from "react";
import "./Main.css";
import Concept from "./Concept";
import { CORE_CONCEPTS } from "../data";

const Main = () => {
  return (
    <main>
      <h2>Core Concepts</h2>
      <div id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((item) => (
            <Concept key = {item.title}{...item} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
