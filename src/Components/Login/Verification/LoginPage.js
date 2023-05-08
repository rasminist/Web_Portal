import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Verify(props) {
  let navigate = useNavigate();
  const [val, setVal] = useState({ applicantMobileNumber: "" });
  function eventChange(e) {
    console.log(e.target.value);
    setVal({ [e.target.name]: e.target.value });
  }
  function eventClick() {
    console.log(props);
    
    console.log("event clicked")
    axios
      .post(
        "https://uat-afpl-phase2.annapurnamsme.net/journey/otp/generate-user-password",
        val
      )
      .then((res) => {
        console.log(res);
        navigate('/optVerification');       
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h2>Intial verification_ page...1.</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://as2.ftcdn.net/v2/jpg/03/74/74/49/1000_F_374744915_o5v9iu1Qrd5LPWktFVx6OzEQRUYyLow0.jpg"
              alt="verification image"
              width="500"
              height="370"
            />
          </div>
          <div className="col-md-6">
          <form>
            <h2>OTP Verification</h2>
            <p>
              We will send <b>One Time Password</b> on this mobile number
            </p>

            <h3>Mobile Number</h3>
            <input
              placeholder="Enter your mobile Number.............."
              type="text"
              className="inputDesign"
              name="applicantMobileNumber"
              onChange={eventChange}
            />
            <br />

            <h4>
              Don't receive the OTP <b>
              Resend OTP
              </b>
            </h4>
            <br />
            <input type="button" value="Submit" onClick={eventClick} className="button-Design"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Verify;
