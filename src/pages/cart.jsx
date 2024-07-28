import "../layouts/navbar/navbar.css";
import NAV from "../layouts/navbar/cartnav";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Cart() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const items = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    name: "DELE CANTEEN",
    location: "Lekki",
    description: "Jollof Rice , Peppered Beef & Ponmo",
    price: "# 13,500",
  }));

  const renderItems = (slideIndex) =>
    items.slice(slideIndex * 3, (slideIndex + 1) * 3).map((item, index) => (
      <div
        key={item.id}
        className="w-[984px] h-[174px] bg-[#F7F7F7] rounded-[37px] flex flex-row items-center justify-between px-6"
      >
        <div className="flex flex-row gap-5 items-center">
          <img src="" alt="" className="w-[149px] h-[134px] rounded-[21px]" />
          <div className="flex flex-col">
            <div className="flex flex-row gap-1">
              <h2 className="font-mont font-bold text-[16px] text-[#6E6B65]">
                {item.name}
              </h2>
              <p className="border-[1px] bg-[#D9BD8B] w-[55px] h-[27px] content-center text-center text-white font-mont font-normal text-[17px] rounded-[12px] items-center">
                {item.location}
              </p>
            </div>
            <p className="font-mont font-normal text-[16px] text-[#6E6B65]">
              {item.description}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-8 items-center">
          <div className="border-[1px] bg-white w-[224px] h-[58px] rounded-[17px] text-center content-center">
            <p className="font-mont font-normal text-[26px] text-[#6E6B65]">
              {item.price}
            </p>
          </div>
          <button className="bg-[#F84B40] w-[147px] h-[48px] rounded-[23px] font-mont font-medium text-white text-[18px]">
            Remove
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <NAV />
      <div className="w-[100%] h-[100%] min-h-[100vh] flex flex-col justify-center items-center nextbg">
        <div className="w-[100%] h-[100%] flex flex-row justify-center px-10  ">
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={15}
            className="mySwiper text-white "
          >
            {Array.from(
              { length: Math.ceil(items.length / 3) },
              (_, slideIndex) => (
                <SwiperSlide key={slideIndex} className=" mt-36 pb-20">
                  <div className="grid grid-cols-1 justify-center place-items-center gap-5">
                    {renderItems(slideIndex)}
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        <div className="flex flex-row justify-between gap-[600px] items-center pb-10 pt-10 z-50">
          <div className="flex flex-col">
            <p className="text-[white] font-mont font-bold text-[19px]">
              Total
            </p>
            <h2 className="text-[#E58D3A] font-mont font-semibold text-[41px]">
              # 92,500
            </h2>
          </div>

          <button className="w-[184px] h-[65px] bg-[#1158E3] rounded-[15px] text-center text-white font-mont font-bold text-[19px]">
            Pay
          </button>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination {
          buttom: 20px  
          text-align: center;
          z-index: 1000;
          color: red;
          
        }

        .swiper-pagination-bullet {
          width: 50px; 
          height: 50px; 
          background: #F7F7F7;
          opacity: 1; 
          border-radius: 50%; 
          margin: 0 5px; 
          transition: background 0.3s;
          place-content: center;
        }

        .swiper-pagination-bullet-active {
          background: #ff5733 
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
