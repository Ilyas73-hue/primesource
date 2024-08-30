import React, { useState } from "react";
import "./Home.css";
import img1 from "../../assets/web_development.jpeg";
import img2 from "../../assets/DataBase.jpeg";
import img3 from "../../assets/sap.jpeg";
import img4 from "../../assets/hr.jpeg";
import img5 from "../../assets/About_img.jpeg";
import { RiCheckboxCircleFill } from "react-icons/ri";
import svg from "../../assets/web.svg";
import svg1 from "../../assets/database.png";
import svg2 from "../../assets/digital_marketing.png";
import svg3 from "../../assets/sap_png.png";
import svg4 from "../../assets/hr.png";
import svg5 from "../../assets/payroll.png";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  const [value, setValue] = useState();

  console.log(value);

  const ser_api = [
    {
      id: 1,
      name: "Web Development",
      img: `${img1}`,
    },
    {
      id: 2,
      name: "Data Migration",
      img: `${img2}`,
    },
    {
      id: 3,
      name: "Sap Consulting",
      img: `${img3}`,
    },
    {
      id: 4,
      name: "HR Consulting",
      img: `${img4}`,
    },
    {
      id: 5,
      name: "Global Sourcing",
      img: `${img5}`,
    },
    {
      id: 6,
      name: "Digital Marketing",
      img: `${img5}`,
    },
  ];

  // services Data

  const services = [
    {
      id: 1,
      name: "WEB DEVELOPMENT",
      Description:
        "Our Web development services cater to businesses looking to innovate and grow.",
      img: `${svg}`,
    },
    {
      id: 2,
      name: "DATA MIGRATION",
      Description:
        "Transition your business data with confidence using our expert Data Migration Services.",
      img: `${svg1}`,
    },
    {
      id: 3,
      name: "DIGITAL MARKETING",
      Description:
        "Our Digital marketing experts craft strategies that enhance your online presence and boost your brand visiblity.",
      img: `${svg2}`,
    },
    {
      id: 4,
      name: "SAP CONSULTING",
      Description:
        "SAP consulting service, we help businesses optimize their operation and achieve greater efficiency",
      img: `${svg3}`,
    },
    {
      id: 5,
      name: "HR CONSULTING",
      Description:
        "Our HR consulting service are designed to streamline your recruitment process",
      img: `${svg4}`,
    },
    {
      id: 6,
      name: "PAYROLL MANAGEMENT",
      Description:
        "Our system streamlines your business operations, smart solutions for enhancement.",
      img: `${svg5}`,
    },
  ];

  return (
    <div id="Home">
      <div>
        {/* Section 1 */}
          <section  id="home-section1">
            <div id="home-section2">
                <div id="home-section3">
                <img
              className="img-fluid"
              id="home-section1-img"
              src="https://primesourcellp.com/static/app/images/banner.svg?v=0.0"
              alt="https://primesourcellp.com/static/app/images/banner.svg?v=0.0"
            />
                </div>
                <div id="home-section4">
                <div>
              <h6 id="home-section1-h6-1">Find your dream job now</h6>
              <p id="home-section1-sub-content-1">
                HR consulting expertise that helps your business thrive.
              </p>
            </div>
            <div>
              <h6 id="home-section1-h6-2">Your Career</h6>
              <p id="home-section1-sub-content-2">
                Our Commitment Discover Success with PrimeSource Consulting LLP.
              </p>
            </div>
             <div>
              <button id="home-section1-button">Get started</button>
               </div>
                </div>
            </div>
            </div>

            <div className="col-12 col-xl-6">
              <img id="section3-slide-img" src={img5} alt={img5} />
            </div>

        </div>

        {/* Section 4 */}

        <div className="row" id="section4">
           <div id="section4-div-1">
             <h6 id="section4-h6-1">Our services</h6>
             <p id="section4-sub-content">Premier’s Service Talent Solutions: Connecting Excellence with opportunity</p>
           </div>  

            <div className="row" id="section4-row">

          
{
  services.map((data) => (
    <div  className="col-12 col-sm-6 col-md-6 col-lg-6" id="services-col">
    <div class="card" id="section4-card" onMouseOver={() => setValue(`${data.id}`)}  onMouseOut={() => setValue() }>
    <div id="section4-svg-icon">
        <img id="section4-card-icons" src={data.img} alt={data.img} />
    </div>
    <div class="card-body">
      <h5 class="card-title" id={value === `${data.id}` ? "section4-card-title-hover" : "section4-card-title" }>{data.name}</h5>
      <p  id={value === `${data.id}` ?  "section4-card-sub-content-hover" : "section4-card-sub-content" }>{data.Description.substring(0,60)}...</p>
      <button id={value === `${data.id}` ? "section4-card-button-hover" :"section4-card-button"}>Read More <i><FaArrowRight  /></i></button>
    </div>
  </div>
  </div>
  ))
}


            </div>
        </div>

        {/* Section 5 */}
      </div>
    </div>
  );
}

export default Home;

