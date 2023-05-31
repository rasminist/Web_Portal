import React from "react";
import "./LoanScn.css";
import { Container } from "react-bootstrap";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
  crossorigin="anonymous"
></link>;
function LoanScn() {
  return (
    <div>
      <div className="row ">
        <div className="col-md-4">
          <img
            src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/01/960x0_8.jpg"
            width="400px"
            height="500px"
          />
        </div>
        <div className="col-md-8">
          <div className="row-md">
            <h1>Loan Request</h1>
          </div>
          <div className="row">
            {/* <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                checked
              />
              <label class="btn btn-outline-primary" for="btnradio1">
                Personal Loan
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="btnradio2">
                Business Loan
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="btnradio3">
                Education Loan
              </label>
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio4"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="btnradio4">
                Car Loan
              </label>
            </div> */}
            {/* <div class="btn-group .fs-1">
              <a href="#" class="btn btn-primary active" aria-current="page">
                Personal Loan
              </a>
              <a href="#" class="btn btn-primary">
                Business Loan
              </a>
              <a href="#" class="btn btn-primary">
                Education Loan
              </a>
              <a href="#" class="btn btn-primary">
                Car Loan
              </a>
            </div>  */}
            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" class="btn btn-outline-primary">
                Personal Loan
              </button>
              <button type="button" class="btn btn-outline-primary">
                Business Loan
              </button>
              <button type="button" class="btn btn-outline-primary">
                Education Loan
              </button>
              <button type="button" class="btn btn-outline-primary">
                Car Loan
              </button>
            </div>
            <div className="col m-5 ">
              <h3>Pesonal Loan Amount</h3>
            </div>
            <label for="customRange3" class="form-label m-5">
              <h3>Personal Loan Amount:-</h3>
            </label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="100"
              step="1"
              id="customRange3"
            />
            <br />
            <br />
            <label for="customRange3" class="form-label m-5">
              <h3>Loan Tenure:-</h3>
            </label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="100"
              step="1"
              id="customRange3"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="button" class="btn btn-primary ">
              <h1>Next</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanScn;
