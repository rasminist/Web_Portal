import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
function Product(props) {
  let history = useNavigate();
  console.log(history);
  return (
    // <div>
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/87/90/25/1000_F_587902525_doJ0LlcXUwDh7w0RA9Pw5OUIDnJWlQoR.jpg"
            alt="doc_image"
            width="450"
            height="400"
          />
        </div>
        <div className="col-md-7">
          <div className="row">
            <h1> Reqiured Documents</h1>
            <hr style={{ border: "1px solid red" }} />
            <h3 style={{ color: "orange" }}>
              Please keep the following documents ready for your loan
              application.
            </h3>

            <div className="row">
              <h2
                style={{ border: "2px solid orange", backgroundColor: "aqua" }}
              >
                Identity Documents
              </h2>

              <li>
                <button className="button button1">Pan Card</button>
              </li>
              <li>
                <button className="button button1">Aadhar Card</button>
              </li>
              <li>
                <button className="button button1">Bank statement</button>
              </li>
              <li>
                <button className="button button1">Income tax document</button>
              </li>
              {/* <li><button className="button button1">Gst registration details</button></li> */}

              <button className="buttonNextDesign">Next</button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Product;
