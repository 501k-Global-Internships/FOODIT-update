import React, { useState } from "react";
import Navbar from "./Navbar"; // Import the Navbar component you provided
import kitchenImage from "";
import uploadIcon from "../assets/upload-icon.svg"; // You'll need to add this icon

const DocumentUpload = () => {
  const [nin, setNin] = useState("");
  const [cacDocument, setCacDocument] = useState(null);
  const [kitchenImage, setKitchenImage] = useState(null);
  const [storeImage, setStoreImage] = useState(null);

  const handleFileUpload = (setter) => (event) => {
    const file = event.target.files[0];
    setter(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nin"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter NIN
              </label>
              <input
                type="text"
                id="nin"
                value={nin}
                onChange={(e) => setNin(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-[#F08F00] focus:border-[#F08F00]"
                required
              />
            </div>
            <FileUploadField
              id="cac-document"
              label="Upload CAC document"
              onChange={handleFileUpload(setCacDocument)}
            />
            <FileUploadField
              id="kitchen-image"
              label="Upload image of Kitchen area"
              onChange={handleFileUpload(setKitchenImage)}
            />
            <FileUploadField
              id="store-image"
              label="Upload image of outside your store"
              onChange={handleFileUpload(setStoreImage)}
            />
            <button
              type="submit"
              className="w-full bg-[#F6821F] text-white py-3 rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Continue
            </button>
          </form>
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

const FileUploadField = ({ id, label, onChange }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <div className="relative">
      <input type="file" id={id} onChange={onChange} className="hidden" />
      <label
        htmlFor={id}
        className="w-full bg-gray-100 text-gray-600 py-2 px-4 rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-200 transition duration-300"
      >
        <span>{label}</span>
        <img src={uploadIcon} alt="Upload" className="w-5 h-5" />
      </label>
    </div>
  </div>
);

export default DocumentUpload;
