import React from "react";
import "./LoneRe.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";

function LoneHome() {
  return (
    // <Container>
    //   <Row>
    //     <Col className="bg-primary p-2" md={4}>
    //       <img
    //         src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/01/960x0_8.jpg"
    //         width="500px"
    //         height="600px"
    //       />
    //     </Col>
    //     <Col className="bg-success p-2" md={8}>
    //       <div className="col">
    //         <h> Loan Request</h>
    //       </div>
    //       <Container className=".text-primary" >
    //         <Row>
    //           <Col className=".text-white">Personal Loan</Col>
    //           <Col className=".text-white">Business Loan</Col>
    //           <Col className=".text-white">Education Loan</Col>
    //           <Col className=".text-white">Car Loan</Col>
    //         </Row>
    //       </Container>
    //     </Col>
    //   </Row>
    // </Container>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://img.freepik.com/free-photo/portrait-happy-young-family-with-children-lying-floor-isolated_186202-6414.jpg"
            alt="family-photo"
            width="350"
            height="400"
          />
        </div>
        <div className="col-md-8">
          <div className="row">
            <h2>Loan Request</h2>
            <hr />
            <div className="col">
              <button className="button button1 ">Personal Loan</button>
              <button className="button button1">Business Loan</button>
              <button className="button button1">Education Loan</button>
              <button className="button button1">Car Loan</button>
            </div>
          </div>
          <div>
            <label for="Personal Loan">Personal Loan Amount :</label>
            <input
              type="range"
              id="volume"
              name="Amount"
              min="0"
              max="100000"
              className="inputField"
            />
          </div>
          <div>
            <label for="Loan">Loan Tenure :</label>
            <input
              type="range"
              id="volume"
              name="Amount"
              min="0"
              max="10"
              className="inputField"
            />
            <div>Loan EMI</div>
            <br />
          </div>
          <button class="button button2">Next</button>
        </div>
      </div>
    </div>
  );
}

export default LoneHome;
