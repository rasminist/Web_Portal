import React from "react";
import "./Custem.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Custem() {
  return (
    <div className="container personalLoan_sliderPage">
      <div>
        <h1 style={{ color: "yellow", textAlign: "center", fontSize: "30px" ,marginTop:"25px"}}>
          We Provide Loan For Every Need
        </h1>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={5}
        visibleSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div style={{ height: 300, margin: 2, background: "white" }}>
              <div className="row">
                <div className="row image">
                  <img
                    src="https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA="
                    alt="image-1"
                    width="220px"
                    height="150px"
                  />
                </div>
                <div className="row text">
                  loan for Salaried people @1.02%p.m
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div style={{ height: 300, margin: 2, background: "white" }}>
              <div className="row">
                <div className="row image">
                  <img
                    src="https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA="
                    alt="image-2"
                    width="220px"
                    height="150px"
                  />
                </div>
                <div className="row text">
                  loan for Salaried people @1.02%p.m
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div style={{ height: 300, margin: 2, background: "white" }}>
              <div className="row">
                <div className="row image">
                  <img
                    src="https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA="
                    alt="image-3"
                    width="220px"
                    height="150px"
                  />
                </div>
                <div className="row text">
                  loan for Salaried people @1.02%p.m
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={3}>
            <div style={{ height: 300, margin: 2, background: "white" }}>
              <div className="row">
                <div className="row image">
                  <img
                    src="https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA="
                    alt="image-4"
                    width="220px"
                    height="150px"
                  />
                </div>
                <div className="row text">
                  loan for Salaried people @1.02%p.m
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={4}>
            <div style={{ height: 300, margin: 2, background: "white" }}>
              <div className="row">
                <div className="row image">
                  <img
                    src="https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA="
                    alt="image-5"
                    width="220px"
                    height="150px"
                  />
                </div>
                <div className="row text">
                  loan for Salaried people @1.02%p.m
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
        <br />
        <ButtonBack className="button button1">Back</ButtonBack>
        <ButtonNext className="button button1">Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Custem;
