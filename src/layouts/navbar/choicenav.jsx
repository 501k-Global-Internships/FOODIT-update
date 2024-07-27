import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";

export default function Choicenav() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
  };

  return (
    <div className='relative'>
      <ul className={`flex flex-row bg-[#1A1A1A26] text-white justify-evenly w-[744px] h-[53px] rounded-[26px] items-center font-mont mt-40`}>
        <NavLink to='/foodnearby' className={`hover:border-[1px] hover:h-[34px] hover:bg-[#E58D3A] hover:rounded-[15px] hover:w-[200px] hover:text-center hover:place-content-center text-white`}>FOOD NEAR BY</NavLink>
        <NavLink to='/toprated' className={`hover:border-[1px] hover:h-[34px] hover:bg-[#E58D3A] hover:rounded-[15px] hover:w-[160px] hover:text-center hover:place-content-center text-white`}>TOP FOOD</NavLink>
        <NavLink to='/frequentlyorder' className={`hover:border-[1px] hover:h-[34px] hover:bg-[#E58D3A] hover:rounded-[15px] hover:w-[230px] hover:text-center hover:place-content-center text-white`}>FREQUENTLY ORDERED</NavLink>
        <NavLink to='/supriseme' className={`hover:border-[1px] hover:h-[34px] hover:bg-[#E58D3A] hover:rounded-[15px] hover:w-[180px] hover:text-center hover:place-content-center text-white`}>SUPRISE ME</NavLink>
        <button 
          onClick={handleSearchToggle} 
          className='w-[54px] h-[50px] rounded-[23px] bg-[#E58D3A] place-content-center px-3'>
          <IoSearchSharp className='text-white w-[24px] h-[24px]' />
        </button>
      </ul>

      {showSearch && (
        <>
          <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 '></div>
          <div className='absolute top-full left-0 right-0 mt-2 bg-transparent rounded-[26px] shadow-lg p-4 z-20'>
            <div className='flex justify-between items-center mb-4'>
              <input 
                type='text' 
                placeholder='Search...' 
                className='flex-1 h-[48px] px-4 border border-gray-300 rounded-[12px]' 
              />
              <button 
                onClick={handleCloseSearch} 
                className='w-[40px] h-[40px] bg-[#E58D3A] text-white rounded-[50%] flex justify-center items-center'>
                <IoCloseSharp className='w-[20px] h-[20px]' />
              </button>
            </div>
            {/* Add additional search results or filters here if needed */}
          </div>
        </>
      )}
    </div>
  );
}