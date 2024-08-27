import React, { useState } from 'react';

import kitchenImage from '../../assets/kitchen-image.svg';
import faceRecognition from '../../assets/f';
import Navbar from '../../layouts/navbar/navbar';

const FaceRecognition = () => {
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageUpload = () => {
    // Implement image uploadlog
    setImageUploaded(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-[#F8A307]">Let's Know you better</h2>
          <div className="mb-6 flex flex-col items-center">
            <div 
              className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={handleImageUpload}
            >
              {imageUploaded ? (
                <img src="uploaded-image-url" alt="Uploaded" className="w-full h-full object-cover" />
              ) : (
                <img src={faceRecognition} alt="Face Recognition" className="w-24 h-24" />
              )}
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Tap on the face above to take a selfie image showing your business in the background
            </p>
          </div>
          <button
            className="w-full bg-[#F6821F] text-white py-3 rounded-md hover:bg-opacity-90 transition duration-300"
          >
            Continue
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src={kitchenImage}
            alt="Kitchen"
            className="rounded-full w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;