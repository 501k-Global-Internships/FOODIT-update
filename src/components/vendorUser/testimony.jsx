import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function Testimony() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} className={`w-[16px] h-[16px] ${i <= rating ? "text-yellow-500" : "text-[#B9BBBD]"}`} />
      );
    }
    return stars;
  };

  return (
    <div className="bg-black w-[100%] h-[100%] flex flex-col justify-center items-center gap-10">
      <h1 className="font-mont font-black text-white text-[26px] pt-20">
        DELE
        <span className="font-mont font-semibold text-[#E58D3A] text-[26px]">
          CANTEEN
        </span>
      </h1>
      <p className="font-mont font-black text-white text-[26px]">Testimonies</p>
      <div className='w-[100%] h-[100%] flex flex-row justify-center px-20'>
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {[
            {
              name: "Jona Sena",
              date: "2 days ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
              rating: 3,
              img: "path/to/image1.jpg"
            },
            {
              name: "Anna Smith",
              date: "3 days ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
              rating: 4.5,
              img: "path/to/image2.jpg"
            },
            {
              name: "John Doe",
              date: "5 days ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
              rating: 5,
              img: "path/to/image3.jpg"
            },
            {
              name: "Sarah Brown",
              date: "1 week ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
              rating: 4,
              img: "path/to/image4.jpg"
            },
            {
              name: "Michael Lee",
              date: "2 weeks ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
              rating: 4.5,
              img: "path/to/image5.jpg"
            }
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-[458px] h-[271px] rounded-[15px] bg-white flex flex-row items-center">
                <div className='flex flex-col gap-5 py-8 px-5'>
                  <div className="flex flex-row gap-5 items-center">
                    <img src={slide.img} alt={slide.name} className="w-[54px] h-[54px] rounded-[32px]" />
                    <div className="flex flex-col">
                      <h2 className="font-mont font-medium text-[21px] text-[#464255]">{slide.name}</h2>
                      <p className="font-mont font-medium text-[15px] text-[#A3A3A3]">{slide.date}</p>
                    </div>
                  </div>
                  <p className="font-mont font-medium text-[14px] text-[#464255] w-[248px]">{slide.text}</p>
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex flex-row">
                      {renderStars(Math.round(slide.rating))}
                    </div>
                    <p>{slide.rating.toFixed(1)}</p>
                  </div>
                </div>
                <img src={slide.img} alt={slide.name} className="w-[223px] h-[223px] bg-red-700 relative" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[883px] h-[216px] bg-[#1E1D1D] rounded-[62px] mb-20 flex flex-row justify-start gap-10 items-center">
            <img src="" alt="" className="w-[259px] h-[216px] bg-red-800 rounded-tl-[26px] rounded-bl-[26px]"/>
            <div className="flex flex-col gap-9 justify-center items-center">
                <p className="w-[461px] font-mont font-normal text-[18px] text-white">Subscribe to our news LETTER to hear more from us</p>
                <div className="w-[520px] h-[68px] bg-white rounded-[40px] flex flex-row items-center px-4 gap-2">
                    <button className="bg-black w-[92px] h-[48px] rounded-[24px] text-white t">
                        Email
                    </button>
                    <input type="text" className="w-[392px] h-[48px] outline-none "/>
                </div>
            </div>
      </div>
    </div>
  );
}