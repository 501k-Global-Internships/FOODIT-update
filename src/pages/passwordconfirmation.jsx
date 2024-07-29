import React from 'react'
import NAVBAR from '../layouts/navbar/navbar2'
import IMAGE3 from '../assets/pngwing.com - 2024-02-29T193711 1.svg'
import { NavLink } from 'react-router-dom'
import check from '../assets/Checked.svg'


export default function Passwordconfirmation() {
 
  return (
    <div className=''>
    <NAVBAR />
    <div className=' w-[100%] h-[100%] min-h-[100vh] flex justify-center items-center pt-[60px]'>
        <div className=' bg-white w-[1280px] h-[100%] min-h-[90vh] flex flex-row justify-between px-10 '>
            <div className=' bg-white h-[100%] w-[547px] min-h-[90vh] flex flex-row justify-center items-center'>
                <form action="">

                    
                <img src={check} alt=""  className='w-[205px] h-[205px] pb-5'/>
                <h2 className='text-black font-mont font-bold text-[18px] pb-2'>password reset successful</h2>
                <p className='text-black font-medium font-mont text-[18px] text-center'>Go to<NavLink to='/login' className=' font-medium font-mont text-[18px] text-[#F6821F]'>Login</NavLink></p>

                   
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
