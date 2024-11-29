import briq from "../images/briqLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import K from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3">
        <span className="w-10 h-10 flex-shrink-0">
          <img src={briq} alt="logo" />
        </span>
        <div className="hidden md:flex gap-x-5">
          {K.NAVLINKS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="border border-[#10CC9F] px-3 py-2 rounded transition duration-200 hover:bg-[#10CC9F] hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#10CC9F] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-5 py-3 bg-white max-w-sm mx-auto shadow-lg rounded-md">
          {K.NAVLINKS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="border border-[#10CC9F] w-full text-left px-3 py-2 rounded transition duration-200 hover:bg-[#10CC9F] hover:text-white mb-1"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
