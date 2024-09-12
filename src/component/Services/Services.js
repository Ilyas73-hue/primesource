import React, {useState} from 'react';
import "./service.css";
import svg from "../../assets/web.svg";
import svg1 from "../../assets/database.png";
import svg2 from "../../assets/digital_marketing.png";
import svg3 from "../../assets/sap_png.png";
import svg4 from "../../assets/hr.png";
import svg5 from "../../assets/payroll.png";
import svg6 from "../../assets/Full_time_staffing.png";
import svg7 from "../../assets/Global_sourcing.png";
import svg8 from "../../assets/Contract_Staffing.png"
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

function Services() {

  const [value, setValue] = useState();

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
    },
    {
      id: 7,
      name: "Full time staffing",
      Description:
        "We provide top industry talent through our rigorous screening process, simplifying recruitment and ensuring,",
      img: `${svg6}`,
    },
    {
      id: 8,
      name: "Global sourcing",
      Description:
        "Our dedicated team specializes in connecting top-tier IT professional with companies that require, ",
      img: `${svg7}`,
    },
    {
      id: 9,
      name: "Contract Staffing",
      Description:
        "Prime Source delivers you as per your needs. Be it temporary or full time, we got you covered.",
      img: `${svg8}`,
    },
  ];

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


  return (
    <div id="services">
       <section id="services-section-1">
        <div id='services-section-1-1'>
          <div className='container'>
            <div id="services-section-1-2">
                <div id="services-section-1-3">

                </div>
                <div id="services-section-1-4">
                <p id="services-p-1">Home/<i id="services-i">Services</i></p>
                    <h6 id="services-h6">Services</h6>
                    <p id="services-p-2">Quick and easy solutions to your human resources needs</p>
                </div>
            </div>
          </div>
        </div>
       </section>
        {/* Section 2 */}
       
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
        
         {/* Section3 */}
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
                {/* Section 4 */}

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
    </div>
  )
}

export default Services;