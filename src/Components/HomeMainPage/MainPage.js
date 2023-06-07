import React from "react";
import Home from "./HomePage/Home";
import LoanScn from "./LoanScreen/LoanScn";
import Contact from "./Contact/Single";
import Credit from "./HomeCreditPage/Credit";

import Custem from "./PovideLone/Custem";
// import TestiMon from "./Testimonial/TestiMon";
import Navbar from "../ShareComponent/Navbar";
import Footer from "../ShareComponent/Footer";
import OurServices from "./OurServices/OurSevices";
import CardBasedTesti from "./CardBaseInfo/CardBasedTesti";
import Stastic1 from "./StasticPage/Static1";
import Stastic2 from "./StasticPage/Static2";
// import Kyc1 from "../KycPage/Kyc1";

function MainPage() {
  return (
    <>
      <Navbar />
      <Home />
      <Credit />
      <CardBasedTesti />
      <Custem />
      <Contact />
      <Stastic1 />
      <OurServices />
      <Stastic2 />
      <Footer />
    </>
  );
}

export default MainPage;
