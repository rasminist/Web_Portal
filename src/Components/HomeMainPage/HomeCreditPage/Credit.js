import React from 'react'
import "./Credit.css";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
  crossorigin="anonymous"
></link>;
function Credit() {
  return (
  <div className="cotainer_credit">
      <div className="creditPage">
      <div className="row content">
        <div className="col-md-4">
        <img
          src="https://pbs.twimg.com/media/E1hUw3BUUAUUZcS.jpg"
          alt="Credit Logo"
          width="300"
          height="200"
         style={{marginLeft:"80px",marginTop:"20px"}}
        ></img>
        </div>
        <div className="col-md-7" style={{marginLeft:"90px"}}>
         <h1 style={{fontSize:"30px",marginTop:"20px" ,color:"orange" ,width:"50%"}}>Get Credit Score</h1>
        <hr style={{width:"30%"}}/>
         <p style={{marginLeft:"-30pxpx"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero repellendus facilis. Harum quidem ipsam a eveniet provident
          quod expedita dolore facilis nihil dignissimos rem doloribus delectus accusamus at impedit
           praesentium quos sunt, maiores quo magni, veniam ut mollitia molestias.</p>

         <div style={{textAlign:"center"}}>
          <button type="button" class="credit_button"><h1>Get My Credit Score</h1></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Credit;
