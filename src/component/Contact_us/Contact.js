import React from 'react';
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div id="contact">
       <section id="contact-section-1">
         <div id="contact-section-1-1">
            <div className='container'>
            <div id="contact-section-1-2">
                <div id="contact-section-1-3">

                </div>
                <div id="contact-section-1-4">
                <p id="contact-p-1">Home/<i id="contact-i">Contact</i></p>
                    <h6 id="contact-h6">Contact</h6>
                    <p id="contact-p-2">Reliable & Cost Efficient Recruitment Agency Based On India</p>
                </div>
            </div>
            </div>
         </div>
       </section>

    {/* Section2 */}

       <section id="contact-section7">
         <div className="container">
               <h6 id="contact-section7-head"> Get In Touch </h6>
             <div id="contact-section7-1">
                  
                <div id="contact-section7-2">
                             
                   <div id="contact-section7-3">
                    {/* Location */}
                     <div id="contact-section7-4"> 
                         <div id="contact-section7-5">
                         <FaLocationDot id="contact-location-icon" />
                         </div>
                         <div id="contact-section7-6">
                            <h6 id="contact-section7-h6-1">Locations</h6>
                            <p id="contact-section7-p-1">Door No 14-552-20 V.A.Nagar, Kadayam Road, Pavoorchathiram, Tenkasi District - 627808.</p>
                         </div>
                     </div>
                     {/* Phone */}
                     <div id="contact-section7-7"> 
                         <div id="contact-section7-8">
                         <FaPhoneAlt id="contact-phone-icon" />
                         </div>
                         <div id="contact-section7-9">
                            <h6 id="contact-section7-h6-2">Make a call</h6>
                            <p id="contact-section7-p-2">+91 8189991250</p>
                         </div>
                     </div>
                     {/* Email */}
                     <div id="contact-section7-10"> 
                         <div id="contact-section7-11">
                         <MdEmail id="contact-email-icon" />
                         </div>
                         <div id="contact-section7-12">
                            <h6 id="contact-section7-h6-3">Send mail</h6>
                            <p id="contact-section7-p-3">recruit@primesourcellp.com</p>
                         </div>
                     </div>
                   </div>
                </div>
                <div id="contact-section7-3">
                <div id="contact-section7-13"> 
                  <form id="contact-section7-form">
                     <div id="contact-section7-form-two-input">
                        <input type="text" id="contact-section7-name-input" placeholder="Your Name" />
                        <input type="text" id="contact-section7-phone-input" placeholder="Phone Number" />
                     </div>
                     <input id="contact-section7-email-input" type="text" placeholder="Email" />
                     <textarea id="contact-section7-message-input" placeholder="Message"></textarea>
                     <button id="contact-section7-form-submit-button">Send Message</button>
                  </form>
                </div>
                </div>
             </div>
         </div>
        </section>
        
        {/* Section 3 */}
        <section id="contact-section3">
             <div id="contact-section3-1">
             <iframe id="contact-g-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.6562561455185!2d77.3767893747792!3d8.91151329114521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0427a947312531%3A0x37be84092961c8d5!2sPrimesource%20Consulting%20LLP!5e0!3m2!1sen!2sin!4v1726054376313!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             </div>
        </section>

    </div>
  )
}

export default Contact