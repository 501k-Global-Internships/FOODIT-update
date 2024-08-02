import { useEffect, useState } from "react";
import aboutImg from "../../assets/aboutImg.svg";
import './topography.css'

const AboutUs = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white w-full min-h-screen py-28 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 mb-10 sm:mb-20">
          <div className="w-full md:w-1/2">
            <h1 className="heading-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              Welcome
              <br />
              To <span className="text-[#F08F00]">Food</span>It
            </h1>
            <p className="body-text text-sm sm:text-base">
              At <span className="text-[#F08F00] font-bold">FOOD</span>IT, we
              believe that food is more than just sustenance;
              it's an experience, a story, and a way to bring people together.
              Our journey began with a passion for culinary excellence and a
              commitment to creating memorable dining experiences.
            </p>
          </div>
          <div className="w-full md:w-[50rem] flex justify-center items-center mt-6 md:mt-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-full relative">
              <div 
                className={`absolute inset-0 bg-white rounded-full transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              <img
                src={aboutImg}
                alt="Food collage"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-4">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <p className="body-text text-sm sm:text-base">
              Our philosophy is simple:{" "}
              <span className="text-[#F08F00]">
                fresh, local, and sustainable
              </span>
              .
              We partner with local vendors and restaurants to
              ensure that customers have access to foods of highest
              quality which also includes supporting our community
              and promoting sustainability. Each dish is crafted with
              care, combining traditional techniques with innovative
              flavors to delight your palate.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 mb-6 md:mb-0">
            <h2 className="heading-text text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
              <span className="block text-left">Our</span>
              <span className="block text-left text-[#F08F00]">Philosophy</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;