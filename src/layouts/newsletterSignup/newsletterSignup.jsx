import React, { useState } from 'react';
import NewsImg from '../../assets/nigerianeating.svg'
import Logo from '../../assets/foodblack.svg'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-[4rem] bg-white">
      <div className="flex justify-center mb-4">
        <img src={Logo} alt="foodit" className="w-64 h-24" />
      </div>
     
      <div className="rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={NewsImg}
              alt="Man enjoying food"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-6 px-[6rem] w flex flex-col justify-center bg-[#3C3C3C] rounded-r-3xl">
            <h2 className="text-white text-[1rem] mb-4 uppercase">
              Subscribe to our newsletter to hear <br /> more from us
            </h2>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                className="lg:w-[20rem] p-3 rounded-full text-black"
              />
              {!email && (
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full pointer-events-none">
                  Email
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;