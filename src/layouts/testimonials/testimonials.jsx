import React, { useState } from 'react';
import FoodItLogo from '../../assets/foodblack.svg';
import Image4 from '../../assets/image-4.svg';
import Image5 from '../../assets/image-5.svg';
import Avatar1 from '../../assets/avatar1.svg';
import Avatar2 from '../../assets/avatar2.svg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Jons Sena",
      days: "2 days ago",
      rating: 4.5,
      image: Image4,
      avatar: Avatar1,
    },
    {
      name: "Sofia",
      days: "2 days ago",
      rating: 3.0,
      image: Image5,
      avatar: Avatar2,
    },
    // Add more testimonials here as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <img src={FoodItLogo} alt="FoodIt" className="h-10 mx-auto mb-4" />
        <h2 className="text-2xl font-thin text-center text-[#5F5F5F] mb-12">Testimonies</h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <TestimonialCard {...testimonials[currentIndex]} />
          <TestimonialCard {...testimonials[(currentIndex + 1) % testimonials.length]} className="hidden md:block" />
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-orange-400 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-orange-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-orange-400 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-orange-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, days, rating, image, avatar, className }) => {
  return (
    <div className={`bg-[#FDFDFD] rounded-3xl w-full md:w-[30rem] shadow-xl p-[3rem] flex flex-col items-center md:flex-row relative overflow-visible md:mx-4 ${className}`}>
      <div className="lg:w-2/3 mb-4 md:mb-0 md:mr-6">
        <div className="flex items-center mb-2">
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full mr-4" />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{days}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="md:w-1/3 w-full flex justify-center md:absolute md:right-0 md:top-1/2 md:transform md:translate-x-1/2 md:-translate-y-1/2 mt-4 md:mt-0">
        <img src={image} alt="Food" className="w-full rounded-full sm:w-auto" />
      </div>
    </div>
  );
};

export default Testimonials;