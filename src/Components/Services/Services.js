import React from 'react';
import "./Services.css";

function Services() {
  return (
    <div>
    <h2>welcome to service page.........</h2>
    <div className="container">
       <div className="row">
       <div className="col-md-6">
       <img src="https://wallpaper.dog/large/20509106.jpg" alt="image-display" width="500" height="410"></img>
       </div>
        <div className="col-md-6">Vedio KYC Process
        <hr/>
        <ol >
          (1).<li>Start the Video KYC process.</li>
         (2). <li>You will be connected to an AFPL agent through a video call to Verify your PAN  and Aadhaar. </li>
         (3). <li>If an agent is not available at the moment,you can schedule a meeting for an available time or upload the documents yourself.</li>
        </ol>
        </div>
       </div>
    </div>
      
    </div>
  )
}

export default Services;
