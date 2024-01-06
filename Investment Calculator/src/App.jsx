import { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    expectedReturn: 5,
    annualInvestment: 1000,
    duration: 10,
  });

  const isValidInput = userInput.duration>=1;

  const handleInputChange = (inputIdentifier, value) => {
    setUserInput((prevInputs) => {
      return {
        ...prevInputs,
        [inputIdentifier]: +value,   //this + operator will force the string conversion to number
      };
    });
  };

  return (
    <>
      <Input userInput={userInput} onChangeInput={handleInputChange} />
      {!isValidInput && <p>Please enter valid Input data</p>}
      {isValidInput && <Result inputs={userInput} />}
      
    </>
  );
}

export default App;
