import React from "react";
import { useState } from "react";
import { navlinks } from "../constant";
import { Logo, NavIcon ,CloseIcon} from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="flex w-full absolute py-[50px] lg:px-39 md:px-10 px-8 justify-between items-center">
      <img src={Logo} className="ss:w-[234px] ss:h-[45.61px] object-contain w-[140px] h-[27px]" />
      <ul className="text-white items-center sm:flex hidden">
        {navlinks.map((data, index) => (
          <li
            key={data.id}
            className={`text-[20px]  ${
              active === data.title
                ? "font-medium  underline decoration-mediumskin underline-offset-6"
                : "font-normal"
            } ${index === navlinks.length - 1 ? "mr-0" : "md:mr-10 mr-5"}`}
            onClick={() => setActive(data.title)}
          >
            <a href={`#${data.id}`}>{data.title}</a>
          </li>
        ))}
      </ul>
      <div className=" sm:flex hidden md:gap-[36px] gap-[20px] text-amber-50 text-[20px] items-center">
        <a href="">Login</a>
        <a href="" className="py-[20px] px-[32px] bg-mediumskin rounded-[12px]">
          Sign up
        </a>
      </div>
      <span>
        <img src={toggle?CloseIcon:NavIcon} alt="" className="ss:w-[50px] ss:h-[50px] w-[37px] h-[37px] sm:hidden" onClick={()=>settoggle(!toggle)} />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } sm:hidden absolute top-[100px] right-0 bg-black p-6 rounded-lg flex-col w-[100%] z-50`}
        >
          <ul className="text-white flex flex-col gap-4">
            {navlinks.map((data) => (
              <li
                key={data.id}
                className={`text-[18px] ${
                  active === data.title ? "font-medium text-mediumskin" : "font-normal"
                }`}
                onClick={() => {
                  setActive(data.title);
                  settoggle(false); // Close menu after click
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
        
      </span>
      
    </nav>
  );
};

export default Navbar;
