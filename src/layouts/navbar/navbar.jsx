import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/Asset 3@4x 1.svg';
import { BsCart4 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  const handleSignupButton =() => {
    navigate('/signup');
  }

  const handleLoginButton =() => {
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
    <nav className={`navbar px-20 flex flex-row justify-between items-center ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Logo" className='w-[206px] h-[47px]' />
      <ul className={`flex flex-row ${isScrolled ? 'bg-[#1A1A1A26] : bg-white text-black' : 'text-white'} justify-evenly w-[410px] h-[53px] rounded-[26px] items-center font-mont`}>
        <NavLink to='' className={`hover:border-[1px] ${isScrolled ? 'text-black' : 'text-white'}`}>Home</NavLink>
        <NavLink to='' className={`hover:border-[1px] ${isScrolled ? 'text-black' : 'text-white'}`}>About Us</NavLink>
        <NavLink to='' className={`hover:border-[1px] ${isScrolled ? 'text-black' : 'text-white'}`}>Become A Vendor</NavLink>
      </ul>
      <div className='flex flex-row gap-6'>
        <div className={`w-[54px] h-[44px] ${isScrolled ? 'bg-white' : 'bg-[#F08F00]'} rounded-[28px] place-content-center px-3 cursor-pointer`}>
          <BsCart4 className={`${isScrolled ? 'text-[#F08F00]' : 'text-white'} w-[24px] h-[24px]`} />
        </div>
        <select className='w-[163px] h-[47px] rounded-[23px] bg-[#F08F00] text-white cursor-pointer font-mont'>
          <option value="" hidden>Get Started</option>
          <option onClick={handleLoginButton} value="">Login</option>
          <option onClick={handleSignupButton } value="">Signup</option>
        </select>
      </div>
    </nav>
  );
}