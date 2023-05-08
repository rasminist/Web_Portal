import React from "react";
import "./Kyc1.css";
function Kyc1() {
  return (
    <div>
      {/* <h2>hello world....</h2> */}
      <div className="container1">
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
            <div className="header-page">KYC Verification</div>
            <hr style={{border:"1px solid green" ,fontSize:"10px"}} />
            <div className="video-font-design">
            <img src="https://e7.pngegg.com/pngimages/894/494/png-clipart-black-male-symbol-art-avatar-education-professor-user-profile-faculty-boss-face-heroes-thumbnail.png" alt="client-image" width="220" height="220"/>
               </div>
               <div className="information-page">
                <p>You can schedule an appointment later or upload documents yourself..</p>
               </div>
               </div>
               <button className="butnDesign">Start Video KYC Process Now</button>
                  <p className="or">or</p>
               <div className="kycInputField">
                 <form action="/action_page.php">
                      <input type="file" id="myFile" name="filename"/>
                      <input type="submit"/>
                  </form>
                 </div>
          
                
       
        </div>
        
      </div>
    </div>
  );
}

export default Kyc1;
