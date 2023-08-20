import React from "react";
import LogoCompanies from "../others/LogoCompanies";

const ChooseCompanies = ({ col = false, gridLogo }) => {
  return (
    <section
      className={`flex ${
        col ? "flex-col gap-4" : "gap-12"
      } items-center justify-between  bg-darkudemy w-full border border-transparent border-b-gray-500 px-12 py-6 overflow-hidden`}
    >
      <h1 className="text-lg font-bold text-white">
        Top companies choose{" "}
        <span className="text-[#CEC0FC] hover:underline cursor-pointer">
          Udemy Business
        </span>{" "}
        to build in-demand career skills.
      </h1>
      <div className="flex-1">
        <LogoCompanies
          amount={5}
          brightness
          between
          grid={gridLogo}
        ></LogoCompanies>
      </div>
    </section>
  );
};

export default ChooseCompanies;
