import React from 'react'
import NAVBAR from '../layouts/navbar/navbar2'
import IMAGE1 from '../assets/tdepdq5erh2m4rf2tbcc 2.svg'
import IMAGE2 from '../assets/iubtwr6kx8efworguimd 1.svg'
import IMAGE3 from '../assets/pngwing.com - 2024-02-29T193711 1.svg'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

    const navigate = useNavigate();

    const handleSignupButton =() => {
      navigate('/numberpage');
    }

  return (
    <div className=''>
        <NAVBAR />
        <div className=' w-[100%] h-[100%] min-h-[100vh] flex justify-center items-center pt-[60px]'>
            <div className=' bg-white w-[1280px] h-[100%] min-h-[90vh] flex flex-row justify-between px-10 '>
                <div className=' bg-white h-[100%] w-[547px] min-h-[90vh] flex flex-row justify-center items-center'>
                    <form action="">
                        <div className='flex flex-row justify-between mb-5'>
                            <label htmlFor="">
                                <p className='text-black font-mont font-bold text-[18px]'>First Name</p>
                                <input type="text" placeholder='Joel' className='w-[213px] h-[60px] rounded-[600px] border-[1px] px-3 outline-none'/>
                            </label>

                            <label htmlFor="">
                                <p className='text-black font-mont font-bold text-[18px]'>Last Name</p>
                                <input type="text" placeholder='Joel' className='border-[1px] w-[213px] h-[60px] rounded-[600px] px-3 outline-none'/>
                            </label>
                        </div>

                        <label htmlFor="" className=''>
                                <p className='text-black font-mont font-bold text-[18px]'>Email</p>
                                <input type="email" placeholder='testing@gmail.com' className=' border-[1px] w-[456px] h-[60px] rounded-[600px] px-3 outline-none mb-5'/>
                        </label>

                        <label htmlFor="">
                                <p className='text-black font-mont font-bold text-[18px]'>Add Location</p>
                                <input type="email" placeholder='testing@gmail.com' className='border-[1px] mb-5 w-[456px] h-[60px] rounded-[600px] px-3 outline-none'/>
                        </label>
                        <p className='w-[467px] text-black font-mont font-normal text-[14px] '>By clicking Agree and continue, I agree to FoodIt Terms of Service, Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy.</p>
                        <div className='flex flex-row gap-1 items-center mb-5'>
                            <input type="checkbox" />
                            <p className='text-black font-mont font-normal text-[14px]'>I don’t want to receive marketing emails from Homease</p>
                        </div>
                        <button onClick={handleSignupButton} className='w-[456px] h-[60px] rounded-[600px] text-white font-bold font-mont text-[18px] bg-[#F6821F] items-center'>Agree and Continue</button>
                    </form>
                </div>


                <div className=' bg-white h-[100%] w-[625px] min-h-[90vh] flex flex-row justify-center overflow-hidden'>
                    <img src={IMAGE3} alt=""  className='w-[273px] h-[273px] relative left-[390px] top-8 drop-shadow-2xl'/>
                    <img src={IMAGE2} alt=""  className='w-[273px] h-[273px] relative right-36 top-36 drop-shadow-2xl'/>
                    <img src={IMAGE1} alt=""  className='w-[274px] h-[273px] relative top-72 right-36 drop-shadow-2xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}
