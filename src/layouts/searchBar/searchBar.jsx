import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for a food or vendor"
        className="w-[17rem] px-4 py-2 pl-12 rounded-full bg-[#FFECC930] text-white placeholder-[#EDEDE9]"
      />
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
        <div className="bg-[#F08F00] p-1.5 rounded-full">
          <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;