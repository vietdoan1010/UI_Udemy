import React from "react";
import { Autoplay, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavButtons from "../button/SwiperNavButtons";
const dataLocal = [
  "Python",
  "JavaSript",
  "React JS",
  "C#",
  "Machine Learning",
  "Web Development",
  "Data Science",
  "Java",
  "Unity",
  "Unreal Engine",
  "SQL",
  "C++",
  "Google Flutter",
  "Angular",
  "Software Testing",
  "CSS",
  " Docker",
  "ChatGPT",
];
const PopularTopics = () => {
  return (
    <section className="page-container mb-10">
      <h1 className="text-2xl font-bold mb-5">Popular topics</h1>
      <Swiper
        cssMode={true}
        slidesPerView={5}
        grabCursor={"true"}
        spaceBetween={10}
        // navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <div className="grid grid-cols-2 gap-2 max-w-[1200px]">
          {dataLocal.map((items) => (
            <SwiperSlide>
              <div className="flex items-center justify-center text-[16px] font-bold border borer-transparent borer-b-slate-200 py-4 cursor-pointer hover:bg-slate-100">
                {items}
              </div>
            </SwiperSlide>
          ))}
        </div>
        <SwiperNavButtons
          positionLeftBtn={`top-[5px] left-0`}
          positionRightBtn={`top-[5px] right-0`}
          sizeButton="w-12 h-12"
        ></SwiperNavButtons>
      </Swiper>
    </section>
  );
};

export default PopularTopics;
