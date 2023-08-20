import React, { useState } from "react";

const Search = ({
  width = "w-[562px]",
  bgColor = "bg-slate-50",
  borderNone = false,
  rounded = "rounded-full",
}) => {
  const [filter, setFilter] = useState("");
  const handleChangeInput = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div
      className={`flex items-center ${width} h-[48px] ${
        borderNone ? "" : "border border-slate-900"
      } ${rounded} ${bgColor} px-3 py-2`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-6 h-6 ${
          filter !== ""
            ? "text-slate-900 cursor-pointer"
            : "text-slate-400 cursor-wait"
        } `}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search for anything"
        className={`w-full h-full px-4 text-slate-900 ${bgColor} outline-none`}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default Search;
