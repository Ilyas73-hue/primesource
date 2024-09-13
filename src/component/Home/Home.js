import React, { useState } from "react";
import "./Home.css";
import home_img from "../../assets/home_img.png";
import img1 from "../../assets/web_development.jpeg";
import img2 from "../../assets/DataBase.jpeg";
import img3 from "../../assets/sap.jpeg";
import img4 from "../../assets/hr.jpeg";
import img5 from "../../assets/About_img.jpeg";
import img8 from "../../assets/global.png";
import img9 from "../../assets/Digital.png";
import { RiCheckboxCircleFill } from "react-icons/ri";
import svg from "../../assets/web.svg";
import svg1 from "../../assets/database.png";
import svg2 from "../../assets/digital_marketing.png";
import svg3 from "../../assets/sap_png.png";
import svg4 from "../../assets/hr.png";
import svg5 from "../../assets/payroll.png";
import { FaArrowRight } from "react-icons/fa";
import img7 from "../../assets/home_section5_slide.png";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import logo1 from "../../assets/client_logo_1.png";
import logo2 from "../../assets/client_logo_2.png";
import logo3 from "../../assets/client_logo_3.png";
import logo4 from "../../assets/client_logo_4.png";
import logo5 from "../../assets/client_logo_5.png";
import logo6 from "../../assets/client_logo_6.png";
import logo7 from "../../assets/client_logo_7.png";
import logo8 from "../../assets/client_logo_8.png";
import logo9 from "../../assets/client_logo_9.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



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
      img: `${img8}`,
    },
    {
      id: 6,
      name: "Digital Marketing",
      img: `${img9}`,
    },
  ];

  // services Data

  const services = [
    {
      id: 1,
      name: "WEB DEVELOPMENT",
      Description:
        "Our Web development services cater to businesses looking to innovate and grow. From concept to deployment",
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
        "Our HR consulting services are designed to streamlime your recruitment process, ensuring you find the right talent.",
      img: `${svg4}`,
    },
    {
      id: 6,
      name: "PAYROLL MANAGEMENT",
      Description:
        "Our system streamlines your business operations, smart solutions for enhancement.",
      img: `${svg5}`,
    }
  ];

  //Client Logo

  const client_logo = [
    {
    id: 1,
    image: `${logo1}`
  },
  {
    id: 2,
    image: `${logo2}`
  },
  {
    id: 3,
    image: `${logo3}`
  },
  {
    id: 4,
    image: `${logo4}`
  },
  {
    id: 5,
    image: `${logo5}`
  },
  {
    id: 6,
    image: `${logo6}`
  },
  {
    id: 7,
    image: `${logo7}`
  },
  {
    id: 8,
    image: `${logo8}`
  },
  {
    id: 9,
    image: `${logo9}`
  },
]


  // Dropdown click

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  //DropDown Data

  const Dropdata = [
    {
      id: 1,
      name: "Expertise",
      description:
        "Our team of seasoned professionals brings years of experience and industry knowledgeable to the table",
    },
    {
      id: 2,
      name: "Customized Solution",
      description:
        "We understand that every business is unique. Our tailored solutions are designed to meet your specific needs.",
    },
    {
      id: 3,
      name: "Global Reach",
      description:
        "With services spanning multiple countries, we have the network and resource to find the best talent worldwide.",
    },
    {
      id: 4,
      name: "Commitment to Quality",
      description:
        "We are dedicated to delivering high-quality services that exceed your expectations.",
    },
    {
      id: 5,
      name: "Partnership",
      description:
        "We work closely with our clients, building long term relationships based on trust and mutual success.",
    },
  ];

  return (
    <div id="Home">
      <div>
        {/* Section 1 */}
        <section id="home-section1">
          <div id="home-section2">
            <div id="home-section3">
              <img
                className="img-fluid"
                id="home-section1-img"
                src={home_img}
                alt={home_img}
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
                  Our Commitment Discover Success with PrimeSource Consulting
                  LLP.
                </p>
              </div>
              <div>
                <button id="home-section1-button">Get started</button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}

        <section className="container" id="home-section2-1">
          <div id="marquee">
            <div id="home-section2-row">
              {ser_api.map((data) => (
                <div id="home-section2-col">
                  <div class="card" id="home-section2-card">
                    <div id="home-section2-card-img-div">
                      <img
                        src={data.img}
                        class="card-img-top"
                        id="home-section2-card-img"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title" id="home-section2-card-title">
                        {data.name}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div id="home-section2-row">
              {ser_api.map((data) => (
                <div id="home-section2-col">
                  <div class="card" id="home-section2-card">
                    <div id="home-section2-card-img-div">
                      <img
                        src={data.img}
                        class="card-img-top"
                        id="home-section2-card-img"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title" id="home-section2-card-title">
                        {data.name}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}

        <section className="container">
          <div className="row" id="home-section3-1">
            <div className="col-12 col-lg-12 col-xl-6" id="section3-div-1">
              <div id="home-section3-div-2">
                <h6 id="home-section3-h6-1">About our Company</h6>
                <button id="hr_line" type="none"></button>
              </div>
              <div id="home-section3-div-3">
                <p id="home-section3-sub-content">
                  Pan India operator providing solutions to your staffing
                  requirements.
                </p>
              </div>
              <div id="home-section3-div-4">
                <p id="home-section3-sub-content1">
                  Founded on principles of excellence and integrity, Primesource
                  Consulting LLP has been a trusted partner for both employers
                  and job seekers. Our deep industry knowledge and extensive
                  network enable us to deliver exceptional placement services
                  that drive success for our clients and candidates alike.
                </p>
              </div>

              <div id="home-section3-div-5">
                <div id="home-section3-div-6">
                  <div id="home-section3-div-7">
                    <div className="mt-2 mb-2" id="home-section3-inside-1">
                      <RiCheckboxCircleFill id="home-section3-checkbox-icon" />
                      <p id="home-section3-inside-1-content">Documentation</p>
                    </div>
                    <div className="mt-2 mb-2" id="home-section3-inside-2">
                      <RiCheckboxCircleFill id="home-section3-checkbox-icon" />
                      <p id="home-section3-inside-2-content">Assignment</p>
                    </div>
                    <div className="mt-2 mb-2" id="home-section3-inside-3">
                      <RiCheckboxCircleFill id="home-section3-checkbox-icon" />
                      <p id="home-section3-inside-3-content">Orientation</p>
                    </div>

                    <div className="mt-2 mb-2" id="home-section3-inside-4">
                      <RiCheckboxCircleFill id="home-section3-checkbox-icon" />
                      <p id="home-section3-inside-4-content">Welcome Package</p>
                    </div>
                    <div className="mt-2 mb-2" id="home-section3-inside-5">
                      <RiCheckboxCircleFill id="home-section3-checkbox-icon" />
                      <p id="home-section3-inside-5-content">Training Plan</p>
                    </div>
                    <div className="mt-2 mb-2" id="home-section3-inside-6">
                      <RiCheckboxCircleFill id="home-section3-checkbox-icon" />
                      <p id="home-section3-inside-6-content">IT setup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-6">
              <img
                className="img-fluid"
                id="home-section3-slide-img"
                src={img5}
                alt={img5}
              />
            </div>
          </div>
        </section>

        {/* Section 4 */}
        
        <section className="container">
          <div className="row" id="services-section4-1">
            <div id="services-section4-div-1">
              <h6 id="services-section4-h6-1">Our services</h6>
              <p id="services-section4-sub-content">
                Premier’s Service Talent Solutions: Connecting Excellence with
                opportunity
              </p>
            </div>

            <div
              className="row row-cols-1 row-cols-md-3 g-4"
              id="services-section4-row"
            >
              {services.map((data) => (
                <div className="col" id="services-services-col">
                  <div
                    class="card"
                    id="services-section4-card"
                    onMouseOver={() => setValue(`${data.id}`)}
                    onMouseOut={() => setValue()}
                  >
                    <div id="services-section4-svg-icon">
                      <img
                        id="services-section4-card-icons"
                        src={data.img}
                        alt={data.img}
                      />
                    </div>
                    <div class="card-body">
                      <h5
                        class="card-title"
                        id={
                          value === `${data.id}`
                            ? "services-section4-card-title-hover"
                            : "services-section4-card-title"
                        }
                      >
                        {data.name}
                      </h5>
                      <p
                        id={
                          value === `${data.id}`
                            ? "services-section4-card-sub-content-hover"
                            : "services-section4-card-sub-content"
                        }
                      >
                        {data.Description}
                      </p>
                      <button
                        id={
                          value === `${data.id}`
                            ? "services-section4-card-button-hover"
                            : "services-section4-card-button"
                        }
                      >
                        Read More{" "}
                        <i>
                          <FaArrowRight />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Section5 */}
        <section id="home-section5-1">
          <div id="home-section5-2">
            <div className="container">
              <div id="home-section5-3">
                    <div id="home-section5-4">
                         <div id="home-section5-5">
                         <img className="img-fluid" id="home-section5-img" src={img7} alt={img7} />
                         </div>
                         <div id="home-section5-6">
                            <div id="home-section5-7">
                              <h6 id='home-section5-h6-1'>Why Choose Us</h6>
                            </div>
                            {
                              Dropdata.map((item,i) => (
                                <div id='home-section5-8' onClick={() => toggle(i)}>
                                <div id="home-section5-9">
                                   <h6 id="home-section5-h6">{item.name}</h6>
                                   <span id="home-section-5-5-2-span">{selected === i  ? <FaMinus id="home-minus-icon" /> : <FaPlus id="home-plus-icon" />}</span>
                                </div>
                                <div id="home-section5-10">
                                   <p id={selected === i ? "home-section5-p-click" :"home-section5-p"}>{item.description}</p>
                                </div>
                            </div>
                              ))
                            }
                         </div>
                    </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}

        <section id="section6">
          <div id="home-section6-logo">
            <div className="container">
              <div id="scroll-home-section-logo">
                <div id="row-home-logo-section">
                {
              client_logo.map((item) => (
                <div id='section6-1'>
                 <img id="section6-logo-img" src={item.image} alt={item.image} />
              </div>
              ))
            }
                </div>
                <div id="row-home-logo-section">
                {
              client_logo.map((item) => (
                <div id='section6-1'>
                 <img id="section6-logo-img" src={item.image} alt={item.image} />
              </div>
              ))
            }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 */}

        <section id="section7">
         <div className="container">
               <h6 id="section7-head"> Get In Touch </h6>
             <div id="section7-1">
                  
                <div id="section7-2">
                             
                   <div id="section7-3">
                    {/* Location */}
                     <div id="section7-4"> 
                         <div id="section7-5">
                         <FaLocationDot id="home-location-icon" />
                         </div>
                         <div id="section7-6">
                            <h6 id="section7-h6-1">Locations</h6>
                            <p id="section7-p-1">Door No 14-552-20 V.A.Nagar, Kadayam Road, Pavoorchathiram, Tenkasi District - 627808.</p>
                         </div>
                     </div>
                     {/* Phone */}
                     <div id="section7-7"> 
                         <div id="section7-8">
                         <FaPhoneAlt id="home-phone-icon" />
                         </div>
                         <div id="section7-9">
                            <h6 id="section7-h6-2">Make a call</h6>
                            <p id="section7-p-2">+91 8189991250</p>
                         </div>
                     </div>
                     {/* Email */}
                     <div id="section7-10"> 
                         <div id="section7-11">
                         <MdEmail id="home-email-icon" />
                         </div>
                         <div id="section7-12">
                            <h6 id="section7-h6-3">Send mail</h6>
                            <p id="section7-p-3">Rrecruit@primesourcellp.com</p>
                         </div>
                     </div>
                   </div>
                </div>
                <div id="section7-3">
                <div id="section7-13"> 
                  <form id="section7-form">
                     <div id="section7-form-two-input">
                        <input type="text" id="section7-name-input" placeholder="Your Name" />
                        <input type="text" id="section7-phone-input" placeholder="Phone Number" />
                     </div>
                     <input id="section7-email-input" type="text" placeholder="Email" />
                     <textarea id="section7-message-input" placeholder="Message"></textarea>
                     <button id="section7-form-submit-button">Send Message</button>
                  </form>
                </div>
                </div>
             </div>
         </div>
        </section>

      </div>
    </div>
  );
}

export default Home;







{/* <section className="container">
<div className="row" id="home-section4-1">
  <div id="home-section4-div-1">
    <h6 id="home-section4-h6-1">Our services</h6>
    <p id="home-section4-sub-content">
      Premier’s Service Talent Solutions: Connecting Excellence with
      opportunity
    </p>
  </div>

  <div
    className="row row-cols-1 row-cols-md-3 g-4"
    id="home-section4-row"
  >
    {services.map((data) => (
      <div className="col" id="home-services-col">
        <div
          class="card"
          id="home-section4-card"
          onMouseOver={() => setValue(`${data.id}`)}
          onMouseOut={() => setValue()}
        >
          <div id="home-section4-svg-icon">
            <img
              id="home-section4-card-icons"
              src={data.img}
              alt={data.img}
            />
          </div>
          <div class="card-body">
            <h5
              class="card-title"
              id={
                value === `${data.id}`
                  ? "home-section4-card-title-hover"
                  : "home-section4-card-title"
              }
            >
              {data.name}
            </h5>
            <p
              id={
                value === `${data.id}`
                  ? "home-section4-card-sub-content-hover"
                  : "home-section4-card-sub-content"
              }
            >
              {data.Description}
            </p>
            <button
              id={
                value === `${data.id}`
                  ? "home-section4-card-button-hover"
                  : "home-section4-card-button"
              }
            >
              Read More{" "}
              <i>
                <FaArrowRight />
              </i>
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</section> */}