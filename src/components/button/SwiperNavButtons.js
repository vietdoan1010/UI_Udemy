import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = ({
  sizeButton = false,
  positionLeftBtn = false,
  positionRightBtn = false,
}) => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns">
      <button
        onClick={() => swiper.slidePrev(1000)}
        className={`flex justify-center items-center absolute ${
          positionLeftBtn ? positionLeftBtn : "left-5 top-[180px]"
        }  ${
          sizeButton ? sizeButton : "w-10 h-10"
        } bg-black rounded-full shadow-2xl hover:bg-slate-700 transition-all`}
        style={{ zIndex: 1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={() => swiper.slideNext(1000)}
        className={`flex justify-center items-center absolute ${
          positionRightBtn ? positionRightBtn : "right-5 top-[180px]"
        }  ${
          sizeButton ? sizeButton : "w-10 h-10"
        } bg-black rounded-full shadow-md hover:bg-slate-700 transition-all`}
        style={{ zIndex: 1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default SwiperNavButtons;
