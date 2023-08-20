import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../button/Button";
import { dataCustomerStories } from "../../data/dataConfig";

const BannerCustomer = () => {
  return (
    <section className="banner-customer h-[350px] max-w-[900px] mx-auto">
      <Swiper
        cssMode={true}
        grabCursor="true"
        slidesPerView={"auto"}
        navigation={true}
        modules={[Autoplay, Navigation]}
        // autoplay={true}
        autoplay={{ delay: 3000 }}
      >
        {dataCustomerStories &&
          dataCustomerStories.map((items) => (
            <SwiperSlide>
              <BannerItem
                content={items.content}
                img={items.img_customer}
                name={items.name_customer}
                career={items.career}
                company={items.company}
              ></BannerItem>
            </SwiperSlide>
          ))}
        {/* <SwiperNavButtons
          positionLeftBtn="left-5 bottom-[70px]"
          positionRightBtn="right-5 bottom-[70px]"
          // sizeButton="w-12 h-12"
          // positionLeftBtn="left-[-10px] bottom-[20px]"
        ></SwiperNavButtons> */}
      </Swiper>
    </section>
  );
};
function BannerItem({ content, img, name, career, company }) {
  // const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 w-full h-full border border-slate-300 p-6">
      <div className="flex flex-col items-start h-full">
        <img
          src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
          alt=""
          className="w-6 h-5 object-cover mb-5"
        />
        {content.map((items) => (
          <p className="text-[16px]">
            {items.content_start}{" "}
            <span className="font-bold">{items.content_bold}</span>{" "}
            {items.content_end}
          </p>
        ))}
        <Button
          borderNone
          square="py-0 px-0"
          className="text-[16px] font-bold text-purple-700 mt-auto border border-b-purple-700 border-transparent"
        >
          Read full story
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={img}
          alt=""
          className="w-[120px] h-[120px] rounded-full mb-9"
        />
        <h2 className="text-lg font-bold">{name}</h2>
        {career.map((items) => (
          <span className="text-[15px] opacity-50">{items.career_items}</span>
        ))}
        <p className="text-[15px] mt-4">{company}</p>
      </div>
    </div>
  );
}

export default BannerCustomer;
