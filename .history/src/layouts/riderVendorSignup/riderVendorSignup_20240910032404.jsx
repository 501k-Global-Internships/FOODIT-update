import React from 'react';
import Ride from '../../assets/ride.svg';
import Vendor from '../../assets/tastycart.svg';
import './riderVendorSignup.css';

const RiderVendorSignup = () => {
  return (
    <div className="w-full overflow-hidden relative content-wrapper">
      {/* Top scrolling text */}
      <div className="py-4 whitespace-nowrap overflow-hidden">
        <div className="animate-marquee-slow inline-block">
          {[...Array(10)].map((_, index) => (
            <span key={index} className="text-[#F08F00] text-[2.5rem] font-bold mr-8 custom-heading">
              join Our Riders & Vendors
            </span>
          ))}
        </div>
      </div>
     
      {/* Main content */}
      <div className="relative px-4 py-[13rem]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Rider card */}
          <div className="bg-[#0088C2] rounded-3xl text-white w-full md:w-1/2 max-w-md flex items-center relative z-10 overflow-hidden py-6 px-[1.6rem]">
            <div className="flex-grow">
              <h2 className="text-3xl font-bold leading-none">Become</h2>
              <p className="text-3xl font-bold leading-none mb-3">A Rider</p>
              <p className="text-sm leading-tight">Join Our Community Of Riders</p>
              <p className="text-sm leading-tight">And Earn Extra Income</p>
              <button className="bg-[#F08F00] text-white px-6 py-2 rounded-full text-sm font-bold mt-2 ring-2 ring-white">SIGNUP</button>
            </div>
            <img src={Ride} alt="Rider" className="w-40 h-40 md:w-48 md:h-48" />
          </div>
         
          {/* Vendor card */}
          <div className="bg-[#009B50] rounded-3xl text-white w-full md:w-1/2 max-w-md flex items-center  relative z-10 overflow-hidden py-6 px-[1.6rem]">
            <img src={Vendor} alt="Vendor" className="w-40 h-60 md:w-48 md:h-48 " />
            <div className="flex-grow">
              <h2 className="text-3xl font-bold leading-none">Become</h2>
              <p className="text-3xl font-bold leading-none mb-3">A Vendor</p>
              <p className="text-sm leading-tight">Join Our Community Of Vendors</p>
              <p className="text-sm leading-tight">And Earn Extra Income</p>
              < className="bg-[#F08F00] text-white px-6 py-2 rounded-full text-sm font-bold mt-2 ring-2 ring-white">SIGNUP</button>
            </div>
          </div>
        </div>
      </div>
     
      {/* Bottom scrolling text */}
      <div className="py-4 whitespace-nowrap overflow-hidden">
        <div className="animate-marquee-slow inline-block">
          {[...Array(10)].map((_, index) => (
            <span key={index} className="custom-heading text-[#F08F00] text-[2.5rem] font-bold mr-8 custom-heading">
              join Our Riders & Vendors
            </span>
          ))}
        </div>
      </div>
      {/* Wave pattern */}
      <div className="wave-pattern"></div>
    </div>
  );
};

export default RiderVendorSignup;