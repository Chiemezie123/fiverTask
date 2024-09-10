"use client";
import React, { useEffect } from 'react';


const AboutUs = () => {
 

  return (
    <section
      className="section section-md bg-left-1 text-center text-sm-left relative -z-10"
      id="about-me"
    >
      
      <div className="absolute top-10 left-20 w-[200px] h-[200px] bg-[#FDF7F1] opacity-50 z-0"></div>

      <div className="bg-item overflow-hidden hidden md:flex relative">
        {/* Square div behind the image */}
        <img
          src="images/bg-pattern-1.jpg"
          
          alt=""
          className="relative z-0 w-[600px]" // Increase the width here
        />
      </div>

      <div className="container">
        <div className="row row-30">
          <div className="col-sm-6">
            <div
            
            >
              <img
                className="image"
                src="images/image-01-424x491.jpg"
                alt=""
                width="424"
                height="491"
              />
            </div>
          </div>
          <div
            className="col-sm-6"
           
            
          >
            <h2 className="text-decoration">About me</h2>
            <h5>
              My name is James Adams. I’m a UI/UX &amp; graphic designer. I
              believe that a well-designed product leads a business to success.
            </h5>
            <h5>
              I love learning how people think and behave, and I leverage
              research to design user-centered products and experiences which
              solve both user and business problems.
            </h5>
            <div className="btn-group-1  mt-24 ml-44 ">
              <a className="btn" href="#">
                Send message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
