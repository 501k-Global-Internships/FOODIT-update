import React, { useState } from "react";
import Kitchen from "../../assets/kitchen-image.svg";
import uploadIcon from "../../assets/upload-icon.svg";
import Navbar from "../../layouts/navbar/navbar";

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
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar cla />
      <div className="flex-grow flex items-center justify-center px-4 py-12 sm:pb-5">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
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
          <div className="w-full md:w-1/3 max-w-md">
            <img src={Kitchen} alt="Kitchen" className="rounded-full w-full" />
          </div>
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
    <div className="relative flex items-center">
      <input type="file" id={id} onChange={onChange} className="hidden" />
      <label
        htmlFor={id}
        className="w-full bg-gray-100 text-gray-600 py-2 px-4 rounded-l-md cursor-pointer hover:bg-gray-200 transition duration-300"
      >
        {label}
      </label>
      <div className="p-2 rounded-r-md">
        <img src={uploadIcon} alt="Upload" className="w-5 h-5" />
      </div>
    </div>
  </div>
);

export default DocumentUpload;
