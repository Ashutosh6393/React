import React from "react";
import YearWiseData from "./YearWiseData";
import { calculateInvestmentResults } from "../util/investment";
const Result = ({ inputs }) => {
  const resultData = calculateInvestmentResults(inputs);
  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <td>Year</td>
            <td>Total Investment</td>
            <td>Profit (Year)</td>
            <td>Total Intrest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {resultData.map((item, itemIndex) => {
            const initialInvestment =
              resultData[0].valueEndOfYear -
              resultData[0].interest -
              resultData[0].annualInvestment;
            return <YearWiseData key={itemIndex} initialInvestment={initialInvestment} data={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
