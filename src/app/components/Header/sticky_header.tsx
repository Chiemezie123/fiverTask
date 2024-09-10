"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import Image from "next/image";
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

const StickyHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [openNewsPopover, setOpenNewsPopover] = useState(false);
  const newsRef = useRef<HTMLDivElement>(null);

  // Toggle menu visibility
  const handleNav = () => setOpenMenu(!openMenu);

  // Toggle newsletter visibility
  const handleNewPopover = () => setOpenNewsPopover((prev) => !prev);

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

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.path));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust this value as needed
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header
      className={`fixed top-0  left-0 w-full hidden lg:flex justify-between items-center bg-white shadow-md border  border-red-500 transition-transform duration-800 z-50 pr-3 ${
        isSticky ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center gap-8 ">
      <motion.div 
      className="cursor-pointer relative text-black px-2"
      style={{backgroundColor:"#B9E1D7"}}
      >
  {openNewsPopover ? (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 90 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleNewPopover}
    >
      {/* <span className={`line-cross ${openNewsPopover ? "open" : ""}`}></span> */}
      <RxCross2
        size={50}
        className="cursor-pointer text-slate-600 hover:text-lime-700"
        // onClick={handleNewPopover}
      />
    </motion.div>
  ) : (
    <motion.div
      initial={{ rotate: 90 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleNewPopover}
    >
      {/* <span className={`line-cross ${openNewsPopover ? "open" : ""}`}></span> */}
      <TbMenu
        size={50}
        // onClick={handleNewPopover}
        className="text-green-950 hover:text-lime-800"
      />
    </motion.div>
  )}
</motion.div>
        <Image
          src="/logo.png"
          alt="logo"
          width={120}
          height={120}
          className="py-2"
        />
      </div>

      <div className="flex items-center py-2">
        <ul className="hidden lg:flex list-none gap-16">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`relative text-xl text-black hover:text-orange w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                  activeSection === item.path.substring(1)
                    ? "after:scale-x-100 text-orange"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <FaFacebookMessenger
            size={30}
            className="text-orange hover:text-cream cursor-pointer"
          />
        </ul>
      </div>

      {/* Render NewsLetter conditionally based on openNewsPopover */}
      {openNewsPopover && (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration:0.4,ease:"easeInOut"}}
         ref={newsRef} className="absolute top-full left-0 right-0 mt-2">
          <NewsLetter openNewsPopover={openNewsPopover} />
        </motion.div>
      )}
    </header>
  );
};

export default StickyHeader;
