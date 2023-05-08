import React from "react";
import "./VerifyPage.css";
import { useState } from "react";
import axios from "axios";

function VerifyPage() {
  const [resp, setResp] = useState({
    applicantMobileNumber: "7681095115",
    otp: "",
    deviceId: "7681095115",
    platform: "postman",
  });
  function eventChange(e) {
    console.log(e.target.value);
    resp.applicantMobileNumber = "7681095115";
    resp.otp = [e.target.name] = e.target.value;
    resp.deviceId = "7681095115";
    resp.platform = "platform";
    setResp({ [e.target.name]: e.target.value });
    setResp({ ...resp });
  }
  function eventClick() {
    console.log(resp);
    axios
      .post(
        "https://uat-afpl-phase2.annapurnamsme.net/journey/otp/validate-user-password",
        resp,
        
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h2>Intial verification_ page...2.</h2>
      <div>
        <div className="container">
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
              <h2>OTP Verification</h2>
              <p>Enter the OTP send to +8802547891</p>

              <h3>Mobile Number</h3>
              <input
                type="text"
                name="otp"
                onChange={eventChange}
                placeholder="Please enter your mobile Number"
                required
                autoFocus="on"
                className="inputDesign"
              />
              <br />

              {/* <button className="button-Design" onClick={eventClick}>Verify</button> */}
              <input
                type="button"
                value="Submit"
                onClick={eventClick}
                className="button-Design"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyPage;
