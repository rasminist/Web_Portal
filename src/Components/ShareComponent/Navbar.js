import React from "react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Home_logo from "../Images/logo/Home_logo.jpg"

import Home_logo from "../../Images/logo/Home_logo.jpg"


function Navbar(props) {
  let navigate = useNavigate();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  console.log("hello world..");
  console.log(localStorage.getItem("userAccessToken"));
  const isUserLoggedIn = localStorage.getItem("userAccessToken") ? true : false;
  console.log(isUserLoggedIn);

  function handleLogoutClick(){
    localStorage.removeItem("userAccessToken");
    navigate("/intialHomePage");
  }

  function navBarHandleClick(e){
    navigate(`/${e.target.name}`);
  }
  function homePageClick(e){
    navigate("/");
  }
  return (
    <div>
      <nav className="main-nav">
        {/* first logo part */}
        <div className="logo">
          <img
           src={Home_logo}
            class="img"
            width="260px"
            height="75px"
            onClick={homePageClick}
          />
        </div>
        {/* Second menu part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="headerNavBar" onClick={navBarHandleClick}>
            <li>
              <NavLink name="product">Products</NavLink>
            </li>
            <li>
              <NavLink name="services">Services</NavLink>
            </li>
            <li>
              <NavLink name="calculator">Calculator</NavLink>
            </li>
            <li>
              <NavLink name="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink name="ContactUs">Contact</NavLink>
            </li>
            <li>
              {isUserLoggedIn ? (
                <NavLink onClick={handleLogoutClick}>LogOut</NavLink>
              ) : (
                <NavLink name="login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>
        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com/ampl.net.in/" target="_blank">
                {" "}
                <FaFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/afpl.in/?hl=en" target="_blank">
                {" "}
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@annapurnafinance863" target="_blank">
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
