import React from "react";

const ContributeTo = ({
  size = "text-4xl",
  padding = "px-32",
  grid = "flex items-center justify-between",
}) => {
  return (
    <section
      className={`${grid} bg-contribute text-white py-16 ${padding} overflow-hidden`}
    >
      <div className="text-center">
        <h1 className={`${size} font-bold`}>57M</h1>
        <p className="text-lg">Students</p>
      </div>
      <div className="text-center">
        <h1 className={`${size} font-bold`}>75+</h1>
        <p className="text-lg">Languages</p>
      </div>
      <div className="text-center">
        <h1 className={`${size} font-bold`}>773M</h1>
        <p className="text-lg">Enrollments</p>
      </div>
      <div className="text-center">
        <h1 className={`${size} font-bold`}>180+</h1>
        <p className="text-lg">Countries</p>
      </div>
      <div className="text-center">
        <h1 className={`${size} font-bold`}>13,400+</h1>
        <p className="text-lg">Enterprise customers</p>
      </div>
    </section>
  );
};

export default ContributeTo;
