import React from 'react';
import "./Footer.css";
import logo from "../../assets/prime source.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer">
        <div  id="footer1">
          <div className='container'>
           <div className='row gy-3'>
            <div className='col-md-3'>
                <div id="footer-div-1">
                <img id="footer_logo" src={logo} alt={logo} />
                <p id="footer-logo-text">Through our affirmative approach and practices</p>
                </div>
            </div>
            <div className='col-md-3'>
               <div id="footer-div-2">
                    <h5 id="footer-div-cont-h2">Contact Us</h5>
                    <p id="footer-contact-text">Door No 14-552-20 V.A.Nagar, Kadayam Road, Pavoorchathiram, Tenkasi Tk, Tenkasi District - 627808.</p>
                    <p id="footer-contact-text">recruit@primesourcellp.com</p>
                    <p id="footer-contact-text">81899 91250</p>
               </div> 
            </div>
            <div className='col-md-3'>
            <div id="footer-div-2">
            <h5 id="footer-div-cont-h2">Useful Links</h5>
             <ul id="footer_ul">
                <li id="footer_list"><a id="footer_ahref" href="/service">Our Services</a></li>
                <li id="footer_list"><a id="footer_ahref" href="/about">About Us</a></li>
                <li id="footer_list"><a id="footer_ahref" href="/contact_us">Contact Us</a></li>
             </ul>
            </div> 
            </div>
            <div className='col-md-3'>
            <div id="footer-div-3">
            <h5 id="footer-div-cont-h2">Social Media</h5>
             <ul id="footer_ul-1">
                <li id="footer_list-1">
                    <div id="footer_list_div_1">
                    <a id="footer-facebook-icon" href='/'>
                    <FaFacebookF id="footer-facebook-icon-1" />
                    </a>
                    </div>
                </li>
                <li id="footer_list-2">
                    <div id="footer_list_div_2">
                    <a id="footer-twitter-icon" href='/'>
                    <FaTwitter id="footer-twitter-icon-1" />
                    </a>
                    </div>
                </li>
                <li id="footer_list-3">
                <div id="footer_list_div_3">
                    <a id="footer-instagram-icon" href='/'>
                    <FaInstagram id="footer-instagram-icon-1" />
                    </a>
                    </div>
                </li>
                <li id="footer_list-4">
                <div id="footer_list_div_4">
                    <a id="footer-linkedin-icon" href='/'>
                    <FaLinkedin id="footer-linkedin-icon-1" />
                    </a>
                    </div>
                </li>
             </ul>
            </div>    
            </div>
           </div>
          </div>
          
        
          
        </div>
    </div>
  )
}

export default Footer