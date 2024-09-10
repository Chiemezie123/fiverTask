"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import ResponiveNav from "./responive-nav";
import NewsLetter from "./news-letter";
import { RxCross2 } from "react-icons/rx";
import {motion} from 'framer-motion'

// Nav items
const navItems = [
  { name: "About me", path: "#about-me" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "Contact", path: "#contact" },
  { name: "Blog", path: "#blog" },
];

const Header2: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNewsPopover, setOpenNewsPopover] = useState(false);
  const newsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const [isSticky, setIsSticky] = useState(false);

  const handleNavOpen = () => setOpenMenu(prev => !prev);
  const handleNewPopover = () => setOpenNewsPopover(prev => !prev);


  const handleSetSticky = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleSetSticky);
    return () => {
      document.removeEventListener("scroll", handleSetSticky);
    };
  }, []);

  // useEffect(() => {
  //   const handleOutsideClick = (e: MouseEvent) => {
  //     if (navRef.current && !navRef.current.contains(e.target as Node)) {
  //       setOpenMenu(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleOutsideClickForNews = (e: MouseEvent) => {
  //     if (newsRef.current && !newsRef.current.contains(e.target as Node)) {
  //       setOpenNewsPopover(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutsideClickForNews);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClickForNews);
  //   };
  // }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full lg:static bg-white lg:bg-offWhite flex items-center justify-between !py-2 lg:!py-6 px-4 z-50 ${
        isSticky ? "shadow-lg" : ""
      }`}
    >
      <div
        className={`absolute top-0 left-0 hidden lg:flex items-center justify-center h-80 w-20 overflow-auto bg-cream z-40 ${
          isSticky ? "!hidden" : "lg:flex"
        }`}
      
      >
        <motion.div className="  cursor-pointer text-black bg-cream px-2">
  {openNewsPopover ? (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 90 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleNewPopover}
      className="w-full h-full"
    >
     
     <span className={`line-cross ${openNewsPopover ? "open" : ""}`}></span>

    </motion.div>
  ) : (
    <motion.div
      initial={{ rotate: 90 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleNewPopover}
      className="w-full h-full"
    >
   
   <span className={`line-cross absolute  ${openNewsPopover ? "open" : ""}`}></span>

    </motion.div>
  )}
    </motion.div>
        {openNewsPopover && (
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{ duration: 0.5, ease: "easeInOut" }}

          
          >
            <NewsLetter
            openNewsPopover={openNewsPopover}
            newsRef={newsRef}
            className={isSticky ? "hidden" : ""}
          />

          </motion.div>
        )}
      </div>
      <div className="lg:hidden flex">
        <TbMenu
          size={30}
          className={`cursor-pointer ${openMenu ? "text-orange" : "text-black"}`}
          onClick={handleNavOpen}
        />
      </div>
      {/* LOGO */}
      <div className="flex items-center justify-center gap-8 lg:pl-20 grow lg:grow-0">
        <Image
          src="/logo.png"
          alt="logo"
          width={110}
          height={110}
          className="py-2"
        />
      </div>
      {/* DESKTOP NAVIGATION */}
      <div className="flex items-center py-2">
        <ul className="hidden lg:flex list-none gap-16">
          {navItems.map((item) => (
            <li key={item.name} className="flex items-center gap-10">
              <Link
                href={item.path}
                className="relative text-xl text-black hover:text-orange w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <FaFacebookMessenger
            size={30}
            className="text-orange hover:text-cream cursor-pointer transition-all duration-500"
          />
        </ul>
      </div>
      {/* Icons */}
      <div className="lg:hidden flex items-center gap-3">
        <BsThreeDotsVertical
          size={20}
          className="cursor-pointer"
          onClick={handleNewPopover}
        />
        <FaFacebookMessenger
          size={20}
          className="text-orange hover:text-cream cursor-pointer transition-all duration-500"
        />
      </div>

      {openMenu && (
        <ResponiveNav
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          navItems={navItems}
          navRef={navRef}
        />
      )}
      {openNewsPopover && (
        <NewsLetter
          openNewsPopover={openNewsPopover}
          newsRef={newsRef}
          className={"lg:hidden"}
        />
      )}
    </header>
  );
};

export default Header2;
