"use client"
import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const Intro = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    
    if (isModalOpen) {
      document.body.classList.add('modal-open');
      document.body.style.cursor="pointer"
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.cursor="auto"

    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove('modal-open')
      document.body.style.cursor="auto"

    }
  }, [isModalOpen]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <section className="section intro bg-100 xl:border ">
      <div className="intro-inner mt-16 lg:-mt-8">
        <div className="row row-30 align-items-center">
          <div className="col-md-4 col-xxl-3 offset-xl-1 offset-xxl-2 text-center text-md-left ">
            <h1 className="space-x-2">
              <span style={{ fontWeight: 100 }}>Hi!</span>
              <span
                style={{
                  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  fontFamily: '"Formular", sans-serif',
                  textAlign: "left",
                  color: "#111235",
                  fontWeight: 800,
                  lineHeight: 1,
                  padding: "6px",
                  boxSizing: "border-box",
                }}
                className="text-[44px] lg:text-[50px]"
              >
                I'm <br />a designer
              </span>
            </h1>
            <h3 className="intro-subtitle">
              ready to work on the next big project for your business
            </h3>
            <a className="btn border-0 font-bold" style={{padding:'15px 30px' ,fontSize:'1.2rem',fontWeight:'bolder'}} href="#contact">
              Get in touch
            </a>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-4 col-xxl-4">
            <div className="thumbnail thumbnail-video">
              <div className="thumbnail-media">
                <img
                  className="thumbnail-img"
                  src="images/person-01-630x866.jpg"
                  alt=""
                  width="630"
                  height="866"
                />
                <a
                  className="thumbnail-icon text-white"
                  onClick={openModal}
                >
                  <FaPlay size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Other content */}
          <div className="col-sm-5 col-md-3 col-xl-2">
            <div className="thumbnail thumbnail-boxed">
              <div className="thumbnail-media">
                <img
                  className="thumbnail-img"
                  src="images/image-12-270x285.jpg"
                  alt=""
                  width="270"
                  height="285"
                />
                <div className="thumbnail-tags">
                  <a className="text-black bg-white p-2 hover:bg-red-600 hover:text-white" href="#">
                    Design
                  </a>
                </div>
              </div>
              <div className="thumbnail-body">
                <div className="thumbnail-title h5">
                  <a href="#">iStep Co.</a>
                </div>
                <div className="thumbnail-text">
                  A UX design project I have recently worked on.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-1 col-xxl-1 text-center text-md-left">
            <div className="intro-social h5">
              <a className="intro-social-link" href="#">
                Instagram
              </a>
              <a className="intro-social-link" href="#">
                Pinterest
              </a>
            </div>
          </div>
        </div>
        <div className="intro-bg-text">Boooo</div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={handleClickOutside}>
          <div className="modal-content">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3Y_W7hF_J24"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;
