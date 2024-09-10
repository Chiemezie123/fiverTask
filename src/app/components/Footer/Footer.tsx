"use client";
import React, { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import {motion} from 'framer-motion'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      // Customize this to adjust the animation duration
      once: true, // Whether animation should happen only once or every time you scroll up and down
    });
  }, []);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
const toggleVisibility = () => {
  if (window.scrollY > 240) { // Adjust this value to determine when the button appears
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
};

  return (
    
    <>
      <section className="footer footer-top context-dark bg-800">
        <div className="row justify-content-center justify-content-lg-start"
          style={{border:"none"}}
        >
          <div className="col-sm-6 col-xxl-5 ">
          <div className="relative image-social">
  <a className="absolute right-0 top-0 image-social-icon" href="#">
    <div className="hover:bg-gray-100 bg-red-500 p-4">
      <FaFacebookMessenger className="text-red-200  bg-red-500 p-0 rounded-full" size={30}  />
    </div>
  </a>
  <img
    className="image"
    src="images/image-11-787x516.jpg"
    alt=""
    width="787"
    height="516"
  />
</div>

          </div>
          <div className="col-md-10 col-lg-6 col-xl-5 col-xxl-3 offset-xxl-1    ">
            <div className="footer-inner ">
              <div className="logo ">
                <div className="relative " href="index.html">
                  <div className="text-white">
                    <div className=" navbar-panel">
                      <button
                        className="navbar-switch "
                        data-multi-switch=""
                      ></button>
                      <div className="navbar-logo">
                        <a className="navbar-logo-link" href="index.html">
                          <img
                            className=""
                            src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-inverse-228x67.png"
                            alt="Booo"
                            width="114"
                            height="33"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form
                className=" "
                data-aos="fade-in-up" // Animation type
       
                data-aos-anchor-placement="bottom-bottom"
                data-form-output="newsletter-sample"
                data-form-type="subscribe"
                method="post"
                action="components/rd-mailform/rd-mailform.php"
                data-animate=""
                noValidate="novalidate"
              >
                 <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                     
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 sm:rounded-none  xl:rounded-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="E-mail" type="email" id="email" />
                  </div>
                  <div>
                      <button
                       type="submit" 
                       className="py-3  btn tara px-5 md:text-[#111235] w-full text-base leading-[1.2] font-medium text-center sm:text-[#111235] border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none  xl:rounded-none hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                       style={{color:"#111235"}}
                       >Subscribe</button>
                  </div>
              </div>
                            {/* <div className="form-group w-full flex items-center">
                <input
                  className="mt-4 form-control form-control-sm form-control-has-validation form-control-last-child h-14 px-3 border "
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  data-constraints="@Email @Required"
                  id="regula-generated-932748"
                />
                <span className="form-validation"></span>
                            </div>
                          <button className="btn px-4 py-3 btn-secondary h-14 " type="submit">
                        Subscribe
                          </button> */}

              </form>
              <div
                className="form-output snackbar snackbar-primary"
                id="newsletter-sample"
              ></div>
              <div className="row row-20 row-content">
                <div
                  className="col-6 col-sm-4 col-xl-6 animated fadeInUp"
                  data-aos="fade-up" // Animation type
       
                data-aos-anchor-placement="bottom-bottom"
                  data-animate=""
                >
                  <h5>E-mail</h5>
                  <p>
                    <a href="mailto:#">info@demolink.org</a>
                  </p>
                </div>
                <div
                  className="col-6 col-sm-4 col-xl-6 animated fadeInUp"
                  data-aos="fade-up" // Animation type
                data-aos-anchor-placement="bottom-bottom"
                  data-animate=""
                >
                  <h5>Phone</h5>
                  <p>
                    <a href="tel:#">800.567.1234</a>
                  </p>
                </div>
                <div
                  className="col-6 col-sm-4 col-xl-6 animated fadeInUp"
                  data-aos="fade-up" // Animation type
       
                data-aos-anchor-placement="bottom-bottom"
                  data-animate=""
                >
                  <h5>Address</h5>
                  <p>121 King Street, Melbourne , Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer footer-bottom context-dark bg-800">
        <div className="container">
          <div className="row row-20 animated fadeIn" data-animate="">
            <div className="col-md-7 col-xl-6">
              <div className="group-80x15">
                <a className="image-link" href="#">
                  <motion.img
                    initial={{opacity:0.3}}
                    whileHover={{opacity:1}}

                  
                    className="hover:animate-bounce"
                    src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-07-81x20.png"
                    alt=""
                    width="81"
                    height="20"
                  />
                  
                </a>
                <a className="image-link" href="#">
                  <motion.img
                   initial={{opacity:0.3}}
                   whileHover={{opacity:1}}
                   className="hover:animate-bounce"
                   src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-08-102x20.png"
                    alt=""
                    width="102"
                    height="20"
                  />
                </a>
                <a className="" href="#">
                  <motion.img
                   initial={{opacity:0.3}}
                   whileHover={{opacity:1}}
                   className="hover:animate-bounce"
                   src="images/logo-09-98x27.png"
                    alt=""
                    width="98"
                    height="27"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-xl-6">
              <p className="rights">
                <span>© 2020&nbsp;</span>
                <span>Booo</span>
                <span>. All rights reserved.</span>
              </p>
            </div>
            {isVisible && (
        <div
          className=" arow-parent group fixed bg-[#EE6451] aspect-square right-10 bottom-10 flex justify-center items-center"
          style={{
            width: '50px',
            height: '50px',
            zIndex: 20,
            
            transition: 'transform 0.4s ease',
            cursor: 'pointer',
          }}
          onClick={scrollToTop}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <IoIosArrowUp className="arow-child text-white peer-hover:bg-blue-800" size={15} />
        </div>
      )}

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
