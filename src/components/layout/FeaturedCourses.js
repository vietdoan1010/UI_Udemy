import React from "react";
import { dataCourses } from "../../data/dataConfig";
import ListCourse from "../course/ListCourse";

const FeaturedCourses = ({
  table,
  height = "max-h-[350px]",
  mobileSmaller,
}) => {
  return (
    <section className={`page-container mb-12 ${height} ${table}`}>
      <h1 className="text-2xl font-bold mb-6">Featured courses</h1>
      <ListCourse
        data={dataCourses}
        top="top-1/3"
        convertCard
        autoPlay
        adjustPrice="absolute"
        mobileSmaller={mobileSmaller}
      ></ListCourse>
    </section>
  );
};

export default FeaturedCourses;
