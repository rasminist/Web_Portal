import React from "react";

function Footer() {
  return (
    < >
      <footer className="footer" style={{backGroundcolor:"blue"}}>
       
          <div className="col-md-3">
          <img src="https://images.squarespace-cdn.com/content/v1/5af33aa67c9327a07efef2da/1575817042613-AJTHS5TEWXNDMAIEZ7AH/annapurna.png" alt="image of annapurna" width="250" height="250"/>

          </div>
          <div className="col-md-5">
          <div style={{color:"blue",fontSize:"17px"}}>
          What should need do to get personal loan easy. 15 days ago Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Eveniet natus voluptas
          veniam esse nostrum a placeat tempore voluptate illum doloremque. 
          <div>
            <br/>
            
          What should need do to get personal loan easy. 15 days ago Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Eveniet natus voluptas
          veniam esse nostrum a placeat tempore voluptate illum doloremque.
          </div>
        </div>
          </div>
          <div className="col-md-4">
          <div style={{textAlign:"center" ,fontSize:"14px",color:"blue"}}>
          Subscribe our newsletter

          <br/>
          <br/>
          <form>
            <input type="email" id="email" name="email" placeholder="Email address"/>

            <br/>
            <br/>
            <input type="number" placeholder="Phone no" />
            <br/>
            <br/>
            <input type="submit" value="Subscribe Now"/>
          </form>
        </div>
          </div>
        
      </footer>
      <div className="copy_right-text">
        <p><h3 style={{textAlign:"center",borderRadius:"50px",backgroundColor:"orange"}}>Copyright © 2023 · Annapurna Finance (P) Ltd · All rights reserved</h3></p>
        </div>
    </>
  );
}

export default Footer;
