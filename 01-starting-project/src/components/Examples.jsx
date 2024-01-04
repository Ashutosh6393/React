import React, { useState } from "react";
import MenuButton from "./MenuButton";
import "./Examples.css";
import { EXAMPLES } from "../data";

const Examples = () => {
  let [selectedContent, setSelectedContent] = useState(null);
  let content = "Click button to show content";
  if (selectedContent) {
    content = (
      <div id="tab-content">
        <h2>{EXAMPLES[selectedContent].title}</h2>
        {EXAMPLES[selectedContent].description}
        <pre>
          <code>{EXAMPLES[selectedContent].code}</code>
        </pre>
      </div>
    );
  }
  function clickHandler(content) {
    setSelectedContent(content);
  }

  return (
    <>
      <div id="examples">
        <h2>Examples</h2>
        <menu>
          <MenuButton isSelected = {selectedContent === "components"} onSelect={() => clickHandler("components")}>
            Concepts
          </MenuButton>
          <MenuButton isSelected = {selectedContent === "jsx"} onSelect={() => clickHandler("jsx")}>JSX</MenuButton>
          <MenuButton isSelected = {selectedContent === "props"} onSelect={() => clickHandler("props")}>Props</MenuButton>
          <MenuButton isSelected = {selectedContent === "state"} onSelect={() => clickHandler("state")}>State</MenuButton>
        </menu>
        {!selectedContent && content}
        {selectedContent && content}
      </div>
    </>
  );
};

export default Examples;
