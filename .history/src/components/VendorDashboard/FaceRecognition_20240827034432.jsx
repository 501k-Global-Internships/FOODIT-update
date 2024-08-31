import React, { useState } from "react";
import kitchenImage from "../../assets/kitchen-image.svg";
import faceRecognition from "../../assets/face-recognition.svg";
import Navbar from "../../layouts/navbar/navbar";

const FaceRecognition = () => {
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageUpload = () => {
    // Implement image upload logic
    setImageUploaded(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 max-w-md flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-[#F8A307] text-center">
              Let's Know you better
            </h2>
            <div className="mb-6 flex flex-col items-center">
              <div
                className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={handleImageUpload}
              >
                {imageUploaded ? (
                  <img
                    src="uploaded-image-url"
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={faceRecognition}
                    alt="Face Recognition"
                    className="w-24 h-24"
                  />
                )}
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center max-w-xs">
                Tap on the face above to take a selfie image showing your
                business in the background
              </p>
            </div>
            <button className="w-full max-w-xs bg-[#F6821F] text-white py-3 rounded-md hover:bg-opacity-90 transition duration-300">
              Continue
            </button>
          </div>
          <div className="w-full md:w-1/3 max-w-md">
            <img
              src={kitchenImage}
              alt="Kitchen"
              className="rounded-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
