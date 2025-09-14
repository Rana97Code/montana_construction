import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data";
import { HiBars3CenterLeft } from "react-icons/hi2";
import logo from "/mohanta_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 py-2 px-4 sm:px-8 bg-[#032625] font-inter">
      <div className="relative flex items-center justify-between max-w-screen-xl mx-auto 2xl:max-w-screen-2xl">
        {/* Logo */}
        <div>
          <NavLink to="/" className="flex items-center space-x-3">
            {/* Show text only on md+ screens */}
            <h1 className="hidden md:block text-2xl font-bold text-white">
              MOHANT
            </h1>
            <img
              src={logo}
              alt="Mohanta Construction"
              className="object-contain h-14 sm:h-20 bg-white rounded-md"
            />
            <h1 className="hidden md:block text-2xl font-bold text-white">
              CONSTRUCTION
            </h1>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden space-x-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `font-semibold tracking-wide transition-colors duration-200 text-lg
                  ${
                    link.title === "Let's Talk"
                      ? "text-white px-6 py-3 rounded-full shadow-lg bg-[#458FCD] hover:bg-[#50a1e4] transform hover:scale-105 transition-all duration-300"
                      : `${
                          isActive
                            ? "text-[#aeb0b4] border-b-2 border-[#458FCD] pb-1"
                            : "text-white hover:text-[#458FCD]"
                        }`
                  }`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiBars3CenterLeft className="text-4xl text-white font-thin scale-x-[-1]" />
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-8 transition-opacity duration-300 ease-in-out bg-gray-900 opacity-100 bg-opacity-95">
              {/* Close Button */}
              <button
                aria-label="Close Menu"
                title="Close Menu"
                className="absolute p-2 text-3xl text-white transition duration-200 rounded-full top-6 right-6 hover:bg-gray-700 focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3
                    c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
                    c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                  />
                </svg>
              </button>

              {/* Mobile Navigation Links */}
              <nav className="w-full text-center">
                <ul className="space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <NavLink
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `block py-2 px-6 text-2xl font-bold tracking-wide transition-colors duration-300 rounded-xl
                          ${
                            link.title === "Let's Talk"
                              ? "bg-[#458FCD] text-white shadow-md hover:bg-[#50a1e4] focus:outline-none focus:ring-2 focus:ring-[#458FCD]"
                              : `${
                                  isActive
                                    ? "text-[#458FCD] bg-blue-100"
                                    : "text-white hover:bg-gray-800"
                                }`
                          }`
                        }
                      >
                        {link.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
