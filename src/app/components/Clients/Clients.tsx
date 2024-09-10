"use client"
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { IoArrowDown } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Clients = () => {
  const testimonials = [
    {
      quote: "James spends quite a bit of time getting to know his clients and their projects to be able to add tremendous value to them.",
      author: "Emma Wilson",
      role: "Client",
      img: "images/person-01-67x67.jpg",
    },
    {
      quote: "James is exceptionally talented and very well-versed in both design and web technologies. I highly recommend him.",
      author: "John McMillan",
      role: "Client",
      img: "images/person-02-67x67.jpg",
    },
    {
      quote: "James is one of the most talented designers we've had the opportunity to work with. His elegant design execution comes with great precision.",
      author: "Kate Peters",
      role: "Client",
      img: "images/person-03-67x67.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className=" relative section section-md bg-left" id="testimonials ">
      <div 
        style={{
          position: 'absolute',
          top: '0',
          bottom: '-1px',
          right: 'calc(50% + 190px)',
          width: 'calc(50% - 180px)',
          height: '100%', // Ensure the image covers the height of the container
        }}
      >
      <Image
        src="/images/bg-pattern-1.jpg" // Ensure the path is correct
        alt="Background Pattern"
          fill
        objectFit="cover"
        
      />
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="swiper-separate-container ">
              <div className="client-object w-full h-[26rem] overflow-hidden bg-[#fdf7f1] p-4 ">
                {/* Overlay */}
                <div className="client-slider"></div>

                {/* Card Slide */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 50 }} // Start from below
                    animate={{ opacity: 1, y: 0 }} // Move to original position
                    exit={{ opacity: 0, y: -50 }} // Move up and fade out
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="swiper-slide"
                  >
                    <motion.blockquote className="quote">
                      <q className="quote-text font-thin italic text-[17px] sm:text-[25px] text-black">
                        {testimonials[currentSlide].quote}
                      </q>
                      <div className="flex gap-4 pt-6 pb-12">
                        <img
                          className="rounded-full"
                          src={testimonials[currentSlide].img}
                          alt={testimonials[currentSlide].author}
                          width="67"
                          height="67"
                        />
                        <div className="quote-author-body">
                          <div className="quote-author-name h4">
                            <cite className="text-red-500">
                              {testimonials[currentSlide].author}
                            </cite>
                          </div>
                          <div className="quote-author-meta h6">
                            {testimonials[currentSlide].role}
                          </div>
                        </div>
                      </div>
                    </motion.blockquote>
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Navigation Buttons */}
              <div className="swiper-separate-navigation">
                <button
                  className="swiper-button swiper-button-prev"
                  onClick={handlePrev}
                >
                  <FaArrowUp />
                </button>
                <div className="swiper-pagination swiper-pagination-fraction">
                  <span className="swiper-pagination-current">
                    {String(currentSlide + 1).padStart(2, "0")}
                  </span>
                  /
                  <span className="swiper-pagination-total">
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>
                <button
                  className="swiper-button swiper-button-next"
                  onClick={handleNext}
                >
                   <IoArrowDown />
                 
                </button>
              </div>
            </div>
          </div>

          {/* Right-side section for logos */}
          <div className="col-md-6 text-center text-sm-left">
            <motion.h2
              className="text-decoration"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              My Clients
            </motion.h2>
            <motion.h5
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Read the testimonials submitted by my clients and partners. You
              can fully trust their opinions on my solutions.
            </motion.h5>
            <div className="row row-30 row-xxl-50 row-content-2 align-items-center text-center">
              {[
                "logo-01-86x36.png",
                "logo-02-187x30.png",
                "logo-03-130x27.png",
                "logo-04-123x28.png",
                "logo-05-84x17.png",
                "logo-06-104x23.png",
              ].map((logo, index) => (
                <motion.div
                  className="col-xs-6 col-md-4"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <img src={`images/${logo}`} alt={`logo${index + 1}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
