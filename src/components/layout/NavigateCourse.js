import React from "react";

const NavigateCourse = ({
  active = "Most popular",
  array = ["New", "Trending"],
  textSize = "text-sm",
  textColor = "text-slate-600",
  hoverNone = false,
  gap = "gap-6",
  borderNone = false,
  paddingNone = "pb-4",
  arrow = false,
}) => {
  return (
    <nav
      className={`${
        borderNone ? "" : "border border-transparent border-b-slate-200"
      } mb-4`}
    >
      <ul
        className={`flex items-center ${textColor} font-bold ${gap} ${textSize}`}
      >
        <li
          className={`${
            borderNone ? "" : "border-2 border-transparent border-b-darkudemy"
          } ${hoverNone ? "" : "text-darkudemy"} cursor-pointer ${paddingNone}`}
        >
          {active}
        </li>
        {array.map((items) => (
          <div className="flex items-center">
            {arrow && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-3 h-3 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
            <li
              className={`${paddingNone} cursor-pointer ${
                hoverNone ? "" : "hover:text-darkudemy"
              }`}
            >
              {items}
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default NavigateCourse;
