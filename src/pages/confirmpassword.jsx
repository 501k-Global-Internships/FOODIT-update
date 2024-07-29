import React, { useState, useRef } from 'react';
import NAVBAR from '../layouts/navbar/navbar2'
import IMAGE3 from '../assets/pngwing.com - 2024-02-29T193711 1.svg'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Confirmpassword() {

    const navigate = useNavigate();

  const handleSignupButton =() => {
    navigate('/forgetpassword');
  }

  const handleFoodButton =() => {
    navigate('/newpassword');
  }

    const [values, setValues] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
  
    const handleChange = (e, index) => {
      const { value } = e.target;
      if (value.length > 1) return;
  
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);
  
      if (value !== '' && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    };
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

                    <h2 className='text-black font-mont font-bold text-[18px]'>Enter OTP</h2>

                <p className='w-[467px] text-black font-mont font-normal text-[14px] mb-5'>We sent an 6 digit One Time Password  (OTP) to your 
                registered line +234 816 001 152 3952</p>

                    <div className='flex flex-row justify-between mb-5'>
                        {values.map((val, index) => (
                            <input
                            key={index}
                            type="number"
                            name="com"
                            value={val}
                            onChange={(e) => handleChange(e, index)}
                            ref={(el) => inputRefs.current[index] = el}
                            className='w-[57px] h-[55px] border-[1px] rounded-[600px] text-center'
                            />
                        ))}
                    </div>

                    <button onClick={handleFoodButton} className='w-[456px] h-[60px] rounded-[600px] text-white font-bold font-mont text-[18px] bg-[#F6821F] items-center'>Continue</button>
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
