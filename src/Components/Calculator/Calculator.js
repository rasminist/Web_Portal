import React, { useState } from 'react';
import './Calculator.css';
import  Navbar from "../ShareComponent/Navbar";
function Calculator() {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);

  const calculateEmi = () => {
    const r = interestRate / (12 * 100); // Monthly interest rate
    const n = tenure * 12; // Total number of months
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emi.toFixed(2)); // Round off EMI to 2 decimal places
  };

  return (
    <div>
    <Navbar/>
      <div className="emi-calculator">
      <h1>EMI Calculator</h1>
      <div className="form-group">
        <label>Loan Amount:</label>
        <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Interest Rate:</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Tenure (in years):</label>
        <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />
      </div>
      <button className="btn-calculate" onClick={calculateEmi}>Calculate EMI</button>
      {emi > 0 && <div className="result">EMI: {emi}</div>}
    </div>
    </div>
  );
}

export default Calculator;
