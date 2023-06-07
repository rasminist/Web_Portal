import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { verifiyOTP } from "../../Service/userService";
import { generateOTP } from "../../Service/userService";
import OtpVerifyInput from "./OTPVerifyInput";
import "./index.css";
import Navbar from "../ShareComponent/Navbar";
function VerifyPage(props) {
  const userData = useSelector((state) => state.users);
  let navigate = useNavigate();

  

  return (
    <div>
      <Navbar/>
      <div>
        <div className="container OTPverify">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://as1.ftcdn.net/v2/jpg/05/37/67/12/1000_F_537671210_DZH2h6EEVsRjd6Htb9gPjaFSyTqLQ0pk.jpg"
                alt="verification image"
                width="500"
                height="370"
              />
            </div>
            <div className="col-md-6">
              <h2 style={{ color: "blue", fontSize: "33px",textAlign:"center" }}>
                OTP Verification
              </h2>
              <hr />
              <p>
                Enter the Code we just send on your mobile phone{" "}
                <span style={{ color: "green", fontSize: "18px" }}>
                  +91 {userData.applicantMobileNumber}
                </span>
              </p>

              <h3 style={{marginLeft:"175px"}}>Enter your OTP </h3>
              <OtpVerifyInput/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyPage;



