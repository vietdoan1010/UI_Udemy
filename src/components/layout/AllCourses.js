import React from "react";
import { dataCourses } from "../../data/dataConfig";
import Button from "../button/Button";
import CourseCard from "../course/CourseCard";
import ArticleMoneyBack from "../others/ArticleMoneyBack";
import ShortBy from "../others/ShortBy";
import CompaniesTrustedUdemy from "./CompaniesTrustedUdemy";

const AllCourses = ({
  table,
  imgMobile,
  priceMobile = "flex-col absolute right-0 top-0 bottom-none",
  titleTable,
  hiddenResults = false,
  mobileSmaller,
  gridLogo,
  btnUdemyFull = false,
}) => {
  return (
    <section className={`page-container mb-10 ${table}`}>
      <h1 className="text-2xl font-bold mb-4">All Development courses</h1>
      <ArticleMoneyBack></ArticleMoneyBack>
      <div className="flex items-center justify-between w-full my-5">
        <div className="flex items-center gap-2">
          <Button className="flex items-center gap-1 py-5 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            Filter
          </Button>
          <ShortBy></ShortBy>
        </div>
        {!hiddenResults && (
          <h4 className="text-[16px] font-bold opacity-50">10,000 results</h4>
        )}
      </div>
      <div className="-z-1">
        {dataCourses &&
          dataCourses
            .slice(0, 5)
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
                borderBottom
                adjustParent="relative p-3 gap-5"
                adjustImg
                adjustPrice={priceMobile}
                adjustFontSize
                adjustTable={titleTable}
                adjustMobileSmaller={mobileSmaller}
                imgMobile={imgMobile}
              ></CourseCard>
            ))}
      </div>
      <CompaniesTrustedUdemy
        grid={gridLogo}
        btnFull={btnUdemyFull}
      ></CompaniesTrustedUdemy>
      <div className="-z-1 border border-transparent border-t-slate-200">
        {dataCourses &&
          dataCourses
            .slice(5, 10)
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
                borderBottom
                adjustParent="relative p-3 gap-5"
                adjustImg
                adjustPrice={priceMobile}
                adjustFontSize
                adjustTable={titleTable}
                adjustMobileSmaller={mobileSmaller}
                imgMobile={imgMobile}
              ></CourseCard>
            ))}
      </div>
    </section>
  );
};

export default AllCourses;
