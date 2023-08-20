import React from "react";
import BannerAchievement from "../banner/BannerAchievement";

const GoalsAchieving = ({ table = "" }) => {
  return (
    <div className="bg-slate-100 h-[500px] py-10 mb-10">
      <section className={`page-container ${table}`}>
        <h1 className="text-2xl font-bold mb-5">
          How learners like you are achieving their goals
        </h1>
        <BannerAchievement></BannerAchievement>
      </section>
    </div>
  );
};

export default GoalsAchieving;
