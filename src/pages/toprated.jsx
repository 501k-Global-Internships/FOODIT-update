import React from 'react';
import { useNavigate } from 'react-router-dom';
import NAVBAR from '../layouts/navbar/cartnav';
import FVENDOR from '../components/fvendor';
import CHOICENAV from '../layouts/navbar/choicenav';
import vendor from '../assets/vendor.svg'

const foodItems = new Array(15).fill({
  imageUrl: vendor, 
  name: 'DELE CANTEEN',
  location: 'Lekki',
  description: 'One Fufu, Peppered Beef & Ponmo',
});

export default function Toprated() {
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    navigate('/vendor', { state: { item } });
  };

  return (
    <div className='nextbg'>
      <NAVBAR />
      <div className='w-[100%] h-[100%] min-h-[100vh] gap-20 flex flex-col justify-center items-center'>
        <CHOICENAV />
        <FVENDOR />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {foodItems.map((item, index) => (
            <div
              key={index}
              className='w-[338px] h-[460px] overflow-hidden flex flex-col justify-center items-center mb-10 cursor-pointer'
              onClick={() => handleCardClick(item)}
            >
              <img
                src={item.imageUrl}
                alt=''
                className='w-[338px] h-[338px] rounded-[54px]'
              />
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}