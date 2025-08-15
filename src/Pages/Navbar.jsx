import React from 'react';
import myLogo from '../assets/ChatGPT Image Aug 15, 2025, 08_58_52 AM.png'; 
import { FaArrowDown } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a
          href="#heroSection"
          className="btn btn-ghost text-sm font-medium text-gray-700 hover:text-[#12526d] transition"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="btn btn-ghost text-sm font-medium text-gray-700 hover:text-[#12526d] transition"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="btn btn-ghost text-sm font-medium text-gray-700 hover:text-[#12526d] transition"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="btn btn-ghost text-sm font-medium text-gray-700 hover:text-[#12526d] transition"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#education"
          className="btn btn-ghost text-sm font-medium text-gray-700 hover:text-[#12526d] transition"
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="btn btn-ghost text-sm font-medium text-gray-700 hover:text-[#12526d] transition"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100" id="home">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <img src={myLogo} alt="Logo" className="w-25 h-18" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline text-sm font-medium text-gray-700 hover:text-[#12526d] transition">
          Resume <FaArrowDown />
        </a>
      </div>
    </div>
  );
};

export default Navbar;