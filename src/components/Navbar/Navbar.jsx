import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar2 = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <div
      className="navbar shadow-md w-full fixed top-0 left-0"
      style={{ fontSize: isScrolling ? 15 : null }}
    >
      <div className="flex items-center mx-auto px-4 sm:px-6 lg:px-8 py-5 ">
        {/*        navlinks */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              className="img-logo"
              src="../../../public/assets/logo1-2.png"
            />
          </NavLink>
        </div>
        <div className="hidden md:block flex-links">
          <div className="flex space-x-4 w-full justify-start">
            <NavLink
              to="/"
              className="nav-text text-white hover:text-gray-400 duration-500"
            >
              INICIO
            </NavLink>

            <NavLink
              to="/about"
              className="nav-text text-white hover:text-gray-400 duration-500"
            >
              NOSOTROS
            </NavLink>

            <NavLink
              to="/obras"
              className="nav-text text-white hover:text-gray-400 duration-500"
            >
              OBRAS
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-text text-white hover:text-gray-400 duration-500"
            >
              CONTACTO
            </NavLink>
          </div>
        </div>
        <div className="items-center justify-between h-16">
          <div className="flex items-center justify-between h-16">
            {/*    hamburguer button  */}
            <div className="hamburger-menu">
              <button
                type="button"
                onClick={handleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open Main Menu</span>
                {open == true ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*   mobile-menu */}
      {open ? (
        <div className="md:hidden">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div>
              <NavLink
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                INICIO
              </NavLink>

              <NavLink
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base  font-medium"
              >
                NOSOTROS
              </NavLink>

              <NavLink
                to="/obras"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base  font-medium"
              >
                OBRAS
              </NavLink>

              <NavLink
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                CONTACTO
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar2;
