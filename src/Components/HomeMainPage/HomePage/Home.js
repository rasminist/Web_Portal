import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          src="https://pirimidtech.com/wp-content/uploads/2022/02/960x0.jpg"
          alt="Home page"
          width="100%"
          height="600"
        ></img>
      </div>
      <div
        style={{
          position: "absolute",
          top: 280,
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
          top: 390,
          left: 90,
          color: "white",
          fontSize: "20px",
        }}
      >
        We are hear to help you need financial support,then we are help you.
      </p>
      <button
        style={{
          position: "absolute",
          top: 520,
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
        }}
      >
        Apply Now
      </button>
    </div>
  
  );
}

export default Home;
