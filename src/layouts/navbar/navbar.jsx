import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/whiteLogo.svg";
import BlackLogo from "../../assets/foodblack.svg";
import Cart from "../../assets/shopping-cart.svg";
import { useCart } from '../../Context/CartContext';
import './navbar.css'

const Navbar = () => {
  const { cartCount } = useCart();
  const [isGetStartedClicked, setIsGetStartedClicked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleGetStartedClick = () => {
    setIsGetStartedClicked(!isGetStartedClicked);
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navs transition-all duration-300 ${isScrolled ? "bg-transparent" : "bg-white shadow-md"}  h-[100px]`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <img
          src={isScrolled ? BlackLogo : Logo}
          alt="FoodIt Logo"
          className="h-7"
        />

        <div className={`${isScrolled ? "bg-gray-100" : "bg-[#1A1A1A42]"} ${isScrolled ? "text-black" : "text-[#F6F6F6]"} text-xs rounded-full py-2 px-3 sm:py-3 sm:px-4 flex flex-wrap justify-center`}>
          <NavItem text="Home" active isScrolled={isScrolled} />
          <NavItem text="About Us" isScrolled={isScrolled} />
          <NavItem text="Become A Vendor" isScrolled={isScrolled} />
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className={`${isScrolled ? "bg-[#F08F00]" : "bg-[#F08F00]"} p-1 sm:p-2  rounded-full flex flex-row justify-items-center text-white`}>
            <img src={Cart} alt="Cart" className="h-5 w-5 sm:h-6 sm:w-6" />
            <p>{cartCount}</p>
          </button>
          <div className="relative">
            <button
              onClick={handleGetStartedClick}
              className={`px-3 py-2 sm:px-4 sm:py-3 rounded-full flex items-center justify-center w-32 sm:w-40 text-xs sm:text-sm whitespace-nowrap ${isGetStartedClicked ? "bg-[#FFFFFF] text-[#F8A307] ring-2 ring-[#F8A307]" : isScrolled ? "bg-[#F08F00] text-white" : "bg-[#F08F00] text-white"}`}
            >
              <span className="flex-grow text-center">
                {isGetStartedClicked ? "Login" : "Get Started"}
              </span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 sm:w-40">
                <NavLink to='/signup' className="block w-full text-center px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm bg-[#2562FF] text-white rounded-full ring-2 ring-[#FFFFFF]">
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ text, active, isScrolled }) => (
  <NavLink
    to='/'
    className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full mx-1 sm:mx-2 text-xs ${active ? (isScrolled ? "bg-gray-200" : "bg-[#141414]") : ""} ${isScrolled ? "text-black hover:bg-gray-200" : "text-white hover:bg-[#141414]"} transition-colors`}
  >
    {text}
  </NavLink>
);

export default Navbar;