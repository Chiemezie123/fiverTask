"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const LatestWorks = () => {
  useEffect(() => {
    AOS.init({
      // Customize this to adjust the animation duration
      once: true, // Whether animation should happen only once or every time you scroll up and down
    });
  }, []);
  const works = [
    {
      id : 1,
      image: "images/image-02-432x228.jpg",
      title: "Donut Country",
      tags: ["Design", "Branding"],
    },
    {
      id : 2,
      image: "images/image-03-432x238.jpg",
      title: "Furni",
      tags: ["Design"],
    },
    {
      id : 3,
      image: "images/image-04-432x228.jpg",
      title: "uDesign",
      tags: ["Design", "Branding", "Logo"],
    },
    {
      id : 4,
      image: "images/image-05-432x238.jpg",
      title: "ProKnife",
      tags: ["Design", "Branding"],
    },
    {
      id : 5,
      image: "images/image-06-432x228.jpg",
      title: "Floral Paradise",
      tags: ["Design", "Branding"],
    },
    {
      id : 6,
      image: "images/image-07-432x238.jpg",
      title: "Poultrix",
      tags: ["Design"],
    },
  ];

  // State to track current slide index (column slide)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of items visible in one row (e.g., 3 items at a time)
  const itemsPerRow = 3;

  // Calculate the maximum index you can slide to avoid empty space on the right
  const maxIndex = works.length - itemsPerRow;

  // Handle next slide
  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate the style to slide the columns within the row
  const slideStyle = {
    transform: `translateX(-${currentIndex * 33.33}%)`, // Slide by 33.33% to fit 3 items per row
    transition: "transform 0.5s ease-in-out",
  };

  return (
   
    <section
      className="section section-md bg-100 overflow-hidden"
      id="portfolio"
    >
      <div className="container">
        <div className="row row-30 row-lg-50 justify-content-md-between align-items-center">
          <div className="col-sm-8 col-md-7 col-xxl-5">
            <h2 className="text-decoration animated fadeIn" data-aos="fade-in"
              data-aos-anchor-placement="center-bottom" >Latest works</h2>

            <h5 className="text-decoration animated fadeIn" data-aos="fade-in"
              data-aos-anchor-placement="center-bottom">
              Check out my recent and popular design &amp; branding projects I
              have worked on.
            </h5>
          </div>

          <div className="col-sm-4 col-md-5 col-xxl-3 text-sm-right text-lg-center animated fadeInRight">
            <div className="separate-owl-nav">
              {/* Disable button when currentIndex is 0 */}
              <button
                type="button"
                className="owl-prev"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
              >
                <ArrowLeft />
              </button>

              {/* Disable button when currentIndex is the last slide */}
              <button
                type="button"
                className="owl-next"
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                style={{
                  opacity: currentIndex >= maxIndex ? 0.5 : 1,
                }}
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Slider container for columns */}
          <div className="">
            <div className="" data-aos="fade-in"
              data-aos-anchor-placement="center-bottom">
              <div className="flex" style={slideStyle}>
                {works.map((work, id) => (
                  <div
                    key={id}
                    className="min-w-[33.33%]  sm:w-48 "
                    // style={{ minWidth: "33.33%" }} // Ensure 3 items in one row
                  >


                    {/* --------------------------------------- */}
                    {/* maked the image padding uniform  */}
                    {/* --------------------------------------- */}


                    <div className=" latest-set w-[100vw] sm:w-96 p-3 sm:p-4">
                      <div className="thumbnail-media">
                        <img
                          className="w-full"
                          src={work.image}
                          alt={work.title}
                        />
                        <div className="thumbnail-tags">
                          {work.tags.map((tag, i) => (
                            <a
                              key={i}
                              className="bg-white text-black hover:bg-red-500 hover:text-white p-2"
                              href="#"
                            >
                              {tag}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="pl-8 pt-4">
                        {/* ---------------------------------- */}
                        {/* Fixed the font family not applying to iphone 12 pro */}
                        {/* ---------------------------------- */}

                        <div className="thumbnail-title h4">
                          <a href="#" className="font-semibold">{work.title}</a>
                        </div>
                        <button
                          className="thumbnail-link h5"
                          data-toggle="modal"
                          data-target="#modal-project"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
