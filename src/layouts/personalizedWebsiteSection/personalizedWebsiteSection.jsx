import React from "react";
import Logo from '../../assets/personalize.svg'

const PersonalizedWebsiteSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[#232322] text-[#FFFFFF] flex flex-col items-center justify-center py-12 px-8 rounded-3xl max-w-4xl w-full mx-4">
        <img src={Logo} alt="personalized website" className="w-full max-w-[39rem] mb-[2rem]" />
        {/* Main content */}
        <h1 className="text-4xl md:text-[2.5rem] font-bold text-center mb-[1.6rem]">
          Get A Personalised Website !
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 max-w-xl">
          Become A Vendor, And Get A Free Website To Showcase Your Food In Seconds
        </p>
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 w-full mb-[2rem]">
          <FeatureItem text="24/7 Delivery Service Provided." />
          <FeatureItem text="Easy To Customize And Upload Your Own Images." />
          <FeatureItem text="24/7 Customer Support And Daily Reconciliations." />
          <FeatureItem text="Option To Request For Brand Design And Packaging." />
          <FeatureItem text="Showcase Your Food On Our Landing Page/Foodbuddy" />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ text }) => (
  <div className="flex items-center">
    <svg
      width="40"
      height="40"
      className="w-6 h-6 mr-2 flex-shrink-0"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7188 20.0006L17.6649 23.9631L25.5735 16.0381"
        stroke="white"
        strokeWidth="2.4561"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6003 4.36225C18.7301 3.39618 20.5804 3.39618 21.7266 4.36225L24.3137 6.58911C24.8049 7.01484 25.7219 7.35869 26.3768 7.35869H29.1604C30.896 7.35869 32.3206 8.78323 32.3206 10.5189V13.3025C32.3206 13.9411 32.6644 14.8744 33.0902 15.3656L35.317 17.9527C36.2831 19.0825 36.2831 20.9328 35.317 22.0789L33.0902 24.666C32.6644 25.1573 32.3206 26.0742 32.3206 26.7292V29.5128C32.3206 31.2484 30.896 32.6729 29.1604 32.6729H26.3768C25.7382 32.6729 24.8049 33.0168 24.3137 33.4425L21.7266 35.6694C20.5968 36.6355 18.7465 36.6355 17.6003 35.6694L15.0132 33.4425C14.522 33.0168 13.6051 32.6729 12.9501 32.6729H10.1174C8.38176 32.6729 6.95722 31.2484 6.95722 29.5128V26.7128C6.95722 26.0742 6.61336 25.1573 6.20401 24.666L3.99352 22.0626C3.04383 20.9328 3.04383 19.0989 3.99352 17.9691L6.20401 15.3656C6.61336 14.8744 6.95722 13.9574 6.95722 13.3188V10.5025C6.95722 8.76686 8.38176 7.34232 10.1174 7.34232H12.9501C13.5887 7.34232 14.522 6.99846 15.0132 6.57274L17.6003 4.36225Z"
        stroke="white"
        strokeWidth="2.4561"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span>{text}</span>
  </div>
);

export default PersonalizedWebsiteSection;