import React from "react";
import { dataFeaturedTopics } from "../../data/dataConfig";
import Button from "../button/Button";

const FeaturedTopics = ({ table, grid = "grid grid-cols-4 gap-20" }) => {
  return (
    <section className="bg-slate-100 py-16 overflow-hidden">
      <div className={`page-container ${table}`}>
        <h1 className="text-2xl font-bold mb-5">Featured topics by category</h1>
        <div className={`${grid}`}>
          {dataFeaturedTopics &&
            dataFeaturedTopics.map((items) => (
              <div className="items-featured">
                <h2 className="text-xl font-bold mb-5">{items.topic}</h2>
                {items.ul_topic.map((ulItems) => (
                  <ul className="mb-5">
                    <li className="text-[16px] font-bold underline text-purple-700 hover:text-purple-800 mb-1 cursor-pointer">
                      {ulItems.title_topic}
                    </li>
                    <p className="opacity-50">{ulItems.totalStudents_topic}</p>
                  </ul>
                ))}
              </div>
            ))}
        </div>
        <Button className="font-bold" square="py-2 px-2">
          Explore more topics
        </Button>
      </div>
    </section>
  );
};

export default FeaturedTopics;
