import React from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CardDesign.css";
const items = [
  <div key={1} className="card">
    
    {/* <img
      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61uxKvea0OL._SX425_.jpg"
      alt="image1"
    /> */}
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum temporibus eveniet ea numquam corporis itaque perferendis eos aspernatur totam. Reprehenderit aspernatur nobis eaque enim eveniet minima illum ipsum tempore!</h3>
  </div>,
  <div key={2} className="card">
    <h2>Card 2</h2>
    {/* <img
      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61uxKvea0OL._SX425_.jpg"
      alt="image1"
    /> */}
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum temporibus eveniet ea numquam corporis itaque perferendis eos aspernatur totam. Reprehenderit aspernatur nobis eaque enim eveniet minima illum ipsum tempore!</h3>
  </div>,
  <div key={3} className="card">
    <h2>Card 3</h2>
    {/* <img
      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61uxKvea0OL._SX425_.jpg"
      alt="image1"
    /> */}
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum temporibus eveniet ea numquam corporis itaque perferendis eos aspernatur totam. Reprehenderit aspernatur nobis eaque enim eveniet minima illum ipsum tempore!</h3>
  </div>,
  <div key={4} className="card">
    <h2>Card 4</h2>
    {/* <img
      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61uxKvea0OL._SX425_.jpg"
      alt="image1"
    /> */}
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum temporibus eveniet ea numquam corporis itaque perferendis eos aspernatur totam. Reprehenderit aspernatur nobis eaque enim eveniet minima illum ipsum tempore!</h3>
  </div>,
  <div key={5} className="card">
    <h2>Card 5</h2>
    {/* <img
      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61uxKvea0OL._SX425_.jpg"
      alt="image1"
    /> */}
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum temporibus eveniet ea numquam corporis itaque perferendis eos aspernatur totam. Reprehenderit aspernatur nobis eaque enim eveniet minima illum ipsum tempore!</h3>
  </div>,
  <div key={6} className="card">
    <h2>Card 6</h2>
    {/* <img
      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61uxKvea0OL._SX425_.jpg"
      alt="image1"
    /> */}
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum temporibus eveniet ea numquam corporis itaque perferendis eos aspernatur totam. Reprehenderit aspernatur nobis eaque enim eveniet minima illum ipsum tempore!</h3>
    
  </div>
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 }
};



function TestiMon() {
  
  return (
    <div className='devlop'>
      <h2 style={{color:'yellow', textAlign:"center"}}>Testimonial page</h2>
      <div>
      <h1 style={{color:'yellow', textAlign:"center"}}>How to say our honorable customer </h1>
    </div>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        autoPlayInterval={3000}
        autoPlayDirection="ltr"
        autoPlay={true}
        fadeOutAnimation={true}
        disableButtonsControls={true}
        items={items}
      />
      
    </div>
  )
}

export default TestiMon;
