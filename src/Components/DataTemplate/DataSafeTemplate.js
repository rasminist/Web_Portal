import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../ShareComponent/Navbar";
import "./index.css";
function DataSafe() {
  let navigate = useNavigate();
  function clickHandler() {
    navigate("/loanEmiCalculator");
  }
  return (
    <div>
      <h2>Template for data secure page..</h2>
         <Navbar/>
      <div className="container dataSafeTemplate">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg?w=900&t=st=1685424508~exp=1685425108~hmac=7239e2d81623d7c6865b4a507cb0cbdf03b8c040a31f6150000ba7531755cf26"
              alt="dat-secure-image"
              width="550"
              height="400"
            ></img>
          </div>
          <div className="col-md-6">
            <div className="row">
              <h1>Your Data is safe with us !!</h1>
              <hr />
              <p>
                When you are using our services,you have entrusted us with your
                data privecy.We as an organisation have kept your data
                safr,secure and ene-to-end encrypted (through SHA-128)
              </p>
              <p>
                We understand our responsibilities and will abide by the norms
                and responsible.
              </p>
            </div>
            <br/>
            <input
              type="button"
              value="Lets Go"
              className="button DesignButtonTemplate"
              style={{width:"20%",height:"25px",fontSize:"20px",color:"white",border:"3px solid red",paddingBottom:"40px"}}
              onClick={clickHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataSafe;
