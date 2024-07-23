import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { IoSearchSharp } from "react-icons/io5";
import { useCart } from '../Context/CartContext';
import food from '../assests/food.svg'

export default function TopFood() {

    const { addToCart } = useCart();

    const handleAddToCart = () => {
      addToCart();
    };

    const items = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        name: "DELE CANTEEN",
        location: "Lekki",
        description: "One Fufu, Peppered Beef & Ponmo",
        price: "#15,000",
        address: "123 Main St",
        imgSrc: food
    }));

    const renderItems = (slideIndex) => (
        items.slice(slideIndex * 3, (slideIndex + 1) * 3).map((item, index) => (
            <div key={item.id} className='w-[338px] h-[460px] overflow-hidden flex flex-col justify-center items-center mb-10'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[#6E6B65] text-center font-mont font-normal text-[14px] relative top-14 rounded-[17px] w-[112px] h-[23px] bg-white place-content-center'>{item.address}</p>
                    <img src={item.imgSrc} alt="" className='w-[338px] h-[338px] rounded-[54px]'/>
                    <p className='text-[#6E6B65] font-mont font-bold text-center text-[22px] relative bottom-14 rounded-[17px] w-[143px] h-[46px] bg-white place-content-center'>{item.price}</p>
                </div>
                <div className='flex flex-row gap-1'>
                    <h2 className='font-mont font-bold text-[16px] text-[#6E6B65]'>{item.name}</h2>
                    <p className='border-[1px] bg-[#D9BD8B] w-[55px] h-[27px] content-center text-center text-white font-mont font-normal text-[17px] rounded-[12px] items-center'>{item.location}</p>
                </div>
                <p className='font-mont font-normal text-[16px] text-[#6E6B65]'>{item.description}</p>
                <button onClick={handleAddToCart} className='bg-[#F08F00] w-[161px] h-[48px] text-white font-mont font-medium text-[18px] mb-7 rounded-[23px]'>ADD TO CART</button>
            </div>
        ))
    );

    return (
        <div className='w-[100%] h-[100%] flex flex-col justify-center items-center gap-12'>
            {/* <h2 className='text-center'>TOP FOOD</h2> */}
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
           {/* <div className='w-[385px] h-[79px] rounded-[40px] bg-opacity-50 backdrop-blur-md flex flex-row px-5 justify-center items-center gap-5 mb-10'>
                <button className='w-[54px] h-[50px] rounded-[23px] bg-[#E58D3A] place-content-center px-3'>
                    <IoSearchSharp  className='text-white w-[24px] h-[24px]' />
                </button>
                <input type="text" placeholder='Search for a Food or vendor' className='w-[282px] h-[48px] bg-transparent outline-none font-mont font-medium text-white text-[18px]'/>
           </div> */}
    </div>
  )
}