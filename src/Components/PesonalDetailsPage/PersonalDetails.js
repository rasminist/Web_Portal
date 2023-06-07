import React from 'react';
import "./PersonalDetails.css";
import Navbar from '../ShareComponent/Navbar';
import family_Image from "../../Images/logo/family_Image.avif";
function PersonalDetails() {
  return (
    <div>
    <Navbar/>
      <div className="container Personal_data_container">
        <div className="row">
            <div className="col-md-4">Image Section
            <img src={family_Image} alt="family_Image" width="400" height="500"></img>
            </div>
            <div className="col-md-8">Form data</div>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetails;
