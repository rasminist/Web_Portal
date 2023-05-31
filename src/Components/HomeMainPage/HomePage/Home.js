import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../../Images/logo/img1.jpg";
function Home() {
  let navigate = useNavigate();
  
  function eventClick() {
    var data = localStorage.getItem('userAccessToken');
    if(data){
       navigate("/loanEmiCalculator");
       
      }else{
      navigate("/login");

    }
  }
  return (
    // <div>
    //   <div style={{ position: "relative" }}>
    //     <img
    //       src="https://pirimidtech.com/wp-content/uploads/2022/02/960x0.jpg"
    //       alt="Home page"
    //       width="100%"
    //       height="600"
    //     ></img>

    //   </div>
    //   <div
    //     style={{
    //       position: "absolute",
    //       top: 280,
    //       left: 90,
    //       color: "yellow",
    //       fontSize: "45px",
    //     }}
    //   >
    //     The right Decision at the right time.
    //   </div>
    //   <p
    //     style={{
    //       position: "absolute",
    //       top: 390,
    //       left: 90,
    //       color: "white",
    //       fontSize: "20px",
    //     }}
    //   >
    //     We are hear to help you need financial support,then we are help you.
    //   </p>
    //   <button
    //     style={{
    //       position: "absolute",
    //       top: 520,
    //       left: 200,
    //       backgroundColor: "orange",
    //       border: "none",
    //       color: "white",
    //       padding: "15px",
    //       textAlign: "center",
    //       display: "inline-block",
    //       fontSize: "16px",
    //       margin: "4px 2px",
    //       cursor: "pointer",
    //       borderRadius:"15px",
    //     }}
    //     onClick={eventClick}
    //   >
    //     Apply Now
    //   </button>

    // </div>
    <div style={{ position: "relative" }}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
               src={img1}
              //src="https://images.unsplash.com/photo-1550353127-b0da3aeaa0ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              className="d-block w-100"
              alt="img-1"
              height="600px"
             // className="HomePageInfo"
            />
          </div>
          <div className="carousel-item"  >
            <img
              src="https://www.shutterstock.com/image-photo/businessman-using-mobile-online-banking-260nw-1326553091.jpg"
              className="d-block w-100"
              alt="img-2"
              height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.shutterstock.com/image-photo/businessman-using-mobile-online-banking-260nw-1326553091.jpg"
              className="d-block w-100"
              alt="img-3"
              height="600px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        <div
         style={{
           position: "absolute",
           top: 100,
           left: 90,
           color: "yellow",
         fontSize: "45px",
         }}
      >
         The right Decision at the right time.
       </div>
       <p
         style={{
           position: "absolute",
           top: 200,
           left: 90,
           color: "red",
           fontSize: "20px",
         }}
       >
         We are hear to help you need financial support,then we are help you.
       </p>
       <button
         style={{
           position: "absolute",
           top: 350,
           left: 200,
           backgroundColor: "orange",
           border: "none",
           color: "white",
           padding: "15px",
           textAlign: "center",
           display: "inline-block",
           fontSize: "16px",
           margin: "4px 2px",
           cursor: "pointer",
           borderRadius:"15px",
       }}
       onClick={eventClick}
     >
       Apply Now
     </button>
      </div>
    </div>
  );
}

export default Home;
