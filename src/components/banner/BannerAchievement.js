import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../button/Button";
import { dataGoalsAchieving } from "../../data/dataConfig";

const BannerAchievement = () => {
  return (
    <section className="banner-achievement h-[320px] w-full mx-auto">
      <Swiper
        // slidesPerView={3}
        spaceBetween={17}
        grabCursor="true"
        slidesPerView={"auto"}
      >
        {dataGoalsAchieving &&
          dataGoalsAchieving.map((items) => (
            <SwiperSlide>
              <BannerItem
                content={items.content}
                name={items.full_name}
                shotName={items.short_name}
                btnText={items.btn_concerning}
              ></BannerItem>
            </SwiperSlide>
          ))}
        {/* <SwiperNavButtons
          positionLeftBtn="left-1 bottom-1"
          positionRightBtn="right-1 bottom-1"
          sizeButton="w-8 h-8"
        ></SwiperNavButtons> */}
      </Swiper>
    </section>
  );
};
function BannerItem({ content, shotName, name, btnText }) {
  return (
    <div className="flex flex-col justify-start w-full h-full border bg-white border-slate-300 p-6 overflow-hidden">
      <img
        src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
        alt=""
        className="w-6 h-5 object-cover mb-5"
      />
      {content.map((items) => (
        <p className="text-[15px] mb-5">
          {items.content_start}{" "}
          <span className="font-bold">{items.content_bold}</span>{" "}
          {items.content_end}
        </p>
      ))}
      <div className="mt-auto">
        <div className="flex items-center mb-5">
          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-black mr-2">
            {shotName}
          </div>
          <span className="text-sm font-bold">{name}</span>
        </div>
        <Button
          borderNone
          className="flex items-center justify-center text-[15px] text-left font-bold border border-t-slate-200 border-transparent mt-auto text-purple-700 hover:text-purple-900 hover:bg-transparent"
        >
          <div className="mr-2">
            <div className="flex items-center justify-center w-7 h-7 bg-purple-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </div>
          </div>
          {btnText}
        </Button>
      </div>
    </div>
  );
}

export default BannerAchievement;
