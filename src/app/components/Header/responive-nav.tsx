import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface ArrayResource {
  name: string;
  path: string;
}

const navItems = [
  { name: "About me", path: "#about-me" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "Contact", path: "#contact" },
  { name: "Blog", path: "#blog" },
];

interface ResponiveNavProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  navRef: React.RefObject<HTMLDivElement>;
}

const ResponiveNav: React.FC<ResponiveNavProps> = ({
  openMenu,
 
  setOpenMenu,
  navRef,
}) => {
  return (
    <div
      ref={navRef}
      className={`fixed top-16 left-0 h-full w-72 bg-offWhite z-40 transform transition-transform duration-700 mt-0.5 ${
        openMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="flex flex-col list-none gap-8 px-4 py-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              onClick={() => setOpenMenu(false)}
              className="relative text-2xl text-black hover:text-orange w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponiveNav;
