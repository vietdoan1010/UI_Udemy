import React from "react";
import Button from "../button/Button";
import LogoCompanies from "../others/LogoCompanies";

const CompaniesTrustedUdemy = ({ grid, btnFull = false }) => {
  return (
    <section className="page-container border border-slate-200 my-4 p-5 overflow-hidden">
      <h2 className="text-xl font-bold mb-2">Top companies trust Udemy</h2>
      <p className="text-[16px] mb-2">
        Get your team access to Udemy's top 19,000+ courses
      </p>
      <LogoCompanies amount={5} grid={grid}></LogoCompanies>
      <Button
        className="text-sm font-bold mt-4"
        square="py-2 px-2"
        full={btnFull}
      >
        Try Udemy Business
      </Button>
    </section>
  );
};

export default CompaniesTrustedUdemy;
