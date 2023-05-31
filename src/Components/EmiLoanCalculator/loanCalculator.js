import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../ShareComponent/Navbar";
function PersonInputData() {
  let navigate = useNavigate();
  
  return (
    <div>
    <Navbar/>
      <h2>Emi Loan Calculator</h2>
    </div>
  )
}

export default PersonInputData;
