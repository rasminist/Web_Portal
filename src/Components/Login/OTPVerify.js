import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { verifiyOTP } from "../../Service/userService";
import { generateOTP } from "../../Service/userService";
import "./index.css";
import Navbar from "../ShareComponent/Navbar";
function VerifyPage(props) {
  console.log(props.data);
  const userData = useSelector((state) => state.users);
  console.log(userData);
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    applicantMobileNumber: userData.applicantMobileNumber,
    otp: "",
    deviceId: userData.applicantMobileNumber,
    platform: "platform",
  });

  const [count, setCount] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log(count);
  function eventChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function eventClick() {
    console.log(formData);

    verifiyOTP(formData)
      .then((result) => {
        localStorage.setItem("userAccessToken", result.data.access_token);
        console.log("hiii5");
        navigate("/showTemplate");
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("message").innerHTML =
          "**Please enter valid OTP.";
        return false;
      });
  }

 
  const eventClickResend = () => {
    const number = { applicantMobileNumber: userData.applicantMobileNumber };
    generateOTP(number)
      .then((result) => {
        console.log(result);
        navigate("/optVerification");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

              <h3 style={{marginLeft:"220px"}}>Enter your OTP </h3>
              <input
                type="text"
                name="otp"
                onChange={eventChange}
                placeholder="Enter your OTP"
                required
                autoFocus="on"
                className="inputfield"
              />
              <br />
              {/* <span id="message" style={{color:"red", fontSize:"15px"}} ></span> */}
              <div>
                <span style={{ color: "red", fontSize: "15px",marginLeft:"220px" }}>
                  Don't receive the OTP
                </span>

                {count === 0 ? (
                  <div>
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-link"
                      style={{ color: "red",marginLeft:"220px" }}
                      onClick={eventClickResend}
                    >
                      Resend OTP
                    </button>
                  </div>
                ) : (
                  <div  style={{ color: "green",marginLeft:"290px" , fontSize: "20px"}}>{count}</div>
                )}
              </div>
              <br />
              {/* <button className="button-Design" onClick={eventClick}>Verify</button> */}
              <input
                type="button"
                value="Submit"
                onClick={eventClick}
                className="button_Style"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyPage;
