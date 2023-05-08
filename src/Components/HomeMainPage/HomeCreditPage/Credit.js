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
    <div className="creditPage">
      <div className="row">
        <div className="col-md-4">
        <img
          src="https://images.money9.com/wp-content/uploads/2021/01/Credit-score-1.jpg"
          alt="Credit Logo"
          width="220"
          height="200"
        ></img>
        </div>
        <div className="col-md-8">
         <h1 style={{fontSize:"30px"}}>Get Credit Score</h1>
         <hr/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero repellendus facilis. Harum quidem ipsam a eveniet provident quod expedita dolore facilis nihil dignissimos rem doloribus delectus accusamus at impedit praesentium quos sunt, maiores quo magni, veniam ut mollitia molestias.</p>

         <div style={{textAlign:"center"}}>
          <button type="button" class="btn btn-primary "><h1>Get My Credit Score</h1></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credit;
