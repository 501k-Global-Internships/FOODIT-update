import Navbar from "../layouts/navbar/navbar";
import chefCooking from '../assets/chef-cooking.svg'
import iconDelivery from '../assets/247.svg'
import { Link } from "react-router-dom";

const VendorLanding = () => {
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        <div 
          className="bg-cover bg-center min-h-screen"
          style={{ backgroundImage: `url(${chefCooking})` }}
        >
          <Navbar />
          <div className="container mx-auto px- pt-24 md:pt-32">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-[#F7F6F4]">Fresh Food,</span><br />
              <span className="text-[#F08F00]">Fast Delivery.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#F7F6F4]">
              Become A Vendor, And Get A Free <span className="text-[#F08F00]">Website</span> To Showcase<br />
              Your Food In Seconds
            </p>
            <div className="space-x-4">
              <Link className="bg-transparent border-2 border-[#F08F00] text-[#F08F00] px-6 py-2 rounded-full hover:bg-[#F08F00] hover:text-white transition duration-300">
                LOGIN
              </button>
              <button className="bg-[#F08F00] text-white px-6 py-2 rounded-full hover:bg-[#F08F00]/80 transition duration-300">
                SIGNUP
              </button>
            </div>
          </div>
          <div className="container mx-auto px-4 absolute bottom-8 left-0 right-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
              <Feature icon={iconDelivery} text="24/7 Delivery Service Provided." />
              <Feature icon={iconDelivery} text="24/7 Customer Support And Daily Reconciliations." />
              <Feature icon={iconDelivery} text="Showcase Your Food On Our Landing Page/Foodbuddy" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const Feature = ({ icon, text }) => (
    <div className="flex items-center mb-4 md:mb-0">
      <img src={icon} alt="Icon" className="w-6 h-6 mr-2" />
      <span className="text-[#F7F6F4]">{text}</span>
    </div>
  );
  
  export default VendorLanding;