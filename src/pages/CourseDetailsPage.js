import React from "react";
import { Fragment } from "react";
import MainInforDetails from "../components/layout/MainInforDetails";
import CourseAttention from "../components/others/CourseAttention";
import ChooseCompanies from "../components/layout/ChooseCompanies";
import { useState } from "react";
import { useEffect } from "react";
import WhatYouLearn from "../components/layout/WhatYouLearn";
import VideoCourse from "../components/layout/VideoCourse";
import CompaniesOffer from "../components/layout/CompaniesOffer";
import CourseContent from "../components/course/CourseContent";
import TitleWithDots from "../components/others/TitleWithDots";
import CourseDescription from "../components/course/CourseDescription";
import StudentsAlsoBought from "../components/layout/StudentsAlsoBought";
import FrequentlyBoughtTogether from "../components/layout/FrequentlyBoughtTogether";
import CourseDetailsInstructor from "../components/layout/CourseDetailsInstructor";
import UserComment from "../components/others/UserComment";
import Button from "../components/button/Button";
import CourseCard from "../components/course/CourseCard";
import { dataViewingStudents } from "../data/dataConfig";
import useViewport from "../hooks/useViewport";

const CourseDetailsPage = () => {
  // const [scrollTop, setScrollTop] = useState(0);

  // const handleScroll = (event) => {
  //   setScrollTop(event.currentTarget.scrollTop);
  // };
  // console.log("of set~:", scrollTop);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { width } = useViewport();
  const isMobileSmaller = width <= 414;
  const isMobile = width >= 415 && width <= 768;
  const isTable = width > 768 && width <= 1024;

  if (isMobileSmaller) {
    return (
      <Fragment>
        <MainInforDetails
          width="w-[400px]"
          center
          showVideo
          textCol="flex flex-col gap-2"
          showBottomBlock
          padding="px-4"
          unFlex
        ></MainInforDetails>
        <CourseAttention
          scroll={offset}
          bgwhite
          locatedBottom
          showPrice
          padding="px-5"
          hiddenInfoLeft
          center
          btnMobileSmaller="w-[270px] bg-btnadd text-white"
        ></CourseAttention>
        <BodyBelow
          scroll={offset}
          leftWidth="w-[369px]"
          leftBlockCenter
          hiddenRightBlock
          overHidden
          whatYouLearnMobile="flex flex-col"
          companiesOfferMobile="grid grid-cols-3"
          courseContentMobile="flex flex-col gap-2 mb-2"
          frequentlyBoughtTogetherMobile="w-[60px] h-[60px]"
          studentsAlsoBoughtMobile={false}
          courseRatingMobile="grid grid-cols-1 gap-5"
          gridMoreCourses="grid grid-cols-2 gap-5"
          padding="px-5"
        ></BodyBelow>
        <ChooseCompanies col gridLogo="grid grid-cols-3"></ChooseCompanies>
      </Fragment>
    );
  }
  if (isMobile) {
    return (
      <Fragment>
        <MainInforDetails
          center
          showVideo
          textCol="flex flex-col gap-2"
          showBottomBlock
        ></MainInforDetails>
        <CourseAttention
          scroll={offset}
          locatedBottom
          showPrice
          padding="px-5"
        ></CourseAttention>
        <BodyBelow scroll={offset} leftBlockCenter hiddenRightBlock></BodyBelow>
        <ChooseCompanies col></ChooseCompanies>
      </Fragment>
    );
  }
  if (isTable) {
    return (
      <Fragment>
        <MainInforDetails
          center
          showVideo
          textCol="flex flex-col gap-2"
          showBottomBlock
        ></MainInforDetails>
        <CourseAttention
          scroll={offset}
          locatedBottom
          showPrice
          padding="px-5"
        ></CourseAttention>
        <BodyBelow scroll={offset} leftBlockCenter hiddenRightBlock></BodyBelow>
        <ChooseCompanies col></ChooseCompanies>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <MainInforDetails></MainInforDetails>
      <CourseAttention scroll={offset}></CourseAttention>
      <BodyBelow scroll={offset}></BodyBelow>
      <ChooseCompanies></ChooseCompanies>
    </Fragment>
  );
};
function BodyBelow({
  scroll,
  leftWidth = "w-[690px]",
  leftBlockCenter = false,
  hiddenRightBlock = false,
  overHidden = false,
  padding = "",
  whatYouLearnMobile,
  companiesOfferMobile,
  courseContentMobile,
  studentsAlsoBoughtMobile,
  frequentlyBoughtTogetherMobile,
  courseRatingMobile,
  gridMoreCourses,
}) {
  return (
    <section
      className={`py-8 h-auto ${padding} ${
        overHidden ? "overflow-hidden" : ""
      }`}
    >
      <div className="page-container-fluid relative h-full flex items-start gap-10">
        <div
          className={`h-full ${leftWidth} ${leftBlockCenter ? "mx-auto" : ""}`}
        >
          <Left
            grid={gridMoreCourses}
            whatYouLearnMobile={whatYouLearnMobile}
            companiesOfferMobile={companiesOfferMobile}
            courseContentMobile={courseContentMobile}
            studentsAlsoBoughtMobile={studentsAlsoBoughtMobile}
            frequentlyBoughtTogetherMobile={frequentlyBoughtTogetherMobile}
            courseRatingMobile={courseRatingMobile}
          ></Left>
        </div>
        {!hiddenRightBlock && (
          <div className="flex flex-col justify-end h-full w-[350px] px-2">
            <Right scroll={scroll}></Right>
          </div>
        )}
      </div>
    </section>
  );
}
function Left({
  grid,
  whatYouLearnMobile,
  companiesOfferMobile,
  courseContentMobile,
  studentsAlsoBoughtMobile,
  frequentlyBoughtTogetherMobile,
  courseRatingMobile,
}) {
  return (
    <Fragment>
      <WhatYouLearn whatYouLearnMobile={whatYouLearnMobile}></WhatYouLearn>
      <CompaniesOffer gridLogo={companiesOfferMobile}></CompaniesOffer>
      <CourseContent topFlex={courseContentMobile}></CourseContent>
      <TitleWithDots></TitleWithDots>
      <CourseDescription></CourseDescription>
      <StudentsAlsoBought heart={studentsAlsoBoughtMobile}></StudentsAlsoBought>
      <FrequentlyBoughtTogether
        imgMobile={frequentlyBoughtTogetherMobile}
      ></FrequentlyBoughtTogether>
      <CourseDetailsInstructor></CourseDetailsInstructor>
      <CourseRating grid={courseRatingMobile}></CourseRating>
      <MoreCourses grid={grid}></MoreCourses>
    </Fragment>
  );
}
function Right({ scroll }) {
  return (
    <Fragment>
      <VideoCourse offset={scroll}></VideoCourse>
    </Fragment>
  );
}
function CourseRating({ grid = "grid grid-cols-2 gap-6" }) {
  return (
    <section className="my-5">
      <div className="flex items-center gap-1 text-2xl font-bold mb-5">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
          alt=""
          className="w-5 h-5"
        />
        <h1>4.3 course rating</h1>
        <div className="w-2 h-2 bg-slate-600 rounded-full mx-1"></div>
        <h1>19K ratings</h1>
      </div>
      <div className={grid}>
        {dataLocal.map((items) => (
          <UserComment
            name={items.name}
            shortName={items.short_name}
            time={items.time}
            content={items.text}
          ></UserComment>
        ))}
      </div>
      <Button className="font-bold">Show all reviews</Button>
    </section>
  );
}
function MoreCourses({ grid = "grid grid-cols-3 gap-4" }) {
  return (
    <section>
      <div className="flex items-center gap-1">
        <h1 className="text-2xl font-bold">More Courses by</h1>
        <h1 className="text-2xl font-bold text-contribute hover:text-purple-700 cursor-pointer">
          Jose Portilla
        </h1>
      </div>
      <div
        className={`${grid} py-5 border border-transparent border-b-slate-200 mb-4`}
      >
        {dataViewingStudents.slice(6, 9).map((items) => (
          <CourseCard
            img={items.img_course}
            title={items.title}
            instructer={items.instructor}
            rate={items.rate}
            reviewing={items.reviewing}
            currentPrice={items.current_price}
            oldPrice={items.original_price}
            bestSeller={items.best_seller}
            adjustImg
            adjustFontSize="text-[15px]"
            // hotNew
          ></CourseCard>
        ))}
      </div>
      <Button className="font-bold" full>
        Report abuse
      </Button>
    </section>
  );
}
export default CourseDetailsPage;

const dataLocal = [
  {
    name: "Vishwas M.",
    short_name: "VM",
    time: "3 weeks ago",
    text: `This course was put together a long time ago and I would expect the author's team to notify changes in the codes (in some way) to newer learners. I personally had to spend a lot of time finding the right syntax/codes, and would appreciate a heads-up (displaying the year a particular course was designed) before enrolling for it.`,
  },
  {
    name: "Eugene B.",
    short_name: "EB",
    time: "a weeks ago",
    text: `This was a great intro for Python and Machine learning. After finishing the course I really appreciate him providing discounts, as well as the links to his notes whether we would like to self study or not! It really makes it feel like he cares for our learning`,
  },
  {
    name: "Hsuan-Wen C.",
    short_name: "HC",
    time: "a weeks ago",
    text: `Jose is an excellent instructor. He broke down complex concepts to easy to understand explanations. However, I think there are two things this course can be improved:
    1) Update the content to reflect Python 3
    2) Include a final project requirement for students to get hands-on experience`,
  },
  {
    name: "Khotibul U.",
    short_name: "KU",
    time: "two weeks ago",
    text: `Good course, i finished this course and every lecturer that i learned is understandable and feel so easy to do, hopefully this course help me up to reach my goal on data analyst`,
  },
];
