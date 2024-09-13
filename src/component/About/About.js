import React, {useState} from 'react';
import "./About.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import img5 from "../../assets/About_img.jpeg";
import logo_primary_1 from "../../assets/logo_primary_1.png";
import logo_primary_2 from "../../assets/logo_primary_2.png";
import logo_primary_3 from "../../assets/logo_primary_3.png";
import logo_white_1 from "../../assets/logo_white_1.png";
import logo_white_2 from "../../assets/logo_white_2.png";
import logo_white_3 from "../../assets/logo_white_3.png";
import slide_1 from "../../assets/click_img_1.png";
import slide_2 from "../../assets/click_img_2.png";
import { FaAngleDown } from "react-icons/fa";


function About() {

   const [click , setClick] = useState(1);
   const [selected, setSelected] = useState(null);

  //  Content Change
 
   const tabs = (i) => {
    setClick(i)
   }

   //content view data

   const data = [{
    id: 1,
    name: "Streamlining Your Hiring Process",
    description: "At PrimeSource Consulting LLP, We understand that finding the right talent is crucial for your business success. Our applications screening and scheduling services are designed to streamline your hiring process, ensuring you get the best candidates efficiently."
   },
   {
    id: 2,
    name: "Thorough screening",
    description: "Our team meticulously reviews each application, filtering candidates based on your specific criteria. We assess qualifications, experience, and cultural fit to present you with the top contenders"
   },
   {
    id: 3,
    name: "Efficient Scheduling",
    description: "We handle the logistics of scheduling interviews, coordinating with candidates and your hiring managers to find suitable times. Our goal is to minimize delays and keep the process moving smoothly."
   }
  ]

  const data1 = [
    {
      id: 1,
      name: "Welcome Package",
      description: "Provide new employees with essential information about the company, their role, and Key contacts"
     },
     {
      id: 2,
      name: "Documentation",
      description: "Collect and verify all necessary paperwork, including contracts, tax forms, and identification"
     },
     {
      id: 3,
      name: "IT setup",
      description: "Ensure new hires have access to necessary systems, email, and hardware before their first day"
     },
     {
      id: 4,
      name: "Orientation",
      description: "Conduct a thorough orientation session to introduce company policies, procedures, and values."
     },
     {
      id: 5,
      name: "Training Plan",
      description: "Outline a training schedule tailored to the new employee's role, including initial tasks and goals."
     },
     {
      id: 6,
      name: "Mentor Assignment",
      description: "Pair new hires with a mentor to guide them through their first weeks and answer any questions."
     },
]


   //Content View

   const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };


  return (
    <div id="about">
      <div id="about1">
             <div id='about2'>
              <div className='container'>
               <div id="about3">
                  <div id="about4">

                  </div>
                  <div id="about5">
                    <p id="about-p-1">Home/<i id="about-i">About us</i></p>
                    <h6 id="about-h6">About us</h6>
                    <p id="about-p-2">Pan India operator providing solutions to your staffing
                    requirements.</p>
                  </div>
               </div>
              </div>
             </div>
      </div>
        {/* Section 2 */}

        <section className="container">
          <div className="row" id="home-section3-1">
            <div className="col-12 col-lg-12 col-xl-6" id="section3-div-1">
              <div id="home-section3-div-2">
                <h6 id="home-section3-h6-1">About our Company</h6>
                <button id="hr_line" type="none"></button>
              </div>
              <div id="home-section3-div-3">
                <p id="home-section3-sub-content">
                  Pan Indian operator providing solutions to your staffing
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

          {/* Section3 */}

      <section className='container'>
        <div id='about-section3'>
         <div id="about-section3-1">
              <h6 id="about-section3-h6-1">Our Approach and work ethic</h6>
         </div>
         <div id="about-section3-2">
             <div id="about-section3-3">
                  <div id={ click === 1 ? "about-section3-4" : "about-section3-4-not-active" } onClick={() => tabs(1)}>
                        <div id={ click === 1 ? "about-section3-5" : "about-section3-5-not-active" }>
                         { click === 1 ? <img src={logo_primary_1} alt={logo_primary_1} /> : <img src={logo_white_1} alt={logo_white_1} /> } 
                        </div>
                        <div id="about-section3-6">
                           <p id={ click === 1 ? "about-section3-6-p" : "about-section3-6-p-not-active"  }>Application screening 
                           and scheduling</p>
                        </div>
                  </div>
                  <div id={ click === 2 ? "about-section3-4" : "about-section3-4-not-active" } onClick={() => tabs(2)}>
                        <div id={ click === 2 ? "about-section3-5" : "about-section3-5-not-active" }>
                        { click === 2 ? <img src={logo_primary_2} alt={logo_primary_2} /> : <img src={logo_white_2} alt={logo_white_2} /> } 
                        </div>
                        <div id="about-section3-6">
                           <p id={ click === 2 ? "about-section3-6-p" : "about-section3-6-p-not-active"  }>Employee onboarding 
                           checklist</p>
                        </div>
                  </div>
                  <div id={ click === 3 ? "about-section3-4" : "about-section3-4-not-active" }>
                        <div id={ click === 3 ? "about-section3-5" : "about-section3-5-not-active" } >
                        { click === 3 ? <img src={logo_primary_3} alt={logo_primary_3} /> : <img src={logo_white_3} alt={logo_white_3} /> } 
                        </div>
                        <div id="about-section3-6">
                           <p id={ click === 3 ? "about-section3-6-p" : "about-section3-6-p-not-active"  }>Taking care of 
                           employee benefits</p>
                        </div>
                  </div>
             </div>
         </div>
         
         {/* Click 1 */}

{
  click === 1 ?         
   <div id="about-section3-7">
  <div id="about-section3-8">
    <div id="about-section3-9">
      <div id="about-section3-10">
        <img id="about-section3-img" src={slide_1} alt={slide_1} />
      </div>
      <div id="about-section3-11">
      <div id="about-section3-12">
      <h6 id="about-section3-12-h6-1">Application Screening and Scheduling</h6>
      </div>

    <div id="about-section3-13-flex">
      {
        data.map((item, i) => (
          <div id="about-section3-13">
          <div id="about-section3-14" onClick={() => toggle(i)}>
             <p id="about-section3-14-p">{item.name}</p>
             <FaAngleDown id="about-section3-angle" />
          </div>
          <div id={ selected === i ? "about-section3-15" : "about-section3-15-not-click" }>
            <p id="about-section3-16">{item.description}</p>
          </div>
    </div>
        ))
      }


    </div>

    </div>
    </div>
   </div>
</div> : ""
}

{/* click 2 */}

{
  click === 2 ? 
    <div id="about-section3-17">
         <div id="about-section3-18">
    <div id="about-section3-19">
      <div id="about-section3-20">
        <img id="about-section3-img-1" src={slide_2} alt={slide_2} />
      </div>
      <div id="about-section3-21">
      <div id="about-section3-22">
      <h6 id="about-section3-22-h6-1">Employee Onboarding Checklist</h6>
      </div>

    <div id="about-section3-23-flex">
      {
        data1.map((item, i) => (
          <div id="about-section3-23">
          <div id="about-section3-24" onClick={() => toggle(i)}>
             <p id="about-section3-24-p">{item.name}</p>
             <FaAngleDown id="about-section3-angle" />
          </div>
          <div id={ selected === i ? "about-section3-25" : "about-section3-25-not-click" }>
            <p id="about-section3-26">{item.description}</p>
          </div>
    </div>
        ))
      }


    </div>

    </div>
    </div>
   </div>
    </div>
  : ""
}


        </div>
      </section>

    </div>
  )
}

export default About;