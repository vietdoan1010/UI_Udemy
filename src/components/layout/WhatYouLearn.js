import React from "react";
const dataLocal = [
  "Have an intermediate skill level of Python programming.",
  "Use the Jupyter Notebook Environment.",
  "Use the numpy library to create and manipulate arrays.",
  "Use the pandas module with Python to create and structure data.",
  "Learn how to work with various data formats within python, including: JSON,HTML, and MS Excel Worksheets.",
  "Create data visualizations using matplotlib and the seaborn modules with python.",
  "Have a portfolio of various data analysis projects.",
];
const WhatYouLearn = ({ whatYouLearnMobile = "grid grid-cols-2 gap-x-10" }) => {
  return (
    <section className="border border-slate-200 p-5">
      <h1 className="text-2xl font-bold mb-5">What you'll learn</h1>
      <div className={`${whatYouLearnMobile}`}>
        {dataLocal.map((items) => (
          <div className="flex items-start gap-3 mb-2">
            <IconCheck></IconCheck>
            <p className="opacity-80">{items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

function IconCheck() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </div>
  );
}

export default WhatYouLearn;
