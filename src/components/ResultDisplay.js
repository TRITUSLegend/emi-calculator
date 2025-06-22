import React from "react";

const ResultDisplay = ({ principal, interest, emi }) => {
  const total = principal + interest;
  return (
    <div className="results">
      <p>Principal amount: ₹ {principal.toLocaleString()}</p>
      <p>Interest amount: ₹ {interest.toLocaleString()}</p>
      <p>Total amount: ₹ {total.toLocaleString()}</p>
      <h2>Your Monthly EMI is ₹ {emi.toFixed(2)}</h2>
      <button className="apply-btn">Apply for Home Loan</button>
    </div>
  );
};

export default ResultDisplay;
