import React from "react";
import BannerCustomer from "../banner/BannerCustomer";

const CustomerStories = () => {
  return (
    <section className="flex flex-col items-center bg-slate-100 py-12">
      <BannerCustomer></BannerCustomer>
      <div className="flex items-center gap-3 mt-10 cursor-pointer">
        <p className="text-[16px] font-bold text-purple-700 hover:text-purple-800">
          View more customer stories
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-3 h-3 text-purple-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default CustomerStories;
