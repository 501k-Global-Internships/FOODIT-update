import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext'; 
import logo from '../../assets/Asset 3@4x 1.svg';



export default function Cartnav() {
  const { cartCount } = useCart();

  const navigate = useNavigate();

  const handleCartButton =() => {
    navigate('/cart');
  }

  return (
    <nav className={`navbar bg-opacity-50 backdrop-blur-md px-[120px] flex flex-row justify-between items-center `}>
      <img src={logo} alt="Logo" className='w-[206px] h-[47px]' />
      <ul className={`flex flex-row  bg-[#1A1A1A26] text-white justify-evenly w-[410px] h-[53px] rounded-[26px] items-center font-mont`}>
        <NavLink to='' className={`hover:border-[1px] text-white`}>Home</NavLink>
        <NavLink to='' className={`hover:border-[1px] text-white`}>About Us</NavLink>
        <NavLink to='' className={`hover:border-[1px] text-white`}>Favourite Vendor</NavLink>
      </ul>
      <div onClick={handleCartButton} className={`w-[112px] h-[44px] rounded-[9px] bg-[#F8A307] text-white gap-2 flex flex-row items-center px-3 cursor-pointer`}>
        <p>Cart</p>
        <BsCart4 className={`w-[24px] h-[24px]`} />
        <p>{cartCount}</p> 
      </div>
    </nav>
  );
}