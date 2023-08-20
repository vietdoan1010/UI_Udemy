import React from "react";
import ListCourse from "../course/ListCourse";
import NavigateCourse from "./NavigateCourse";

const CoursesStarted = ({ table, data, itemsCard }) => {
  return (
    <section className={`page-container mb-12 ${table}`}>
      <h1 className="text-3xl font-bold mb-12">Development Courses</h1>
      <h2 className="text-2xl font-bold mb-6">Courses to get you started</h2>
      <NavigateCourse></NavigateCourse>
      <ListCourse data={data} items={itemsCard}></ListCourse>
    </section>
  );
};

export default CoursesStarted;
