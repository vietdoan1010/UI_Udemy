import React from "react";
import TitleWithDots from "../others/TitleWithDots";
import { useState } from "react";
const dataLocal = [
  "You'll get a full understanding of how to program with Python and how to use it in conjunction with scientific computing modules and libraries to analyze data.",
  "You will also get lifetime access to over 100 example python code notebooks, new and updated videos, as well as future additions of various data analysis projects that you can use for a portfolio to show future employers! ",
  "By the end of this course you will: ",
  "- Have an understanding of how to program in Python. ",
  "- Know how to create and manipulate arrays using numpy and Python. ",
  "- Know how to use pandas to create and analyze data sets. ",
  "- Know how to use matplotlib and seaborn libraries to create beautiful data ,visualization. ",
  "- Have an amazing portfolio of example python data analysis projects! ",
  "- Have an understanding of Machine Learning and SciKit Learn!",
  "With 100+ lectures and over 20 hours of information and more than 100 example python code notebooks, you will be excellently prepared for a future in data science! ",
];
const CourseDescription = () => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="h-full">
      <div
        className={`relative ${
          showMore ? "h-full" : "max-h-[300px]"
        }  overflow-hidden`}
      >
        {!showMore && (
          <div className="absolute h-1/2 bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(255,255,255,0.9)]"></div>
        )}
        <h1 className="text-2xl font-bold mb-10 mt-8">Description</h1>
        <p className="font-bold mb-2">
          This course will give you the resources to learn python and
          effectively use it analyze and visualize data! Start your career in
          Data Science!
        </p>
        {dataLocal.map((items) => (
          <p className="text-slate-600 mb-2">{items}</p>
        ))}
        <p className="text-slate-600 mt-5">
          Please make sure you read the entire page to understand if the course
          is the correct version for you.
        </p>
        <TitleWithDots
          title="Who this course is for:"
          data={[
            "Anyone interested in learning more about python, data science, or data visualizations.",
            "Anyone interested about the rapidly expanding world of data science!",
          ]}
        ></TitleWithDots>
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer text-contribute font-bold hover:text-purple-700"
        onClick={handleShowMore}
      >
        <span className="">{showMore ? "Show less" : "Show more"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          class={`w-3 h-3 ${showMore ? "-rotate-180" : ""} transition-all`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default CourseDescription;
