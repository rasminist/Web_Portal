import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../ShareComponent/Navbar";

import "./index.css";
import Slider from "@mui/material/Slider";
import { useState } from "react";

import family_Image from "../../Images/logo/family_Image.avif";

function PersonInputData() {
  let navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(25000);
  const [loanIntrest, setLoanInterst] = useState(15);
  const [loanTenure, setLoanTenure] = useState(12);

  const [values, setValue] = useState();

  function handleLoanAmountChange(e, newValue) {
    console.log(newValue);
    setLoanAmount(newValue);
  }
  function handleLoanIntrest(e, Val) {
    setLoanInterst(Val);
  }
  function handleLoanTenure(e, Value) {
    setLoanTenure(Value);
  }

  const handleSliderChange = (event, newValue) => {
    const { value } = event.target;
    console.log(value, "console.log");
    console.log(newValue);
    setValue(value);
    console.log(values);
  };
  function loanApplyHandler(){
    navigate("/personalDetailPage");
  }
  return (
    <div>
      <Navbar />
      <div className="container dash_board">
        <div className="row">
          <div className="col-md-4">
            <img
              src={family_Image}
              alt="Family_photo"
              width="400"
              height="500"
            />
          </div>
          <div className="col-md-8">
            <div className="row loan_Type_dash_Board">
              <div className="col-md">Personal Loan</div>
              <div className="col-md">Business Loan</div>
              <div className="col-md">Educational Loan</div>
              <div className="col-md">Car Loan</div>
              <hr />
            </div>
            <div className="container">
              <div className="row calculor_dislay_content">
                <h2>
                  Loan Amount:-
                  <span id="inputAmount">Rs. {loanAmount}</span>
                </h2>
                <br />
                <Slider
                  sx={{
                    width: 650,
                    color: "blue",

                    "& .MuiSlider-thumb": {
                      borderRadius: "7px",
                    },
                  }}
                  valueLabelDisplay="auto"
                  step={5000}
                  marks
                  min={25000}
                  max={1000000}
                  onChange={handleLoanAmountChange}
                />
                <h2>
                  Loan Interest:- <span id="inputAmount">{loanIntrest}%</span>
                  <div>
                    <br />
                    <Slider
                      defaultValue={500000}
                      sx={{
                        width: 650,
                        color: "blue",

                        "& .MuiSlider-thumb": {
                          borderRadius: "7px",
                        },
                      }}
                      valueLabelDisplay="auto"
                      step={0.1}
                      marks
                      min={12}
                      max={18}
                      onChange={handleLoanIntrest}
                    />
                  </div>
                </h2>
                <h2>
                  Loan Tenure:-{" "}
                  <span id="inputAmount">{loanTenure} months</span>
                  <div>
                    <br />
                    <Slider
                      defaultValue={10000}
                      sx={{
                        width: 650,
                        color: "blue",

                        "& .MuiSlider-thumb": {
                          borderRadius: "7px",
                        },
                      }}
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={12}
                      max={48}
                      onChange={handleLoanTenure}
                    />
                  </div>
                </h2>
                <button id="myButton" onClick={loanApplyHandler}>Loan Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonInputData;
