import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const ShortBy = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative w-[170px] max-w-[200px]" ref={nodeRef}>
      <div
        className="flex items-center justify-between w-full p-[11px] border border-slate-900 hover:bg-slate-100 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <div>
          <span className="text-xs font-semibold">Sort by</span>
          <p className="mt-auto">Most Popular</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {show && (
        <div className="border border-gray-200 absolute top-full left-0 w-full shadow-2xl bg-white z-10">
          <div className="px-3 py-1 hover:bg-purple-700 hover:text-white cursor-pointer">
            Most Popular
          </div>
          <div className="px-3 py-1 hover:bg-purple-700 hover:text-white cursor-pointer">
            Highest Rated
          </div>
          <div className="px-3 py-1 hover:bg-purple-700 hover:text-white cursor-pointer">
            Newest
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortBy;
