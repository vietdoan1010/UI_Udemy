import React, { Fragment } from "react";
import Button from "../button/Button";
import CourseCard from "../course/CourseCard";
import { dataViewingStudents } from "../../data/dataConfig";

const FrequentlyBoughtTogether = ({ imgMobile = false }) => {
  return (
    <section className="border border-slate-200 p-6">
      <h1 className="text-2xl font-bold mb-5">Frequently Bought Together</h1>
      <div className="relative">
        {dataViewingStudents &&
          dataViewingStudents
            .slice(0, 3)
            .map((items) => (
              <CourseCard
                img={items.img_course}
                title={items.title}
                instructer={items.instructor}
                rate={items.rate}
                reviewing={items.reviewing}
                currentPrice={items.current_price}
                oldPrice={items.original_price}
                bestSeller={items.best_seller}
                styleBanner
                adjustParent="relative py-2 gap-5"
                adjustImg="w-[90px]"
                imgMobile={imgMobile}
                adjustPrice={`flex-col ${
                  imgMobile ? "" : "absolute right-0 top-0 bottom-none"
                } `}
                adjustFontSize="max-w-[260px]"
              ></CourseCard>
            ))}
        {!imgMobile && (
          <Fragment>
            <div className="absolute top-[130px] left-[100px] flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute top-[280px] left-[100px] flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Fragment>
        )}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1 text-xl">
          Total:
          <p className="font-bold">
            <span className="underline">đ</span>5,897,000
          </p>
        </div>
        <Button
          className="bg-btnadd text-white font-bold"
          square="px-3 py-4"
          borderNone
        >
          Add all to cart
        </Button>
      </div>
    </section>
  );
};

export default FrequentlyBoughtTogether;
