import React from "react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";


function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="main-nav">
        {/* first logo part */}
        <div className="logo">
          <img
            src="https://dcassetcdn.com/design_img/3197617/672063/672063_17876201_3197617_909f3826_image.jpg"
            class="img"
            width="250px"
            height="100px"
          />
        </div>
        {/* Second menu part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="headerNavBar">
            <li>
              <NavLink to="/product">Products</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="calculator">Calculator</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="ContactUs">Contact</NavLink>
            </li>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
          </ul>
        </div>
        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://annapurnafinance.in/" target="_blank">
                {" "}
                <FaFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://annapurnafinance.in/" target="_blank">
                {" "}
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://annapurnafinance.in/" target="_blank">
                <FaYoutube className="youtube" />
              </a>
            </li>
          </ul>
          {/* Hamburgr menu start */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      {/* hero section */}
      {/* <section className="hero-section">
        <h1>welcome to Annapurna Finance</h1>
      </section> */}
    </div>
  );
}

export default Navbar;
