import React, { useState } from "react";
import { navlinks } from "../constant";
import { Logo, NavIcon, CloseIcon } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="flex w-full absolute py-[50px] lg:px-39 md:px-10 px-8 justify-between items-center z-50">
      {/* Logo */}
      <img
        src={Logo}
        alt="logo"
        className="ss:w-[234px] ss:h-[45.61px] object-contain w-[140px] h-[27px] z-10"
      />

      {/* Desktop Nav Links */}
      <ul className="text-white items-center sm:flex hidden z-10">
        {navlinks.map((data, index) => (
          <li
            key={data.id}
            className={`text-[20px] cursor-pointer ${
              active === data.title
                ? "font-medium underline decoration-mediumskin underline-offset-6"
                : "font-normal"
            } ${index === navlinks.length - 1 ? "mr-0" : "md:mr-10 mr-5"}`}
            onClick={() => setActive(data.title)}
          >
            <a href={`#${data.id}`}>{data.title}</a>
          </li>
        ))}
      </ul>

      {/* Desktop Auth Buttons */}
      <div className="sm:flex hidden md:gap-[36px] gap-[20px] text-amber-50 text-[20px] items-center">
        <a href="#login">Login</a>
        <a href="#signup" className="py-[20px] px-[32px] bg-mediumskin rounded-[12px]">
          Sign up
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden z-20">
        <img
          src={toggle ? CloseIcon : NavIcon}
          alt="menu"
          className="w-[37px] h-[37px]"
          onClick={() => settoggle(!toggle)}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } sm:hidden absolute top-full mt-4 right-0 bg-black p-6 rounded-lg flex-col w-full z-40`}
      >
        <ul className="text-white flex flex-col gap-4">
          {navlinks.map((data) => (
            <li
              key={data.id}
              className={`text-[18px] cursor-pointer ${
                active === data.title ? "font-medium text-mediumskin" : "font-normal"
              }`}
              onClick={() => {
                setActive(data.title);
                settoggle(false);
              }}
            >
              <a href={`#${data.id}`}>{data.title}</a>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-col gap-3 text-white text-[18px]">
          <a href="#login">Login</a>
          <a
            href="#signup"
            className="py-[10px] px-[20px] bg-mediumskin rounded-[8px] text-center"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
