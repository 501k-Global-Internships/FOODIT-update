import React, { useState } from 'react';
import NAVBAR from '../layouts/navbar/cartnav';
import CHOICENAV from '../layouts/navbar/choicenav';
import TOPFOODS from '../components/topfood';
import { useCart } from '../Context/CartContext';
import food from '../assets/food.svg'
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";


const foodItems = new Array(15).fill({
  address: '4.9 [2k Review]',
  imageUrl: food, 
  price: '#15,000',
  name: 'DELE CANTEEN',
  location: 'Lekki',
  description: 'One Fufu, Peppered Beef & Ponmo',
});

export default function Foodnearby() {

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart();
  };

  const [showItems, setShowItems] = useState(false);

  const handleToggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div className='nextbg'>
      <NAVBAR />
      <div className='w-[100%] h-[100%] min-h-[100vh] gap-20 flex flex-col justify-center items-center '>
        <CHOICENAV />
        
        {!showItems && <TOPFOODS />}
        
        <button
          onClick={handleToggleItems}
          className='bg-[#F08F00] w-[161px] h-[48px] text-white font-mont font-medium text-[18px] mb-7 rounded-[23px]'
        >
          {showItems ? 'CLOSE' : 'VIEW MORE'}
        </button>

        {showItems && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
            {foodItems.map((item, index) => (
              <div
                key={index}
                className='w-[338px] h-[550px] overflow-hidden flex flex-col justify-center items-center mb-10'
              >
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-[#6E6B65] text-center font-mont font-normal text-[12px] relative top-14 rounded-[17px] w-[112px] h-[23px] bg-white place-content-center flex flex-row items-center'>
                  <FaStar className='w-[13px] h-[13px] text-[#F08F00]'/>{item.address}
                  </p>
                  <img
                    src={item.imageUrl}
                    alt=''
                    className='w-[338px] h-[338px] rounded-[54px]'
                  />
                  <p className='text-[#6E6B65] font-mont font-bold text-center text-[22px] relative bottom-14 rounded-[17px] w-[143px] h-[46px] bg-white place-content-center'>
                    {item.price}
                  </p>
                </div>

                <div className='flex flex-row gap-1'>
                  <h2 className='font-mont font-bold text-[16px] text-[#6E6B65]'>
                    {item.name}
                  </h2>
                  <p className='border-[1px] bg-[#D9BD8B] w-[55px] h-[27px] content-center text-center text-white font-mont font-normal text-[17px] rounded-[12px] items-center'>
                    {item.location}
                  </p>
                </div>

                <p className='font-mont font-normal text-[16px] text-[#6E6B65]'>
                  {item.description}
                </p>

                <button onClick={handleAddToCart} className='bg-[#F08F00] w-[161px] h-[48px] text-white font-mont font-medium text-[18px] mb-7 rounded-[23px] flex flex-row items-center gap-1 place-content-center'><FaPlus className=''/>
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}