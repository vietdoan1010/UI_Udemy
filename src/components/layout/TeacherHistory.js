import React from "react";
import SlidesTeacherFeatured from "../slides/SlidesTeacherFeatured";

const TeacherHistory = ({ grid, width, height, padding }) => {
  return (
    <section className="flex flex-col items-center bg-slate-100 my-12">
      <SlidesTeacherFeatured
        grid={grid}
        width={width}
        height={height}
        padding={padding}
      ></SlidesTeacherFeatured>
    </section>
  );
};

export default TeacherHistory;
