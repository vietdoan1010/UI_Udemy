import React from "react";
import LogoCompanies from "../others/LogoCompanies";

const CompaniesOffer = ({ gridLogo }) => {
  return (
    <section className="border border-slate-200 p-5 my-8">
      <h3 className="text-[16px] font-bold">
        Top companies offer this course to their employees
      </h3>
      <p className="text-slate-600 mb-5">
        This course was selected for our collection of top-rated courses trusted
        by businesses worldwide.{" "}
        <span className="text-contribute underline cursor-pointer">
          Learn more
        </span>
      </p>
      <LogoCompanies amount={5} between grid={gridLogo}></LogoCompanies>
    </section>
  );
};

export default CompaniesOffer;
