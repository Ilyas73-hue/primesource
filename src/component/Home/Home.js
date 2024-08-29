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
      <div className="container">
        {/* Section 1 */}

        <div className="row" id="section1">
          <div className="col-12  col-lg-6" id="col1">
            <img
              className=""
              id="section1-img"
              src="https://primesourcellp.com/static/app/images/banner.svg?v=0.0"
              alt="https://primesourcellp.com/static/app/images/banner.svg?v=0.0"
            />
          </div>
          <div className="col-12  col-lg-6" id="col2">
            <div>
              <h6 id="section1-h6-1">Find your dream job now</h6>
              <p id="section1-sub-content-1">
                HR consulting expertise that helps your business thrive.
              </p>
            </div>
            <div>
              <h6 id="section1-h6-2">Your Career</h6>
              <p id="section1-sub-content-2">
                Our Commitment Discover Success with PrimeSource Consulting LLP.
              </p>
            </div>
            <div>
              <button id="section1-button">Get started</button>
            </div>
          </div>
        </div>

        {/* Section 2 */}

        <div id="section2"> 
        <div id="marquee">
          <div id="section2-row">
          {
    ser_api.map((data) => (
      <div id="section2-col">
      <div class="card" id="section2-card">
        <div id="section-card-img-div">
        <img src={data.img} class="card-img-top" id="section2-card-img" alt="..." />
        </div>
        <div class="card-body">
          <h5 class="card-title" id="section2-card-title">{data.name}</h5>
        </div>
      </div>
      </div> 
    ))
  }
   </div>
   <div id="section2-row">
          {
    ser_api.map((data) => (
      <div id="section2-col">
      <div class="card" id="section2-card">
        <div id="section-card-img-div">
        <img src={data.img} class="card-img-top" id="section2-card-img" alt="..." />
        </div>
        <div class="card-body">
          <h5 class="card-title" id="section2-card-title">{data.name}</h5>
        </div>
      </div>
      </div> 
    ))
  }
   </div>
          </div>
        </div>

        {/* Section 3 */}

        <div className="row" id="section3">
          <div className="col-12 col-lg-12 col-xl-6" id="section3-div-1">
            <div id="section3-div-2">
              <h6 id="section3-h6-1">About our Company</h6>
              <button id="hr_line" type="none"></button>
            </div>
            <div id="section3-div-3">
              <p id="section3-sub-content">
                Pan Indian operator providing solutions to your staffing
                requirements.
              </p>
            </div>
            <div id="section3-div-4">
              <p id="section3-sub-content1">
                Founded on principles of excellence and integrity, Primesource
                Consulting LLP has been a trusted partner for both employees and
                job seekers. Our deep industry knowledge and extensive network
                enable us to deliver exceptional placement services that drive
                success for our clients and candidates alike.
              </p>
            </div>

            <div id="section3-div-5">
              <div id="section3-div-6">
                <div  id="section3-div-7">
                  <div className="mt-2 mb-2" id="section3-inside-1">
                    <RiCheckboxCircleFill id="section3-checkbox-icon" />
                    <p id="section3-inside-1-content">Documentation</p>
                  </div>
                  <div className="mt-2 mb-2" id="section3-inside-2">
                    <RiCheckboxCircleFill id="section3-checkbox-icon" />
                    <p id="section3-inside-2-content">Assignement</p>
                  </div>
                  <div className="mt-2 mb-2" id="section3-inside-3">
                    <RiCheckboxCircleFill id="section3-checkbox-icon" />
                    <p id="section3-inside-3-content">Orientation</p>
                  </div>

                  <div className="mt-2 mb-2" id="section3-inside-4">
                    <RiCheckboxCircleFill id="section3-checkbox-icon" />
                    <p id="section3-inside-4-content">Welcome Package</p>
                  </div>
                  <div className="mt-2 mb-2" id="section3-inside-5">
                    <RiCheckboxCircleFill id="section3-checkbox-icon" />
                    <p id="section3-inside-5-content">Training Plan</p>
                  </div>
                  <div className="mt-2 mb-2" id="section3-inside-6">
                    <RiCheckboxCircleFill id="section3-checkbox-icon" />
                    <p id="section3-inside-6-content">IT setup</p>
                  </div>
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

