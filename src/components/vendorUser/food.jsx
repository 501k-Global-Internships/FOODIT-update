import React from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useCart } from '../../Context/CartContext';
import food from '../../assets/food.svg'


export default function Food() {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
      addToCart();
    };
    
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const items = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        address: '123 Main St',
        imageSrc: food, 
        price: '#15,000',
        name: 'DELE CANTEEN',
        location: 'Lekki',
        description: 'One Fufu, Peppered Beef & Ponmo',
    }));


    const renderItems = (slideIndex) => (
        items.slice(slideIndex * 6, (slideIndex + 1) * 6).map((item, index) => (
            <div key={item.id} className='w-[338px] h-[460px] overflow-hidden flex flex-col justify-center items-center mb-10'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[#6E6B65] text-center font-mont font-normal text-[14px] relative top-14 rounded-[17px] w-[112px] h-[23px] bg-white place-content-center'>{item.address}</p>
                    <img src={item.imageSrc} alt="" className='w-[338px] h-[338px] rounded-[54px]'/>
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
    <div className=' bg-black w-[100%] h-[100%] flex flex-col justify-center items-center gap-10'>
        <h1 className='font-mont font-black text-white text-[26px] pt-20'>DELE<span className='font-mont font-semibold text-[#E58D3A] text-[26px]'>CANTEEN</span></h1>

        <ul className={`flex flex-row  bg-[#1A1A1A26] text-white justify-evenly w-[1078px] h-[53px] rounded-[26px] items-center font-mont`}>
            <NavLink to='' className={`hover:bg-[#E58D3A] hover:h-[30p] text-white`}>All</NavLink>
            <NavLink to='' className={`hover:bg-[#E58D3A] hover:h-[30p] text-white`}>Swallow</NavLink>
            <NavLink to='' className={`hover:bg-[#E58D3A] hover:h-[30p] text-white`}>Breakfast</NavLink>
            <NavLink to='' className={`hover:bg-[#E58D3A] hover:h-[30p] text-white`}>Cereals</NavLink>
            <NavLink to='' className={`hover:bg-[#E58D3A] hover:h-[30p] text-white`}>Brunch</NavLink>
            <NavLink to='' className={`hover:bg-[#E58D3A] hover:h-[30p] text-white`}>Noodles</NavLink>
            <NavLink to='' className={`hover:bg-[#E58D3A] hover:h-[30p] text-white`}>Beans</NavLink>
            <NavLink to='' className={`hover:bg-[#E58D3A] hover:h-[30p] text-white`}>Frenchies</NavLink>
            <NavLink to='' className={`hover:bg-[#E58D3A] hover:h-[30p] text-white`}>Chinese</NavLink>
        </ul>

        <div className='w-[100%] h-[100%] flex flex-row justify-center px-24'>
                <Swiper   pagination={pagination}
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={15} className="mySwiper text-white">
                    {Array.from({ length: Math.ceil(items.length / 3) }, (_, slideIndex) => (
                        <SwiperSlide key={slideIndex}>
                            <div className='grid grid-cols-3 justify-center gap-5'>
                                {renderItems(slideIndex)}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
           </div>
    </div>
  )
}