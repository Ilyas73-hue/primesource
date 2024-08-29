import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../assets/prime source.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";


function Navbar() {

  // This is created for Link Active Show

  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl( window.location.pathname);
  }, [location]);

  console.log(url)



  return (
    <nav class="navbar navbar-expand-lg" id="navbar">
  <div class="container">
    <a class="navbar-brand" href="/"><img id="navbar-logo" src={logo} alt={logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  ms-auto  mb-2 mb-lg-0">
        <li class="nav-item" id="navbar-item">
          <a class="nav-link" id={url === "/" ?"navbar-link-active" : "navbar-link"}  href="/">Home</a>
        </li>
        <li class="nav-item" id="navbar-item">
          <a class="nav-link" id={url === "/about" ?"navbar-link-active" : "navbar-link"} href="/about">About Us</a>
        </li>
        <li class="nav-item" id="navbar-item">
          <a class="nav-link" id={url === "/service" ?"navbar-link-active" : "navbar-link"} href="/service">Services</a>
        </li>
        <li class="nav-item" id="navbar-item">
          <a class="nav-link" id={url === "/contact" ?"navbar-link-active" : "navbar-link"}href="/contact">Contact Us</a>
        </li>
      </ul>
    </div>
    <div class="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
      <div id="navbar-flex">
        <div id="navbar_email_content">
          <div id="navbar-email-icons-div">
          <MdEmail id="navbar_email_icon" />
          </div>
          <p id="navbar-email-text">recruit@primesourcellp.com</p>
        </div>
        <div id="navbar_phone_content">
        <div id="navbar-phone-icons-div">
          <FaPhoneFlip id="navbar_phone_icon" />
          </div>
          <p id="navbar-phone-text">81899 91250</p>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar;