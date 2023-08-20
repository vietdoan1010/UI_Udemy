import React from "react";

const Menu = () => {
  return (
    <header className="header flex items-center text-[16px]">
      <span className="py-4 pr-2 font-bold cursor-pointer">Python</span>
      <span className="py-4 px-2 font-bold cursor-pointer text-slate-500 hover:text-slate-900">
        Excel
      </span>
      <span className="py-4 px-2 font-bold cursor-pointer text-slate-500 hover:text-slate-900">
        Web Development
      </span>
      <span className="py-4 px-2 font-bold cursor-pointer text-slate-500 hover:text-slate-900">
        JavaScript
      </span>
      <span className="py-4 px-2 font-bold cursor-pointer text-slate-500 hover:text-slate-900">
        Data Science
      </span>
      <span className="py-4 px-2 font-bold cursor-pointer text-slate-500 hover:text-slate-900">
        AWS Certification
      </span>
      <span className="py-4 px-2 font-bold cursor-pointer text-slate-500 hover:text-slate-900">
        Drawing
      </span>
    </header>
  );
};

export default Menu;
