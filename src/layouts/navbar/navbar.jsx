import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/whiteLogo.svg";
import Cart from "../../assets/shopping-cart.svg";
import { useCart } from "../../Context/CartContext";
import "./navbar.css";

const Navbar = () => {
  const { cartCount, hasItems } = useCart();
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGetStartedClick = () => {
    if (isLoginMode) {
      navigate("/login");
    } else {
      setIsLoginMode(true);
      setIsDropdownOpen(true);
    }
  };

  const handleCartClick = () => {
    // Add any cart click functionality here
    // For example, open a cart modal
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navBackground = scrollY > 0 ? "rgba(26, 26, 26, 0.26)" : "transparent";
  const navBlur = scrollY > 0 ? "8px" : "0px";

  const isAboutPage = location.pathname === "/about";
  const isVendorPage = location.pathname === "/vendorLanding";

  return (
    <div
      className="fixed top-0 px-4 md:px-[3rem] left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: navBackground,
        backdropFilter: `blur(${navBlur})`,
        WebkitBackdropFilter: `blur(${navBlur})`,
      }}
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="FoodIt Logo" className="h-7" />
        </div>

        {/* Desktop NavItems */}
        <div className="hidden md:flex justify-center">
          <div className="bg-[#1A1A1A42] rounded-full flex gap-2 lg:gap-[5rem] justify-center px-4 py-2">
            <NavItem text="Home" to="/" isActive={isVendorPage}  />
            <NavItem text="About Us" to="/about" />
            {!isAboutPage && !isVendorPage && <NavItem text="Become A Vendor" to="/vendor" />}
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {!isVendorPage && (
            <button
              onClick={handleCartClick}
              className="bg-[#F08F00] p-1 sm:p-2 rounded-full flex flex-row justify-items-center text-white relative"
            >
              <img src={Cart} alt="Cart" className="h-5 w-5 sm:h-6 sm:w-6" />
              {hasItems && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          )}
          <div className="relative hidden md:block">
            <button
              onClick={handleGetStartedClick}
              className={`px-3 py-2 sm:px-4 sm:py-3 rounded-full flex items-center justify-center w-32 sm:w-40 text-xs sm:text-sm whitespace-nowrap ${
                isLoginMode
                  ? "bg-[#FFFFFF] text-[#F8A307] ring-2 ring-[#F8A307]"
                  : "bg-[#F08F00] text-white"
              }`}
            >
              <span className="flex-grow text-center">
                {isLoginMode ? "Login" : "Get Started"}
              </span>
              {!isLoginMode && (
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              )}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 sm:w-40">
                <NavLink
                  to="/signup"
                  className="block w-full text-center px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm bg-[#2562FF] text-white rounded-full ring-2 ring-[#FFFFFF]"
                  onClick={() => setIsDropdownOpen(false)}
                >
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
          <NavItem text="Home" to="/" />
          <NavItem text="About Us" to="/about" />
          {!isAboutPage && !isVendorPage && <NavItem text="Become A Vendor" to="/vendor" />}
          <button
            onClick={handleGetStartedClick}
            className="block mt-4 w-full px-3 py-2 rounded-full text-center text-sm bg-[#F08F00] text-white"
          >
            {isLoginMode ? "Login" : "Get Started"}
          </button>
          {isLoginMode && (
            <NavLink
              to="/signup"
              className="block mt-2 w-full px-3 py-2 rounded-full text-center text-sm bg-[#2562FF] text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

const NavItem = ({ text, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block py-2 px-4 rounded-full text-sm ${
        isActive ? "bg-[#141414]" : ""
      } text-white hover:bg-[#141414] transition-colors`
    }
  >
    {text}
  </NavLink>
);

export default Navbar;