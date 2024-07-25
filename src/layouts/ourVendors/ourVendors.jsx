import React from "react";
import chickenRLogo from "../../assets/chickenR.svg";
import pizzahubLogo from "../../assets/pizzahub.svg";
import ubereatLogo from "../../assets/ubereat.svg";
import nandosLogo from "../../assets/nandos.svg";
import wendysLogo from "../../assets/wendys.svg";

const OurVendors = () => {
  const vendors = [
    { name: "Chicken Republic", logo: chickenRLogo },
    { name: "Pizza Hut", logo: pizzahubLogo },
    { name: "Uber Eats", logo: ubereatLogo },
    { name: "Nando's", logo: nandosLogo },
    { name: "Wendy's", logo: wendysLogo },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Wave SVG */}
      <div className="relative">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1728 714"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M178.072 108.15C104.587 108.15 -18.5324 36.0499 -70.9065 0H-112V633.126C-66.0719 698.467 340.029 675.935 494.734 633.126C649.439 590.317 869.41 662.417 1060.37 702.973C1251.34 743.529 1384.29 660.164 1536.58 646.645C1658.41 635.83 1832.29 679.691 1904 702.973V130.681C1865.32 130.681 1841.15 90.1247 1742.04 54.0748C1642.94 18.0249 1524.49 36.0499 1449.55 42.8092C1374.62 49.5686 1060.37 135.187 966.101 130.681C871.827 126.175 734.043 47.3155 627.683 24.7843C521.324 2.25312 269.928 108.15 178.072 108.15Z"
            fill="#F08F00"
          />
        </svg>
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white p-4">
          <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold lg:font-extrabold text-center mb-6 sm:mb-8 md:mb-10">
            Our Vendors
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-full">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="w-14 sm:w-16 md:w-20 lg:w-32 flex flex-col items-center"
              >
                <img
                  src={vendor.logo}
                  alt={`${vendor.name} logo`}
                  className="w-full h-auto max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVendors;