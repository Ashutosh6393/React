import React from "react";
import { formatter } from "../util/investment";

const YearWiseData = ({ data, initialInvestment }) => {
  const totalInterest =
    data.valueEndOfYear - data.annualInvestment - data.year - initialInvestment;
    const totalAmmountInvested = data.valueEndOfYear - totalInterest;
  return (
    <tr>
      <td>{data.year}</td>
      <td>{formatter.format(data.valueEndOfYear)}</td>
      <td>{formatter.format(data.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmmountInvested)}</td>
    </tr>
  );
};

export default YearWiseData;
