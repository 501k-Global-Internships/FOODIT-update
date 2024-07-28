import React, { useState, useRef } from 'react';
import NAVBAR from '../layouts/navbar/navbar2'
import IMAGE3 from '../assets/smiley-man-eating-restaurant 3.png'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Login() {
 
  const navigate = useNavigate();

  const handleSignupButton =() => {
    navigate('/signup');
  }

  const handleFoodButton =() => {
    navigate('/foodnearby');
  }

  return (
    <div className=''>
        <NAVBAR />
        <div className=' w-[100%] h-[100%] min-h-[100vh]'>
            <div className=' bg-white w-[100%] h-[100%] min-h-[100vh] flex flex-row gap-36 justify-end  '>
                <div className=' bg-white h-[100%] w-[547px] min-h-[100vh] flex flex-row justify-center items-center'>
                    <form>

                        <div onClick={handleSignupButton} className='flex flex-row items-center mb-2'>
                            <IoMdArrowRoundBack className='w-[28px] h-[28px] text-[#78667E] cursor-pointer' />
                            <p className='text-[#78667E] font-mont font-normal text-[16px]'>Back</p>
                        </div>

                        <h1 className='text-black font-mont font-bold text-[18px] mb-7'>Login to continue</h1>

                        <label htmlFor="" className=''>
                                <p className='text-black font-mont font-bold text-[18px]'>Enter Email</p>
                                <input type="email" placeholder='testing@gmail.com' className=' border-[1px] w-[456px] h-[60px] rounded-[600px] px-3 outline-none mb-5'/>
                        </label>

                        <label htmlFor="">
                                <p className='text-black font-mont font-bold text-[18px]'>Password</p>
                                <input type="password" placeholder='Enter Password' className='border-[1px] mb-5 w-[456px] h-[60px] rounded-[600px] px-3 outline-none'/>
                        </label>

                        <div className='flex flex-col justify-center items-center pb-5'>
                            <NavLink to='' className='text-[#F6821F] font-medium font-mont text-[18px]'>Forgotten Password</NavLink>
                            <p className='text-black font-medium font-mont text-[18px]'>Don't have an account?<NavLink to='/signup' className=' font-medium font-mont text-[18px] text-[#F6821F]'>Sign Up</NavLink></p>
                        </div>

                        <button onClick={handleFoodButton} className='w-[456px] h-[60px] rounded-[600px] text-white font-bold font-mont text-[18px] bg-[#F6821F] items-center'>Login</button>
                    </form>
                </div>


                <div className=' bg-white h-[100%] w-[625px] min-h-[0vh] flex justify-center items-center '>
                    <img src={IMAGE3} alt=""  className='w-[100%] h-[100vh]'/>
                   
                </div>
            </div>
        </div>
    </div>
  )
}
