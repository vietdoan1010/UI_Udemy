import React from "react";
import { Autoplay, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavButtons from "../button/SwiperNavButtons";
import { dataPupularInstructors } from "../../data/dataConfig";

const PopularInstructors = ({
  table,
  items = 4,
  heightItems = "h-[160px]",
}) => {
  return (
    <section className={`page-container w-full mb-10 ${table}`}>
      <h1 className="text-2xl font-bold mb-5">Popular Instructors</h1>
      <Swiper
        slidesPerView={items}
        grabCursor={"true"}
        spaceBetween={10}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        // autoplay={true}
      >
        {dataPupularInstructors.map((items) => (
          <SwiperSlide>
            <div
              className={`flex items-start gap-4 ${heightItems} border borer-transparent borer-b-slate-200 p-4 hover:bg-slate-100`}
            >
              <img
                src={items.avatar_instructor}
                alt=""
                className="w-16 h-16 rounded-full border border-slate-200"
              />
              <div>
                <h2 className="popular-instructor text-[16px] font-bold">
                  {items.name_instructor}
                </h2>
                <p className="text-sm text-slate-800">{items.traing}</p>
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-[16px] text-star font-bold">
                    {items.rate}
                  </p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                    className="w-3 h-3"
                  />
                  <p className="text-xs text-textstart">Instructor Rating</p>
                </div>
                <div className="flex items-center gap-1 text-xs mb-1">
                  <p className="font-bold">{items.amount_students}</p>
                  <p className="text-slate-800">students</p>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <p className="font-bold">{items.amount_courses}</p>
                  <p className="text-slate-800">courses</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons
          positionLeftBtn={`bottom-1/4 left-2`}
          positionRightBtn={`bottom-1/4 right-2`}
          sizeButton="w-10 h-10"
        ></SwiperNavButtons>
      </Swiper>
    </section>
  );
};

export default PopularInstructors;
