import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import CourseCard from "./CourseCard";
import SwiperNavButtons from "../button/SwiperNavButtons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";

const ListCourse = ({
  data,
  convertCard = false,
  top = "top-[50px]",
  autoPlay = false,
  items = 5,
  adjustPrice,

  mobileSmaller,
}) => {
  return (
    <div
      className={`${
        convertCard ? "border border-slate-200 p-5" : ""
      } relative course-list`}
    >
      <Swiper
        cssMode={true}
        slidesPerView={convertCard ? "auto" : items}
        // slidesPerView={"auto"}
        grabCursor={"true"}
        spaceBetween={40}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={autoPlay}
      >
        {data &&
          data.map((item) => (
            <SwiperSlide>
              <CourseCard
                img={item.img_course}
                title={item.title}
                instructer={item.instructor}
                rate={item.rate}
                reviewing={item.reviewing}
                currentPrice={item.current_price}
                oldPrice={item.original_price}
                bestSeller={item.best_seller}
                styleBanner={convertCard}
                adjustMobileSmaller={mobileSmaller}
                adjustPrice={adjustPrice}
                // hotNew
              ></CourseCard>
            </SwiperSlide>
          ))}
        <SwiperNavButtons
          positionLeftBtn={`left-2 ${top}`}
          positionRightBtn={`right-2 ${top}`}
          sizeButton="w-12 h-12"
        ></SwiperNavButtons>
      </Swiper>
      {/* <SwiperNavButtons positionLeftBtn="left-[-100px] top-[50px]"></SwiperNavButtons> */}
    </div>
  );
};

export default ListCourse;
