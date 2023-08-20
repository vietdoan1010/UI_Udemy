import React from "react";
import { dataCourses } from "../../data/dataConfig";
import CourseCard from "../course/CourseCard";
import Button from "../button/Button";
import { useState } from "react";

const StudentsAlsoBought = ({ heart = true }) => {
  const [showMore, setShowMore] = useState(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }
  return (
    <section className="my-8">
      <h1 className="text-2xl font-bold mb-2">Student also bought</h1>
      <div className="-z-1">
        {dataCourses &&
          dataCourses
            .slice(1, 5)
            .map((items) => (
              <CourseCard
                img={items.img_course}
                title={items.title}
                rate={items.rate}
                reviewing={items.reviewing}
                currentPrice={items.current_price}
                bestSeller={items.best_seller}
                styleBanner
                borderBottom
                adjustParent="relative py-3 gap-3"
                adjustImg="h-[60px] w-[60px]"
                adjustPrice={`flex-col ${
                  heart ? "absolute right-16 top-0" : ""
                }`}
                adjustFontSize="max-w-[260px]"
                textReviewing="text-[16px]"
                positionRate={`${
                  heart ? "absolute top-0 right-1/4 gap-6 mr-5" : ""
                }`}
                oneStart={1}
                heart={heart}
              ></CourseCard>
            ))}
      </div>
      {showMore && (
        <div className="-z-1">
          {dataCourses &&
            dataCourses
              .slice(5, 10)
              .map((items) => (
                <CourseCard
                  img={items.img_course}
                  title={items.title}
                  rate={items.rate}
                  reviewing={items.reviewing}
                  currentPrice={items.current_price}
                  bestSeller={items.best_seller}
                  styleBanner
                  borderBottom
                  adjustParent="relative py-3 gap-3"
                  adjustImg="h-[60px] w-[60px]"
                  adjustPrice={`flex-col ${
                    heart ? "absolute right-16 top-0" : ""
                  }`}
                  adjustFontSize="max-w-[260px]"
                  textReviewing="text-[16px]"
                  positionRate={`${
                    heart ? "absolute top-0 right-1/4 gap-6 mr-5" : ""
                  }`}
                  oneStart={1}
                  heart={heart}
                ></CourseCard>
              ))}
        </div>
      )}
      <Button
        full
        className="text-slate-700 font-bold mt-2"
        onClick={handleShowMore}
      >
        {showMore ? "Show less" : "Show more"}
      </Button>
    </section>
  );
};

export default StudentsAlsoBought;
