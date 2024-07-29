import React from 'react'
import NAVBAR from '../layouts/navbar/navbar2'
import IMAGE3 from '../assets/pngwing.com - 2024-02-29T193711 1.svg'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


export default function Newpassword() {

    const navigate = useNavigate();

    const handleSignupButton =() => {
      navigate('/passwordconfirmation');
    }
    
  return (
    <div className=''>
    <NAVBAR />
    <div className=' w-[100%] h-[100%] min-h-[100vh] flex justify-center items-center pt-[60px]'>
        <div className=' bg-white w-[1280px] h-[100%] min-h-[90vh] flex flex-row justify-between px-10 '>
            <div className=' bg-white h-[100%] w-[547px] min-h-[90vh] flex flex-row justify-center items-center'>
                <form action="">

                    

                <p className='w-[467px] text-black font-mont font-normal text-[14px] mb-5'>Enter New Password</p>

                    <div className='flex flex-col gap-5 justify-between mb-5'>
                        <input type="number" name="com" className='border-[1px] mb-5 w-[456px] h-[60px] rounded-[600px] px-3 outline-none' placeholder='New Password'/>
                        <input type="number" name="com" className='border-[1px] mb-5 w-[456px] h-[60px] rounded-[600px] px-3 outline-none' placeholder='Confirm Password'/>
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
