import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

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

  return (
    <div
      className="navbar shadow-md w-full fixed top-0 left-0"
      style={{ fontSize: isScrolling ? 15 : null }}
    >
      <div className="md:flex items-center justify-start  py-6 md:px-10 px-7 mx-3">
        <NavLink to="/">
          <div>
            <img
              className="img-logo"
              src="../../../public/assets/logo1-2.png"
            />
          </div>
        </NavLink>

        <ul className="md:flex md: items-center">
          <li className="md:ml-2 text-sm nav-text">
            <NavLink
              to="/"
              className="nav-text text-gray-800 hover:text-gray-400 duration-500"
            >
              INICIO
            </NavLink>
          </li>
          <li className="md:ml-4   text-sm">
            <NavLink
              to="/about"
              className="nav-text text-gray-800 hover:text-gray-400 duration-500"
            >
              NOSOTROS
            </NavLink>
          </li>
          <li className="md:ml-4 text-sm">
            <NavLink
              to="/obras"
              className="nav-text text-gray-800 hover:text-gray-400 duration-500"
            >
              OBRAS
            </NavLink>
          </li>
          <li className="md:ml-4 text-sm">
            <NavLink
              to="/tienda"
              className="nav-text text-gray-800 hover:text-gray-400 duration-500"
            >
              TIENDA
            </NavLink>
          </li>
          <li className="md:ml-4 text-sm">
            <NavLink
              to="/contacto"
              className="nav-text text-gray-800 hover:text-gray-400 duration-500"
            >
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
