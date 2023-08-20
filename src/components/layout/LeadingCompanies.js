import React from "react";
import LogoCompanies from "../others/LogoCompanies";

const LeadingCompanies = ({ table = "px-1", grid }) => {
  return (
    <section
      className={`page-container text-center py-20 ${table} overflow-hidden`}
    >
      <h1 className="text-2xl font-bold mb-2">
        Trusted by over 13,400 great teams
      </h1>
      <p className="text-[16px] mb-5">
        Leading companies use the same courses to help employees keep their
        skills fresh.
      </p>
      <LogoCompanies between grid={grid}></LogoCompanies>
    </section>
  );
};

export default LeadingCompanies;
