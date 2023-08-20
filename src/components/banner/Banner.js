import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import SwiperNavButtons from "../button/SwiperNavButtons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = ({
  heightBanner = "h-[400px]",
  btnLeft,
  btnRight,
  hiddenContent,
}) => {
  return (
    <section className={`banner ${heightBanner} max-w-[1360px] mx-auto mb-20`}>
      <Swiper
        // slidesPerView={2}
        cssMode={true}
        grabCursor="true"
        slidesPerView={"auto"}
        // mousewheel={true}
        // keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={true}
        // className="mySwiper"
      >
        <SwiperSlide>
          <BannerItem
            image="https://img-b.udemycdn.com/notices/home_carousel_slide/image/7c10f728-ee9c-4cf1-8235-15a8a56092ed.jpg"
            title="Learning that lasts"
            content="Invest in yourself. Log in now for special savings on courses. Sale ends March 30."
            hiddenContent={hiddenContent}
          ></BannerItem>
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem hiddenContent={hiddenContent}></BannerItem>
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem
            image="https://img-b.udemycdn.com/notices/web_carousel_slide/image/4d5387e2-04db-4085-bfa3-7a005d2b2da8.jpg"
            hiddenContent={hiddenContent}
          ></BannerItem>
        </SwiperSlide>
        <SwiperNavButtons
          positionLeftBtn={btnLeft}
          positionRightBtn={btnRight}
        ></SwiperNavButtons>
      </Swiper>
    </section>
  );
};
function BannerItem({
  image = "",
  title = "Unlock the power of your people",
  content = "Udemy Business is trusted by 12.5K+ companies around the world.",
  hiddenContent = false,
}) {
  // const navigate = useNavigate();
  return (
    <div className="w-full h-full relative">
      <div className="overlay absolute inset-0"></div>
      <img
        src={`${
          image
            ? ""
            : "https://img-b.udemycdn.com/notices/web_carousel_slide/image/785695e9-5e74-486e-98d5-27354a474246.jpg"
        } ${image}`}
        alt=""
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute top-[70px] left-[70px] w-[450px] bg-white p-5 shadow-md ${
          hiddenContent ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col gap-x-3">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-[16px]">
            {content}
            <a href="#" className="underline text-blue-800">
              Find out what we can do for yours.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
