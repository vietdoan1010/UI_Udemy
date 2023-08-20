import React from "react";
import { dataTopCategories } from "../../data/dataConfig";
import TopCard from "../course/TopCard";

const TopCategories = ({
  table,
  heightImage,
  grid = "grid grid-cols-4 gap-7",
}) => {
  return (
    <section className={`page-container mb-10 ${table}`}>
      <h1 className="text-2xl font-bold mb-5">Top categories</h1>
      <div className={`${grid}`}>
        {dataTopCategories &&
          dataTopCategories.map((item) => (
            <TopCard
              img={item.img_top}
              title={item.title_top}
              heightImage={heightImage}
            ></TopCard>
          ))}
      </div>
    </section>
  );
};

export default TopCategories;
