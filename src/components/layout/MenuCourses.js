import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MenuCourses = ({ hidden = false }) => {
  return (
    <div className="flex items-center justify-between w-full h-12 bg-white border border-t-slate-200 shadow-md px-10 mb-12">
      <div className="flex items-center h-full overflow-hidden gap-3">
        <h1 className="text-sm font-bold hover:text-purple-700 cursor-pointer py-5">
          Development
        </h1>
        <img
          src="https://s.udemycdn.com/browse_components/link-bar/large-next.svg"
          alt=""
        />
      </div>
      <nav className="px-4">
        <ul className="flex items-center justify-between text-sm text-slate-600 gap-7">
          <NavLink
            to="/courses/development/"
            className="hover:text-purple-700 cursor-pointer"
          >
            Web Development
          </NavLink>
          <NavLink
            to="/courses/data-science/"
            className="hover:text-purple-700 cursor-pointer"
          >
            Data Science
          </NavLink>
          <li className="hover:text-purple-700 cursor-pointer">
            Mobile Development
          </li>
          <li className="hover:text-purple-700 cursor-pointer">
            Programing Languages
          </li>
          <li className="hover:text-purple-700 cursor-pointer">
            Game Development
          </li>
          {!hidden && (
            <li className="hover:text-purple-700 cursor-pointer">
              Database Design & Development
            </li>
          )}
          {!hidden && (
            <li className="hover:text-purple-700 cursor-pointer">
              Software Testing
            </li>
          )}
        </ul>
      </nav>
      <div className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </div>
    </div>
  );
};

export default MenuCourses;
