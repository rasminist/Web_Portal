import React from "react";
import "./Blog.css";
import  Navbar from "../ShareComponent/Navbar";

function Blog() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/4467658/pexels-photo-4467658.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="doc-image"
              width="330"
              height="420"
            />
          </div>
          <div className="col-md-8">
            Document Upload(Digital KYC)
            <hr/>
            <div className="container-doc-upload">
              <form action="/action_page.php">
                <label for="files" >Photo:</label>
                <input type="file" id="files" name="files" multiple />
                <label for="files">Id Proof:</label>
                <input type="file" id="files" name="files" multiple />
                <label for="files">Address Proof:</label>
                <input type="file" id="files" name="files" multiple />
                <label for="files">Pancard:</label>
                <input type="file" id="files" name="files" multiple />
                <br/>
                <input type="submit" style={{backgroundColor:"orange", width:"20%",marginLeft:"180px",borderRadius
                :"30px"}}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
