import React, { useState } from "react";
import NewsImg from "../../assets/nigerianeating.svg";
import Logo from "../../assets/foodblack.svg";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-[4rem] bg-white">
      <div className="flex justify-center mb-4">
        <img src={Logo} alt="foodit" className="w-64 h-24 sm:w-64 sm:h-24" />
      </div>

      <div className="rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[25rem]">
            <img
              src={NewsImg}
              alt="Man enjoying food"
              className="w-full h-[19rem] lg:h-full object-cover"
            />
          </div>
          <div className="py-6 px-4 lg:px-[6rem] w-full flex flex-col justify-center bg-[#3C3C3C] rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl">
            <h2 className="text-white lg:text-[.856rem] text-[1rem] mb-4 uppercase sm:text-left">
              Subscribe to our newsletter to hear{" "}
              <br className="hidden sm:inline-block" /> more from us
            </h2>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                className="w-full lg:w-[20rem] p-3 rounded-full text-black"
              />
              {!email && (
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full pointer-events-none sm:text-sm">
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
