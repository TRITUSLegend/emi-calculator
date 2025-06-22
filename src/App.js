import React, { useState } from "react";
import "./App.css";
import SliderInput from "./components/SliderInput";
import ResultDisplay from "./components/ResultDisplay";
import PieChart from "./components/PieChart";

function App() {
  const [loan, setLoan] = useState(160468285);
  const [rate, setRate] = useState(7);
  const [tenure, setTenure] = useState(13);

  const n = tenure * 12;
  const r = rate / 12 / 100;
  const emi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const interest = totalPayment - loan;

  return (
    <div className="App">
      <h2>Select the loan amount range</h2>

      <SliderInput
        label="Loan Amount"
        min={0}
        max={300000000}
        value={loan}
        onChange={(e) => setLoan(Number(e.target.value))}
      />

      <SliderInput
        label="Illustrative Interest Rate p.a."
        min={1}
        max={20}
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        step={0.1}
      />

      <SliderInput
        label="Tenure (Years)"
        min={1}
        max={30}
        value={tenure}
        onChange={(e) => setTenure(Number(e.target.value))}
      />

      <div className="flex-container">
        <ResultDisplay principal={loan} interest={interest} emi={emi} />
        <PieChart principal={loan} interest={interest} />
      </div>
    </div>
  );
}

export default App;
