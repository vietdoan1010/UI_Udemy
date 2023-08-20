import React from "react";
import { dataCourses } from "../../data/dataConfig";
import Button from "../button/Button";
import ListCourse from "../course/ListCourse";
import Menu from "./Menu";

const CoursesSelection = ({
  table,
  card,
  text = "w-[850px]",
  hiddenMenu = false,
}) => {
  return (
    <section className={`page-container mb-10 ${table} overflow-hidden`}>
      <h1 className="text-3xl font-bold mb-4">A broad selection of courses</h1>
      <p className="text-lg mb-2">
        Choose from 213,000 online video courses with new additions published
        every month
      </p>
      {!hiddenMenu && <Menu></Menu>}
      <div className="p-8 border border-slate-300 overflow-hidden">
        <h1 className="text-3xl font-bold mb-4">
          Expand your career opportunities with Python
        </h1>
        <p className={`preview-text text-[16px] mb-4 ${text}`}>
          Take one of Udemy's range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You'll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi error
          perferendis quas odit voluptas saepe consectetur, corporis laudantium
          animi accusantium.
        </p>
        <Button className="font-bold mb-8">Explore Python</Button>
        <ListCourse data={dataCourses} items={card}></ListCourse>
      </div>
    </section>
  );
};

export default CoursesSelection;
