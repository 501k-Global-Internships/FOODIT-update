import React, { useState, useRef } from 'react';
import NAVBAR from '../layouts/navbar/navbar2'
import IMAGE3 from '../assets/pngwing.com - 2024-02-29T193711 1.svg'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Numberpage() {

    const navigate = useNavigate();

  const handleSignupButton =() => {
    navigate('/confirmationpage');
  }
  return (
    <div className=''>
        <NAVBAR />
        <div className=' w-[100%] h-[100%] min-h-[100vh] flex justify-center items-center pt-[60px]'>
            <div className=' bg-white w-[1280px] h-[100%] min-h-[90vh] flex flex-row justify-between px-10 '>
                <div className=' bg-white h-[100%] w-[547px] min-h-[90vh] flex flex-row justify-center items-center'>
                    <form action="">

                        <div onClick={handleSignupButton} className='flex flex-row items-center mb-2'>
                            <IoMdArrowRoundBack className='w-[28px] h-[28px] text-[#78667E] cursor-pointer' />
                            <p className='text-[#78667E] font-mont font-normal text-[16px]'>Back</p>
                        </div>

                        <h1 className='text-black font-mont font-bold text-[18px] mb-7'>Confirm your Phone Number</h1>

                        <h2 className='text-black font-mont font-bold text-[18px]'>Enter Your Number</h2>

                    <p className='w-[467px] text-black font-mont font-normal text-[14px] mb-5'>Choose your country code and enter phone number</p>

                        <div className='flex flex-row gap-5 justify-between mb-5'>
                            <select className='border-[1px] mb-5 w-[95px] h-[60px] rounded-[600px] px-3 outline-none' name="" id="">
                                <option value="">+234</option>
                                <option value="">+234</option>
                            </select>
                            <input type="number" name="" className='border-[1px] mb-5 w-[356px] h-[60px] rounded-[600px] px-3 outline-none' />
                        </div>

                        <button onClick={handleSignupButton} className='w-[456px] h-[60px] rounded-[600px] text-white font-bold font-mont text-[18px] bg-[#F6821F] items-center'>Continue</button>
                    </form>
                </div>


                <div className=' bg-white h-[100%] w-[625px] min-h-[90vh] flex justify-center items-center overflow-hidden'>
                    <img src={IMAGE3} alt=""  className='w-[600px] h-[500px]'/>
                   
                </div>
            </div>
        </div>
    </div>
  )

}