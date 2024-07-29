import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

export default function hero() {
  return (
    <div className='vendorbg w-[100%] h-[789px] flex flex-col justify-center items-center gap-10'>
       <div className='pr-56'>
            <h1 className='font-mont font-black text-white text-[127px] w-[959px]'>Eat<span className='font-mont font-black text-[#E58D3A] text-[127px]'> Well,</span> Click <span className='font-mont font-black text-[#E58D3A] text-[127px]'> Well.</span></h1>
            <p className='font-mont font-black text-[white] text-[21px] w-[569px]'>Welcome to <span className='font-mont font-black text-[#E58D3A] text-[21px]'>DELE CANTEEN</span>, where you get the best African Dishes and Locals </p>
       </div>

       <div className='w-[385px] h-[79px] rounded-[40px] bg-opacity-50 backdrop-blur-md flex flex-row px-5 justify-center items-center gap-5 mb-10'>
                <button className='w-[54px] h-[50px] rounded-[23px] bg-[#E58D3A] place-content-center px-3'>
                    <IoSearchSharp  className='text-white w-[24px] h-[24px]' />
                </button>
                <input type="text" placeholder='Search for a Food' className='w-[282px] h-[48px] bg-transparent outline-none font-mont font-medium text-white text-[18px]'/>
           </div>
    </div>
  )
}