import React from "react";
import Button from "../button/Button";

const CourseAttention = ({
  scroll,
  bgwhite = false,
  locatedBottom = false,
  showPrice = false,
  hiddenInfoLeft = false,
  center = false,
  btnMobileSmaller = "bg-slate-200 text-darkudemy",
  padding = "",
}) => {
  return (
    <section
      className={`${
        bgwhite
          ? "bg-white text-darkudemy py-2"
          : "bg-darkudemy text-white py-4"
      } shadow-lg fixed ${
        locatedBottom ? "bottom-0" : "top-0"
      } left-0 right-0 ${
        scroll !== 0 ? "block" : "hidden"
      } shadow-2xl overflow-hidden z-40`}
    >
      <div
        className={`page-container flex items-center ${
          center ? "justify-center" : "justify-between"
        } ${padding} w-auto overflow-hidden`}
      >
        {!hiddenInfoLeft && (
          <div className="">
            <h1 className="text-sm font-bold mb-2">
              Learning Python for Data Analysis and Visualization Ver 1
            </h1>
            <div className="flex items-center gap-2">
              <Button
                className="bg-btnsell text-xs font-bold text-slate-800"
                borderNone
                square="py-1 px-2"
              >
                Bestseller
              </Button>
              <div className="rate flex items-center gap-1 cursor-pointer">
                <span className="text-btnsell font-bold text-sm">4.3</span>
                {Array(4)
                  .fill(null)
                  .map((index) => (
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                      alt=""
                      className="w-[11px] h-[11px]"
                      key={index}
                    />
                  ))}
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
                  alt=""
                  className="w-[11px] h-[11px]"
                />
                <span className="text-xs text-partner underline">
                  (18,934 ratings)
                </span>
              </div>
              <p>197,152 students</p>
            </div>
          </div>
        )}
        {showPrice && (
          <div className="flex items-center gap-2">
            <h1 class="text-xl font-bold">
              <span class="underline">đ</span>1,799,000
            </h1>
            <Button
              className={`font-bold ${btnMobileSmaller}`}
              borderNone
              children={"Buy now"}
            ></Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseAttention;
