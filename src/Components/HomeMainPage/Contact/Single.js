import React from 'react';
import "./Style.css";

function Single() {
  return (
    <div className="container container1">
       <div className="row">
          <div className="col-6 left">
            <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="Girl in a jacket" width="500" height="330"></img>

          </div>
          <div className="col-6 right">
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempora 
            deleniti amet iure culpa nemo pariatur reiciendis. Sequi, nulla numquam.
            <br/>
            <br/>
              <button>Read More</button>
          </div>

       </div>

    </div>
  )
}

export default Single;
