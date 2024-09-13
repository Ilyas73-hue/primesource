import React from 'react';
import "./Career.css";
import career_img_1 from "../../assets/career_img_1.png";
import career_img_2 from "../../assets/carrer_img_2.png";
import career_img_3 from "../../assets/career_img_3.png";
import career_img_4 from "../../assets/carrer_img_4.png";
import career_img_5 from "../../assets/carrer_img_5.png";

function Career() {
  return (
    <div id="career">
        {/* Section1 */}
        <section id="career-section-1">
         <div id="career-section-1-1">
            <div className='container'>
            <div id="career-section-1-2">
                <div id="career-section-1-3">

                </div>
                <div id="career-section-1-4">
                <p id="career-p-1">Home/<i id="career-i">Career</i></p>
                    <h6 id="career-h6">Career</h6>
                    <p id="career-p-2">Reliable & Cost Efficient Recruitment Agency Based On India</p>
                </div>
            </div>
            </div>
         </div>
       </section>

      {/* Section2 */}

      <section className='container' id="career-section-2">
        <div id="career-section-2-1">
            <div id="career-section2-2">
               <div id="career-section2-3">
               <h6 id="career-section2-3-h6">Career</h6>
               <p id="career-section2-3-p">Why Choose PrimeSource Consulting LLP</p>
               </div>
            </div>
        </div>

         {/* Section 1 */}
        <div id="career-section2-4">
          <div id="career-section2-5">
             <img className='img-fluid' id="carrer-section2-5-img" src={career_img_1} alt={career_img_1} />
          </div>
          <div id="career-section2-6">
            <h6 id="career-section2-6-h6">Innovative Projects</h6>
            <p id="career-section2-6-p">Work on cutting-edge projects that drive digital transformation across industries. From web development to SAP consulting, you'll be at the forefront of technological advancements.</p>
          </div>
        </div>

          {/* Section2 */}

        <div id="career-section2-7">
          <div id="career-section2-8">
          <h6 id="career-section2-8-h6">Career Growth</h6>
          <p id="career-section2-8-p">We prioritize your professional development. With access to the latest tools, training programs, and a network of industry leaders, your career will be on the fast track to I success.</p>

          </div>
          <div id="career-section2-9">
          <img className='img-fluid' id="carrer-section2-9-img" src={career_img_2} alt={career_img_2} />  
          </div>
        </div>

          {/* Section 3 */}

          <div id="career-section2-10">
          <div id="career-section2-11">
             <img className='img-fluid' id="carrer-section2-11-img" src={career_img_3} alt={career_img_3} />
          </div>
          <div id="career-section2-12">
            <h6 id="career-section2-12-h6">Global Opportunities</h6>
            <p id="career-section2-12-p">Our global sourcing and consulting services offer you the chance to work with international clients and teams, expanding your horizons and experience.</p>
          </div>
        </div>

        {/* Section 4 */}
        
        <div id="career-section2-13">
          <div id="career-section2-14">
          <h6 id="career-section2-14-h6">Collaborative Environment</h6>
          <p id="career-section2-14-p">Join a team of dynamic professionals who are as passionate as you are about driving success. Collaboration is key, and every voice is heard.</p>

          </div>
          <div id="career-section2-15">
          <img className='img-fluid' id="carrer-section2-15-img" src={career_img_4} alt={career_img_4} />  
          </div>
        </div>

      </section>


    {/* Section 3 */}

     <section id="career-section-3">
           <div className='container'>
               <div id="career-section-3-1">
                   <h6 id="career-section-3-1-h6-1">How to Apply</h6>
               </div>
               <div id="career-section-3-2">
                <div id="career-section-3-2-1">
                 <p id="career-section-3-2-p">Ready to take your career to the next level. Send your Resume
                 and a cover letter to the email address recruit@primesourcellp.com</p>
                 <button id="career-section-3-2-button">Apply Now</button>
                </div>
                <div id="career-section-3-3">
                  <img id="career-section-3-img" src={career_img_5} alt={career_img_5} />
                </div>
               </div>
           </div>
     </section>



    </div>
  )
}

export default Career