import React, { Fragment } from "react";
import Button from "../components/button/Button";
import CourseCard from "../components/course/CourseCard";
import ChooseCompanies from "../components/layout/ChooseCompanies";
import { dataUsers } from "../data/dataConfig";
import useViewport from "../hooks/useViewport";

const UsersPage = () => {
  const { width } = useViewport();
  const isMobileSmaller = width <= 414;
  const isMobile = width >= 415 && width <= 768;
  const isTable = width > 768 && width <= 1024;

  if (isMobileSmaller) {
    return (
      <Fragment>
        <Container
          grid="flex flex-col-reverse gap-5"
          padding="px-5"
          LeftGridItems="grid-cols-1"
          LeftWFull
          RightBtnWFull
        ></Container>
        <ChooseCompanies col gridLogo="grid grid-cols-3"></ChooseCompanies>
      </Fragment>
    );
  }
  if (isMobile) {
    return (
      <Fragment>
        <Container padding="px-5"></Container>
        <ChooseCompanies col></ChooseCompanies>
      </Fragment>
    );
  }
  if (isTable) {
    return (
      <Fragment>
        <Container></Container>
        <ChooseCompanies col></ChooseCompanies>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Container></Container>
      <ChooseCompanies></ChooseCompanies>
    </Fragment>
  );
};

function Container({
  grid = "flex justify-between gap-16",
  padding = "",
  LeftWFull = false,
  RightBtnWFull = false,
  LeftGridItems,
}) {
  return (
    <section
      className={`${grid} page-container w-full max-w-[860px] mt-12 mb-20 ${padding} overflow-hidden`}
    >
      <Left wFull={LeftWFull} gridItems={LeftGridItems}></Left>
      <Right wFull={RightBtnWFull}></Right>
    </section>
  );
}
function Left({ wFull, gridItems = "grid-cols-2" }) {
  return (
    <Fragment>
      {dataUsers.map((items) => (
        <section className={`${wFull ? "w-full" : "w-4/5"}`}>
          <h3 className="font-bold opacity-50">INSTRUCTOR</h3>
          <h1 className="text-4xl font-bold">{items.name_user}</h1>
          <h4 className="font-bold my-3">{items.instructor}</h4>
          <Button
            className="bg-partner text-xs font-bold text-slate-800 mb-4"
            borderNone
            square="py-1 px-2"
          >
            Udemy Instructor Partner
          </Button>
          <div className="flex items-center gap-5 mb-10">
            <div>
              <h4 className="font-bold opacity-50 mb-1">Total students</h4>
              <h2 className="text-2xl font-bold">{items.total_students}</h2>
            </div>
            <div>
              <h4 className="font-bold opacity-50 mb-1">Reviews</h4>
              <h2 className="text-2xl font-bold">{items.reviews}</h2>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">About me</h2>
          {items?.content.map((item) => (
            <p className="text-[15px] mb-5">
              {item.text_start}{" "}
              <span className="font-bold">{item.text_bold}</span>{" "}
              {item.text_end}
            </p>
          ))}
          <h2 className="text-xl font-bold my-4">{`My courses (${items?.my_courses.length})`}</h2>
          <div className={`grid ${gridItems} gap-5`}>
            {items?.my_courses.slice(0, 9).map((items) => (
              <CourseCard
                img={items.img_course}
                title={items.title}
                instructer={items.instructor}
                rate={items.rate}
                reviewing={items.reviewing}
                currentPrice={items.current_price}
                oldPrice={items.original_price}
                bestSeller={items.best_seller}
                adjustParent="mb-5"
                adjustImg
              ></CourseCard>
            ))}
          </div>
        </section>
      ))}
    </Fragment>
  );
}
function Right({ wFull = false }) {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="flex-auto">
      {dataUsers.map((items) => (
        <div className="text-[15px] font-bold">
          <img
            src={items.avatar}
            alt=""
            className="w-[200px] h-[200px] rounded-full mb-10"
          />
          <Button
            onClick={() => openNewTab(items.link_website)}
            className="flex items-center justify-center gap-1 w-[200px] mb-2"
            square="py-3"
            full={wFull}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
            Website
          </Button>
          <Button
            onClick={() => openNewTab(items.link_twitter)}
            className="flex items-center justify-center gap-1 w-[200px] mb-2"
            square="py-3"
            full={wFull}
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
            Twitter
          </Button>
          <Button
            onClick={() => openNewTab(items.link_linkedin)}
            className="flex items-center justify-center gap-1 w-[200px]"
            square="py-3"
            full={wFull}
          >
            <svg
              className="w-4 h-4 rounded-md"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            Linkedin
          </Button>
        </div>
      ))}
    </section>
  );
}
export default UsersPage;
