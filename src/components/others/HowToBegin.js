import React from "react";
import NavigateCourse from "../layout/NavigateCourse";

const HowToBegin = ({
  col = "gap-20",
  padding = "",
  hiddenNavigate = false,
}) => {
  return (
    <section
      className={`page-container flex flex-col justify-center max-w-[960px] items-center my-24 ${padding}`}
    >
      <h1 className="text-4xl font-bold mb-10">How to begin</h1>
      {!hiddenNavigate && (
        <NavigateCourse
          active="Plan your curriculum"
          array={["Record your video", "Launch your course"]}
          textSize="text-xl font-extrabold"
          gap="gap-12"
        ></NavigateCourse>
      )}
      <div className={`flex ${col}`}>
        <div className="flex flex-col items-start justify-center">
          <p className="text-[20px] mb-4">
            You start with your passion and knowledge. Then choose a promising
            topic with the help of our Marketplace Insights tool.
          </p>
          <p className="text-[20px]">
            The way that you teach — what you bring to it — is up to you.
          </p>
          <h4 className="text-[20px] font-bold my-4">How we help you</h4>
          <p className="text-[20px]">
            We offer plenty of resources on how to create your first course.
            And, our instructor dashboard and curriculum pages help keep you
            organized.
          </p>
        </div>
        <img
          src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default HowToBegin;
