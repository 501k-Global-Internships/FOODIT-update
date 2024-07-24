import React from 'react'
import logo from '../../assets/Asset 3@4x 1.svg';
import { NavLink } from 'react-router-dom'


export default function vendorfooter() {
  return (
    <div className='w-[100%] h-[386px] bg-[#633B00] flex flex-row justify-center items-center gap-36'>
        <img src={logo} alt="" />
        <div className='flex flex-row justify-center items-center gap-28'>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <h2 className='text-white '>Company</h2>
                <ul className='flex flex-col gap-5 justify-center items-center'>
                    <li><NavLink to='/landingpage' className='text-white '>Home</NavLink></li>
                    <li><NavLink to='' className='text-white '>About Us</NavLink></li>
                    <li><NavLink to='' className='text-white '>FAQs</NavLink></li>
                </ul>  
            </div>

            <div className='flex flex-col gap-10 items-center'>
                <h2 className='text-white '>Services</h2>
                <ul className='flex flex-col gap-5 items-center'>
                    <li><NavLink to='/landingpage' className='text-white '>Menu</NavLink></li>
                    <li><NavLink to='' className='text-white '>Vendor List</NavLink></li>
                    <li><NavLink to='' className='text-white '>Support</NavLink></li>
                    <li><NavLink to='' className='text-white '>Geolocator</NavLink></li>
                </ul>  
            </div>


            <div className='flex flex-col gap-10 items-center'>
                <h2 className='text-white '>Social</h2>
                <ul className='flex flex-col gap-5 items-center'>
                    <li><NavLink to='/landingpage' className='text-white '>Instagram</NavLink></li>
                    <li><NavLink to='' className='text-white '>Twitter</NavLink></li>
                    <li><NavLink to='' className='text-white '>Facebook</NavLink></li>
                    <li><NavLink to='' className='text-white '>LinkedIn</NavLink></li>
                </ul>  
            </div>
        </div>
    </div>
  )
}
