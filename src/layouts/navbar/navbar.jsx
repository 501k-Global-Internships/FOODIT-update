import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/whiteLogo.svg";
import Cart from "../../assets/shopping-cart.svg";
import { useCart } from '../../Context/CartContext';
import './navbar.css'

const Navbar = () => {
  const { cartCount } = useCart();
  const [isGetStartedClicked, setIsGetStartedClicked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGetStartedClick = () => {
    setIsGetStartedClicked(!isGetStartedClicked);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCartClick = () => {
    setIsCartClicked(!isCartClicked);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navBackground = scrollY > 0 ? 'rgba(26, 26, 26, 0.26)' : 'transparent';
  const navBlur = scrollY > 0 ? '8px' : '0px';

  return (

    <div 
      className="fixed top-0 px-4 md:px-[3rem] left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: navBackground,
        backdropFilter: `blur(${navBlur})`,
        WebkitBackdropFilter: `blur(${navBlur})`, // for Safari
      }}
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="FoodIt Logo" className="h-7" />

    <div
      className={`navs transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}  h-[100px]`}
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
        
        {/* Desktop NavItems */}
        <div className="hidden md:flex justify-center">
          <div className="bg-[#1A1A1A42] rounded-full flex gap-2 lg:gap-[5rem] justify-center px-4 py-2">
            <NavItem text="Home" active />
            <NavItem text="About Us" />
            <NavItem text="Become A Vendor" />
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">

          <button
            onClick={handleCartClick}
            className="bg-[#F08F00] p-1 sm:p-2 rounded-full flex flex-row justify-items-center text-white"
          >

          <button className={`${isScrolled ? "bg-[#F08F00]" : "bg-[#F08F00]"} p-1 sm:p-2  rounded-full flex flex-row justify-items-center text-white`}>

            <img src={Cart} alt="Cart" className="h-5 w-5 sm:h-6 sm:w-6" />
            {isCartClicked && <p>{cartCount}</p>}
          </button>
          <div className="relative hidden md:block">
            <button
              onClick={handleGetStartedClick}


              className={`px-3 py-2 sm:px-4 sm:py-3 rounded-full flex items-center justify-center w-32 sm:w-40 text-xs sm:text-sm whitespace-nowrap ${
                isGetStartedClicked
                  ? "bg-[#FFFFFF] text-[#F8A307] ring-2 ring-[#F8A307]"
                  : "bg-[#F08F00] text-white"
              }`}

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

                <Link
                  to="/signup"
                  className="block w-full text-center px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm bg-[#2562FF] text-white rounded-full ring-2 ring-[#FFFFFF]"
                >

                <NavLink to='/signup' className="block w-full text-center px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm bg-[#2562FF] text-white rounded-full ring-2 ring-[#FFFFFF]">

                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-white hover:bg-[#1A1A1A42]"
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] p-4">
          <NavItem text="Home" active />
          <NavItem text="About Us" />
          <NavItem text="Become A Vendor" />
          <button
            onClick={handleGetStartedClick}
            className="mt-4 w-full px-3 py-2 rounded-full text-center text-sm bg-[#F08F00] text-white"
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};


const NavItem = ({ text, active }) => (
  <Link
    to="/"
    className={`block py-2 px-4 rounded-full text-sm ${
      active ? "bg-[#141414]" : ""
    } text-white hover:bg-[#141414] transition-colors`}

const NavItem = ({ text, active, isScrolled }) => (
  <NavLink
    to='/'
    className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full mx-1 sm:mx-2 text-xs ${active ? (isScrolled ? "bg-gray-200" : "bg-[#141414]") : ""} ${isScrolled ? "text-black hover:bg-gray-200" : "text-white hover:bg-[#141414]"} transition-colors`}

  >
    {text}
  </NavLink>
);

export default Navbar;