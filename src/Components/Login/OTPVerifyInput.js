import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { verifiyOTP } from "../../Service/userService";
import { generateOTP } from "../../Service/userService";
import { useNavigate } from "react-router-dom";
import "./index.css";

const OTPInput = () => {
  let navigate = useNavigate();
  const userData = useSelector((state) => state.users);
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

  function handleSubmit(event) {
    event.preventDefault();
    verifiyOTP(formData)
      .then((result) => {
        localStorage.setItem("userAccessToken", result.data.access_token);
        navigate("/showTemplate");
      })
      .catch((err) => {
        console.log(err);
        // document.getElementById("message").innerHTML =
        //   "**Please enter valid OTP.";
        return false;
      });
  }

  const handleChange = (e, index) => {
    const value = e.target.value;
    setFormData((prevOTP) => ({
      ...prevOTP,
      ["otp"]:
        formData.otp.substring(0, index) +
        value +
        formData.otp.substring(index + 1),
    }));
  };

  function inputfocus(elmnt) {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
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
    <form onSubmit={handleSubmit}>
      <div className="otpContainer">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            tabIndex={index + 1}
            className="otpInput"
            value={formData.otp[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyUp={(e) => inputfocus(e)}
          />
        ))}
      </div>
      <div>
        <span style={{ color: "red", fontSize: "15px", marginLeft: "307px" }}>
          Don't receive the OTP
        </span>

        {count === 0 ? (
          <div>
            <button
              type="button"
              class="btn btn-outline-primary btn-link"
              style={{ color: "red", marginLeft: "220px" }}
              onClick={eventClickResend}
            >
              Resend OTP
            </button>
          </div>
        ) : (
          <div
            style={{ color: "green", marginLeft: "385px", fontSize: "20px" }}
          >
            {count}
          </div>
        )}
      </div>
      <button type="submit" className="button_Style1">
        Submit
      </button>
    </form>
  );
};

export default OTPInput;
