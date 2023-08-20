import React from "react";
import { dataViewingStudents } from "../../data/dataConfig";
import ListCourse from "../course/ListCourse";

const ViewingStudents = ({ table, card }) => {
  return (
    <section className={`page-container mb-20 ${table}`}>
      <h1 className="text-2xl font-bold mb-5">Students are viewing</h1>
      <ListCourse data={dataViewingStudents} items={card}></ListCourse>
    </section>
  );
};

export default ViewingStudents;
