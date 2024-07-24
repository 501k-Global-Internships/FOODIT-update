import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import vendor from '../assets/vendor.svg'


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


export default function Fvendor() {
    const navigate = useNavigate();

    const handleCardClick = (item) => {
      navigate('/vendor', { state: { item } });
    };
  

 

    const items = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        name: "DELE CANTEEN",
        location: "Lekki",
        description: "3, Kunle Ajayi street Mad..",
        imgSrc: vendor  
    }));

    const renderItems = (slideIndex) => (
        items.slice(slideIndex * 3, (slideIndex + 1) * 3).map((item, index) => (
            <div key={item.id} onClick={() => handleCardClick(item)} className='w-[338px] h-[460px] overflow-hidden flex flex-col justify-center items-center mb-10'>
                
                   
                <img src={item.imgSrc} alt="" className='w-[338px] h-[338px] rounded-[54px]'/>
                    
                
                <div className='flex flex-row gap-1'>
                    <h2 className='font-mont font-bold text-[16px] text-[#6E6B65]'>{item.name}</h2>
                    <p className='border-[1px] bg-[#D9BD8B] w-[55px] h-[27px] content-center text-center text-white font-mont font-normal text-[17px] rounded-[12px] items-center'>{item.location}</p>
                </div>
                <p className='font-mont font-normal text-[16px] text-[#6E6B65]'>{item.description}</p>
                
            </div>
        ))
    );

  return (
    <div className='w-[100%] h-[100%] flex flex-col justify-center items-center gap-12'>
    <h2 className='text-center text-white'>TOP RATED</h2>
    <div className='w-[100%] h-[100%] flex flex-row justify-center px-10'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {Array.from({ length: Math.ceil(items.length / 3) }, (_, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                    <div className='flex justify-center gap-5'>
                        {renderItems(slideIndex)}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
   </div>
   <div className='w-[385px] h-[79px] rounded-[40px] bg-opacity-50 backdrop-blur-md flex flex-row px-5 justify-center items-center gap-5 mb-10'>
        <button className='w-[54px] h-[50px] rounded-[23px] bg-[#E58D3A] place-content-center px-3'>
            <IoSearchSharp  className='text-white w-[24px] h-[24px]' />
        </button>
        <input type="text" placeholder='Search for a Food or vendor' className='w-[282px] h-[48px] bg-transparent outline-none font-mont font-medium text-white text-[18px]'/>
   </div>
</div>
  )
}