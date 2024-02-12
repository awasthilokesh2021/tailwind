import React, { useState } from "react";
import { NavLink, useNavigate, } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [value, setValue] = useState(false);
  const history = useNavigate();

  const toggleMenu = () => {
    setValue(!value);
  };

  const navigateToPage = (path) => {
    // Close the mobile menu
    setValue(false);
    history(path);
  };

  const content = (
    <div className="lg:hidden md:hidden absolute block h-[100vh] bg-white text-black left-0 right-0 mt-4 w-full">
      <ul className="flex flex-col items-center gap-4">
        <li onClick={() => navigateToPage("/")} className="hover:bg-red-600 text-3xl px-4 py-2 rounded-md cursor-pointer">
          Home
        </li>
        <li onClick={() => navigateToPage("/contact")} className="hover:bg-red-600 text-3xl px-4 py-2 rounded-md cursor-pointer">
          Contact us
        </li>
        <li onClick={() => navigateToPage("/about")} className="hover:bg-red-600 text-3xl px-4 py-2 rounded-md cursor-pointer">
          About
        </li>
        <li onClick={() => navigateToPage("/policy")} className="hover:bg-red-600 text-3xl px-4 py-2 rounded-md cursor-pointer">
          Our Services
        </li>
      </ul>
    </div>
  );

  return (
    <div className="bg-slate-500 text-white fixed py-4 lg:py-0 w-full top-0">
      <div className="z-50 flex justify-between flex-wrap w-[92%] items-center mx-auto">
        <div className="block">
          <h2 className="font-bold text-2xl">Tailwind-css</h2>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden md:hidden">
          <button className="text-2xl block transition" onClick={toggleMenu}>
            {value ? <RxCross2 /> : <AiOutlineMenu />}
          </button>
          {value && content}
        </div>
        {/* Mobile Menu Toggle */}

        {/* Desktop Menu */}
        <div className="hidden z-0 lg:flex md:flex lg:justify-between lg:items-center">
          <NavLink to="/">
            <li className="hover:bg-red-600 list-none  px-4 py-2 rounded-md cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li className="hover:bg-red-600 list-none px-4 py-2 rounded-md cursor-pointer">
              Contact us
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="hover:bg-red-600 list-none px-4 py-2 rounded-md cursor-pointer">
              About
            </li>
          </NavLink>
          <NavLink to="/policy">
            <li className="hover:bg-red-600 list-none px-4 py-2 rounded-md cursor-pointer">
              Our Services
            </li>
          </NavLink>
        </div>
        {/* Desktop Menu */}
      </div>
    </div>
  );
};

export default Header;