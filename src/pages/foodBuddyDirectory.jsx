import React from "react";
import { ArrowLeft} from "lucide-react";
import dominosImage from "../../src/assets/dominions.svg";
import trialsImage from "../../src/assets/trails.svg";
import deleImage from "../../src/assets/dele.svg";
import majorKayImage from "../../src/assets/majorKay.svg";
import madukewiImage from "../../src/assets/madukewi.svg";
import molarikeImage from "../../src/assets/molarike.svg";
import licksImage from "../../src/assets/licks.svg";
import tintinkoImage from "../../src/assets/tintinko.svg";
import hugoImage from "../../src/assets/hugo.svg";
import { Link } from "react-router-dom";

const VendorCard = ({ name, streetNumber, location, image }) => (
  <div className="flex flex-col gap-4 max-w-[240px] mx-auto">
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-3xl"
      />
    </div>
    <div className="mt-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-sm text-white">{name}</h3>
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          {location}
        </span>
      </div>
      <p className="text-xs text-gray-400 mt-1">{streetNumber}</p>
    </div>
  </div>
);

const FoodBuddyDirectory = () => {
  const vendors = [
    {
      name: "DOMINOS CA...",
      streetNumber: "12, Musuliu street Behind...",
      location: "Lekki",
      image: dominosImage,
    },
    {
      name: "TRAILS CANTE...",
      streetNumber: "Oladokun street,block 15...",
      location: "Oshodi",
      image: trialsImage,
    },
    {
      name: "DELE CANTEEN",
      streetNumber: "3, Kunle Ajayi street Mad..",
      location: "Ojo",
      image: deleImage,
    },
    {
      name: "MAJOR KAY",
      streetNumber: "12, Musuliu street Behind...",
      location: "Alagbado",
      image: majorKayImage,
    },
    {
      name: "MADUKIWE C...",
      streetNumber: "Oladokun Street,block 15...",
      location: "Ketu",
      image: madukewiImage,
    },
    {
      name: "MOLARIKE TEE",
      streetNumber: "3, Kunle Ajayi street Mad..",
      location: "Yaba",
      image: molarikeImage,
    },
    {
      name: "LOCAS & Drinks",
      streetNumber: "12, Musuliu street Behind...",
      location: "Alaba",
      image: licksImage,
    },
    {
      name: "TINTINYO RAILS",
      streetNumber: "Oladokun Street,block 15...",
      location: "Oshodi",
      image: tintinkoImage,
    },
    {
      name: "HUGO FRIES",
      streetNumber: "3, Kunle Ajayi street Mad..",
      location: "Ipaja",
      image: hugoImage,
    },
    {
      name: "MAJOR KAY",
      streetNumber: "12, Musuliu street Behind...",
      location: "Alagbado",
      image: majorKayImage,
    },
    {
      name: "MADUKIWE C...",
      streetNumber: "Oladokun Street,block 15...",
      location: "Ketu",
      image: madukewiImage,
    },
  ];

  return (
    <div className="bg-[#131211] py-[4rem]">
      <div className=" mb-[4rem]">
        <div className="flex items-center justify-center text-center gap-3 mb-2">
          <Link to="/" className="mr-4">
            <div className="bg-white rounded-full p-2">
              <ArrowLeft className="text-black" size={19} />
            </div>
          </Link>
          <h1 className="text-[#F08F00] lg:text-[5rem] text-4xl font-bold">
            WELCOME TO FOOD BUDDY
          </h1>
        </div>
        <p className="text-[#F08F00] mb-[6rem] mt-[2rem] text-[1.5rem] text-center">
          Our comprehensive list of all vendors available on the website
        </p>

        <h2 className="text-[#F2F2F2] text-2xl mb-4 text-center">
          Vendor Directory
        </h2>

        <div className="relative flex justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a food or vendor"
              className="w-[20rem] px-[4rem] py-[1rem] pl-[4rem] pr-10 rounded-full bg-[#FFECC930] text-white placeholder-[#EDEDE9]"
            />
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
              <div className="bg-[#F08F00] p-1.5 rounded-full">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.25 12.4999H8.895M4.534 12.4999H2.75M4.534 12.4999C4.534 11.9217 4.76368 11.3672 5.17251 10.9584C5.58134 10.5496 6.13583 10.3199 6.714 10.3199C7.29217 10.3199 7.84666 10.5496 8.25549 10.9584C8.66432 11.3672 8.894 11.9217 8.894 12.4999C8.894 13.0781 8.66432 13.6326 8.25549 14.0414C7.84666 14.4502 7.29217 14.6799 6.714 14.6799C6.13583 14.6799 5.58134 14.4502 5.17251 14.0414C4.76368 13.6326 4.534 13.0781 4.534 12.4999ZM21.25 19.1069H15.502M15.502 19.1069C15.502 19.6852 15.2718 20.2403 14.8628 20.6492C14.4539 21.0582 13.8993 21.2879 13.321 21.2879C12.7428 21.2879 12.1883 21.0572 11.7795 20.6484C11.3707 20.2396 11.141 19.6851 11.141 19.1069M15.502 19.1069C15.502 18.5286 15.2718 17.9745 14.8628 17.5655C14.4539 17.1566 13.8993 16.9269 13.321 16.9269C12.7428 16.9269 12.1883 17.1566 11.7795 17.5654C11.3707 17.9742 11.141 18.5287 11.141 19.1069M11.141 19.1069H2.75M21.25 5.89289H18.145M13.784 5.89289H2.75M13.784 5.89289C13.784 5.31472 14.0137 4.76023 14.4225 4.3514C14.8313 3.94257 15.3858 3.71289 15.964 3.71289C16.2503 3.71289 16.5338 3.76928 16.7983 3.87883C17.0627 3.98839 17.3031 4.14897 17.5055 4.3514C17.7079 4.55383 17.8685 4.79415 17.9781 5.05864C18.0876 5.32313 18.144 5.60661 18.144 5.89289C18.144 6.17917 18.0876 6.46265 17.9781 6.72714C17.8685 6.99163 17.7079 7.23195 17.5055 7.43438C17.3031 7.63681 17.0627 7.79739 16.7983 7.90695C16.5338 8.0165 16.2503 8.07289 15.964 8.07289C15.3858 8.07289 14.8313 7.84321 14.4225 7.43438C14.0137 7.02555 13.784 6.47106 13.784 5.89289Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 max-w-7xl mx-auto px-4">
        {vendors.map((vendor, index) => (
          <VendorCard key={index} {...vendor} />
        ))}
      </div>
    </div>
  );
};

export default FoodBuddyDirectory;