import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/Asset 1@4x 3.svg';
import { BsCart4 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar2() {
  const navigate = useNavigate();
  const handleSignupButton = () => {
    navigate('/signup');
  }
  const handleLoginButton = () => {
    navigate('/login');
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} bg-transparent md:bg-opacity-50 md:backdrop-blur-md px-4 md:px-20 flex flex-col md:flex-row justify-between items-center`}>
      <img src={logo} alt="Logo" className='w-[150px] md:w-[206px] h-auto md:h-[47px] mb-4 md:mb-0' />
      
      <ul className={`flex flex-wrap justify-center md:flex-row ${isScrolled ? 'md:bg-[#1A1A1A26] text-black' : 'text-white'} justify-evenly w-full md:w-[410px] h-auto md:h-[53px] rounded-[26px] items-center font-mont mb-4 md:mb-0`}>
        <NavLink to='' className={`hover:border-[1px] py-2 px-2 md:py-0 ${isScrolled ? 'text-black' : 'text-white'}`}>Home</NavLink>
        <NavLink to='' className={`hover:border-[1px] py-2 px-2 md:py-0 ${isScrolled ? 'text-black' : 'text-white'}`}>About Us</NavLink>
        <NavLink to='' className={`hover:border-[1px] py-2 px-2 md:py-0 ${isScrolled ? 'text-black' : 'text-white'}`}>Become A Vendor</NavLink>
      </ul>

      <div className='flex flex-row gap-2 md:gap-6'>
        <div className={`w-[44px] md:w-[54px] h-[44px] ${isScrolled ? 'bg-white' : 'bg-[#F08F00]'} rounded-[28px] place-content-center px-3 cursor-pointer flex items-center justify-center`}>
          <BsCart4 className={`${isScrolled ? 'text-[#F08F00]' : 'text-white'} w-[20px] md:w-[24px] h-[20px] md:h-[24px]`} />
        </div>
        <select className='w-[120px] md:w-[163px] h-[40px] md:h-[47px] rounded-[23px] bg-[#F08F00] text-white cursor-pointer font-mont text-sm md:text-base'>
          <option value="" hidden>Get Started</option>
          <option onClick={handleLoginButton} value="">Login</option>
          <option onClick={handleSignupButton} value="">Signup</option>
        </select>
      </div>
    </nav>
  );
}