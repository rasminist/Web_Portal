import React, { useState, useEffect } from "react";
import "./CardBasedTesti.css";
function CardBasedTesti() {
  console.log(useState);
  return (
    <div card_Base_Container>
      <main className="mainTestimonial ">
        <div className="container loanCardContainer">
          <div className="service-container row">
            <div className="col-md-12">
              <h4 className="service-text h4">Our Services</h4>
            </div>
            <div className="col-md-12">
              <div className="heading-container">
                <h1 className="provide-content h1">
                  We Provide You With High Quality IT Solution Services
                </h1>
              </div>
            </div>
            <div className="service-card-card" style={{marginLeft:"50px"}}>
              <div className="">
                <div className="row">
                  <div className="col-md-3 col-lg-2 our-service-card">
                    <div className="our-service-main-card-content">
                      <div className="d-flex">
                        <div className="image-container">
                          <img src="save-money.svg" alt="" />
                          <div className="save-money"></div>
                        </div>
                        <div className="percentage-content">10.25%</div>
                      </div>
                      <div>
                        <h4 className="h2">Personal Loan</h4>
                        <p className="info">
                          Stay tuned into the world of finance & business.
                        </p>
                      </div>
                      <div>
                        <p>20 months installment</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-2 our-service-card">
                    <div className="our-service-main-card-content">
                      <div className="d-flex">
                        <div className="image-container">
                          <div className="business-lone"></div>
                          <img src="Group 1236.svg" alt="" />
                        </div>
                        <div className="percentage-content">11.75%</div>
                      </div>
                      <div>
                        <h4 className="h2">Business Loan</h4>
                        <p className="info">
                          Stay tuned into the world of finance & business.
                        </p>
                      </div>
                      <div>
                        <p>20 months installment</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-2 our-service-card">
                    <div className="our-service-main-card-content">
                      <div className="d-flex">
                        <div className="image-container">
                          <div className="education-lone"></div>
                          <img src="Group 1231.svg" alt="" />
                        </div>
                        <div className="percentage-content">12.50%</div>
                      </div>
                      <div>
                        <h4 className="h2">Education Loan</h4>
                        <p className="info">
                          Stay tuned into the world of finance & business.
                        </p>
                      </div>
                      <div>
                        <p>20 months installment</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-2 our-service-card">
                    <div className="our-service-main-card-content">
                      <div className="d-flex">
                        <div className="image-container">
                          <img src="Group 1231(1).svg" alt="" />
                          <div className="car-lone"></div>
                        </div>
                        <div className="percentage-content">9.40%</div>
                      </div>
                      <div>
                        <h4 className="h2">Car Loan</h4>
                        <p className="info">
                          Stay tuned into the world of finance & business.
                        </p>
                      </div>
                      <div>
                        <p>20 months installment</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-2 our-service-card">
                    <div className="our-service-main-card-content">
                      <div className="d-flex">
                        <div className="image-container">
                          <div className="business-lone"></div>
                          <img src="Group 1236.svg" alt="" />
                        </div>
                        <div className="percentage-content">11.75%</div>
                      </div>
                      <div>
                        <h4 className="h2">Business Loan</h4>
                        <p className="info">
                          Stay tuned into the world of finance & business.
                        </p>
                      </div>
                      <div>
                        <p>20 months installment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
        integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js"
        integrity="sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
    </div>
  );
}

export default CardBasedTesti;

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// function CardBasedTesti() {
//   return (
//     <Row xs={1} md={4} className="g-4 m-2">
//       {Array.from({ length: 8 }).map((_, idx) => (
//         <Col>
//           <Card>
//             <Card.Img variant="top" src={"save-money.svg"} />
//             <Card.Body>
//               <Card.Title>Personal Loan</Card.Title>
//               <Card.Text>
//               Stay tuned into the world of finance & business.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default CardBasedTesti;
