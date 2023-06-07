import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { generateOTP } from "../../Service/userService";
import { addItem } from "../../Redux/reducer/userReducer";
import axios from "axios";
import ifone from "../../Images/logo/ifone.png";
import "./index.css";
function Verify(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [val, setVal] = useState({ applicantMobileNumber: "" });
  function eventChange(e) {
    console.log(e.target.value);
    setVal({ [e.target.name]: e.target.value });
  }
  function eventClick() {
    console.log(props);

    console.log("event clicked");

    var a = val.applicantMobileNumber;
    console.log("value of input ", val.applicantMobileNumber);
    console.log("enter input", a);

    if (a === "") {
      document.getElementById("message").innerHTML =
        "**please enter valid mobile number.";
      return false;
    }
    if (isNaN(a)) {
      document.getElementById("message").innerHTML =
        "** Enter only numeric value.";
      return false;
    }
    if (a.length < 10) {
      document.getElementById("message").innerHTML =
        "**Mobile number must be 10 digit.";
      return false;
    }
    if (a.length > 10) {
      document.getElementById("message").innerHTML =
        "**Mobile number must be 10 digit.";
      return false;
    }
    if (a.charAt(0) != 9 && a.charAt(0) != 8 && a.charAt(0) != 7) {
      document.getElementById("message").innerHTML =
        "**Mobile number must be start with 7,8,9.";
      return false;
    }

    generateOTP(val)
      .then((result) => {
        console.log(result);
        dispatch(addItem(val));
        navigate("/optVerification");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <div className="container OTPGeneration">
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
              <h2 style={{ color: "blue", fontSize: "33px" ,textAlign:"center"}}>
                OTP Generation
              </h2>
              <hr />
              <p>
                We will send <b>One Time Password</b> on this mobile number
              </p>

              <h3
                style={{ color: "blue", fontSize: "22px", fontWeight: "120px",textAlign:"center" }}
              >
                Mobile Number
              </h3>
              <img
                src={ifone}
                alt="indian_flag"
                width="50px"
                height="50px"
                style={{marginLeft:"250px"}}
              ></img>
              {/* <h2>+91</h2> */}
              <input
                placeholder="Enter your mobile Number"
                type="text"
                className="inputDesign"
                name="applicantMobileNumber"
                onChange={eventChange}
              />
              <div>
              <span
                id="message"
                style={{ color: "red", fontSize: "15px" ,marginLeft:"220px" }}
              ></span>
              </div>
              <br />
              <input
                type="button"
                value="Submit"
                onClick={eventClick}
                className="button-Design1"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Verify;
