import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  img,
  title,
  instructer,
  rate,
  reviewing,
  currentPrice,
  oldPrice,
  bestSeller = false,
  hotNew = false,

  styleBanner = false,
  borderBottom = false,
  adjustParent = "gap-7",
  adjustImg = "",
  imgMobile = false,
  adjustPrice = false,
  adjustFontSize = false,
  adjustTable = false,
  adjustMobileSmaller = false,
  positionRate = "",
  oneStart = 4,
  heart = false,
  textReviewing = "text-xs opacity-50",
  key,
}) => {
  const navigate = useNavigate();
  const consult = reviewing?.replace("(", "").replace(")", "");
  return (
    <div
      className={`${
        styleBanner
          ? adjustMobileSmaller
            ? adjustMobileSmaller
            : "flex items-start"
          : ""
      } ${
        borderBottom ? "border border-transparent border-b-slate-200" : ""
      } course-card h-full select-none -z-1 cursor-pointer ${adjustParent}`}
      key={key}
      onClick={() =>
        navigate("/course/learning-python-for-data-analysis-and-visualization/")
      }
    >
      <div
        className={`${adjustImg ? "border border-slate-200" : ""} ${
          styleBanner ? "" : "mb-2"
        }`}
      >
        <img
          src={img}
          alt=""
          className={`${
            styleBanner
              ? `flex-1 ${
                  adjustImg ? (imgMobile ? imgMobile : "h-[auto]") : "h-[260px]"
                }`
              : ""
          } w-full object-cover ${adjustImg}`}
        />
      </div>
      <div
        className={`${styleBanner ? "flex-auto h-full" : ""} ${
          !adjustFontSize ? "" : "relative"
        }`}
      >
        <h3
          className={`${
            styleBanner && !adjustFontSize
              ? "text-2xl max-w-[450px]"
              : "text-[16px]"
          } course-title font-bold mb-2 ${adjustTable} ${adjustFontSize}`}
        >
          {title}
        </h3>
        <span className="text-xs opacity-50 mb-2">
          <p className="course-instructer">{instructer}</p>
        </span>
        <div className={`rate flex items-center gap-1 ${positionRate}`}>
          <div className="flex items-center gap-1">
            <span className="text-textstart font-bold text-[16px]">{rate}</span>
            {Array(oneStart)
              .fill(null)
              .map((index) => (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                  className="w-[11px] h-[11px]"
                  key={index}
                />
              ))}
            {oneStart === 4 && (
              <img
                src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
                alt=""
                className="w-[11px] h-[11px]"
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            {positionRate && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
            )}
            <span className={`${textReviewing}`}>
              {positionRate ? consult : reviewing}
            </span>
          </div>
        </div>
        {/* <div className="flex flex-col flex-1"> */}
        <div
          className={`${
            styleBanner
              ? `${adjustFontSize ? "text-[16px]" : "text-xl"} mt-auto ${
                  !adjustMobileSmaller && `${adjustPrice && "bottom-0"}`
                }`
              : ""
          } flex items-center text-[16px] gap-2 mb-2 ${adjustPrice}`}
        >
          <span className="font-bold">
            <span className="underline">đ</span>
            {currentPrice}
          </span>
          <span className="line-through opacity-50">
            {oldPrice && (
              <>
                <span className="underline">đ</span>
                {oldPrice}
              </>
            )}
          </span>
        </div>
        {bestSeller ? (
          <Button
            className="bg-btnsell text-xs font-bold text-slate-800"
            borderNone
            square="py-1 px-2"
          >
            Bestseller
          </Button>
        ) : null}
        {hotNew ? (
          <Button
            className="bg-hotnew text-xs font-bold text-slate-800"
            borderNone
            square="py-1 px-2"
          >
            Hot & New
          </Button>
        ) : null}
        {heart && (
          <div className="absolute right-0 top-0 w-10 h-10 flex items-center justify-center border border-darkudemy rounded-full hover:bg-slate-200">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
