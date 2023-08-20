import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { dataFeaturedTeacher } from "../../data/dataConfig";
import { Autoplay, Navigation } from "swiper";

const SlidesTeacherFeatured = ({
  grid,
  width = "max-w-[900px]",
  height = "h-[400px]",
  padding = "",
}) => {
  return (
    <section className={`slide-teacher ${width} ${height} mx-auto ${padding}`}>
      <Swiper
        cssMode={true}
        grabCursor="true"
        navigation={true}
        slidesPerView={"auto"}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
      >
        {dataFeaturedTeacher &&
          dataFeaturedTeacher.map((items) => (
            <SwiperSlide>
              <BannerItem
                img={items.avatar_teacher}
                comment={items.comment_teacher}
                name={items.name_teacher}
                career={items.career_teacher}
                grid={grid}
              ></BannerItem>
            </SwiperSlide>
          ))}
        {/* <SwiperNavButtons
          positionLeftBtn="bottom-[180px]"
          positionRightBtn="bottom-[180px]"
          sizeButton="w-12 h-12"
        ></SwiperNavButtons> */}
      </Swiper>
    </section>
  );
};
function BannerItem({ img, comment, name, career, grid = "grid grid-cols-2" }) {
  return (
    <div className={`${grid} w-full h-full gap-6 bg-slate-100`}>
      <img src={img} alt="" className="w-auto h-full" />
      <div className="flex flex-col items-start justify-center">
        <p className="text-2xl mb-5">{comment}</p>
        <h5 className="text-[15px] font-bold">{name}</h5>
        <h6 className="text-[16px] opacity-50">{career}</h6>
      </div>
    </div>
  );
}
export default SlidesTeacherFeatured;
