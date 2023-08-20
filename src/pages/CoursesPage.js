import React, { Fragment } from "react";
import AllCourses from "../components/layout/AllCourses";
import ChooseCompanies from "../components/layout/ChooseCompanies";
import CoursesStarted from "../components/layout/CoursesStarted";
import FeaturedCourses from "../components/layout/FeaturedCourses";
import MenuCourses from "../components/layout/MenuCourses";
import Facts from "../components/others/Facts";
import PopularInstructors from "../components/layout/PopularInstructors";
import useViewport from "../hooks/useViewport";

const CoursesPage = ({ data }) => {
  const { width } = useViewport();
  const isMobileSmaller = width <= 414;
  const isMobile = width >= 415 && width <= 768;
  const isTable = width > 768 && width <= 1024;

  if (isMobileSmaller) {
    return (
      <Fragment>
        <CoursesStarted
          data={data}
          table="px-6 mt-12"
          itemsCard={2}
        ></CoursesStarted>
        <FeaturedCourses
          table="px-6"
          height="h-auto"
          mobileSmaller="flex flex-col"
        ></FeaturedCourses>
        <PopularInstructors
          table="px-6"
          items={1}
          heightItems="h-[200px]"
        ></PopularInstructors>
        <AllCourses
          table="px-6"
          imgMobile="h-[50px] w-[100px]"
          priceMobile=""
          titleTable="max-w-[300px]"
          hiddenResults
          gridLogo="grid grid-cols-3"
          btnUdemyFull
        ></AllCourses>
        <ChooseCompanies col gridLogo="grid grid-cols-3"></ChooseCompanies>
      </Fragment>
    );
  }
  if (isMobile) {
    return (
      <Fragment>
        <CoursesStarted
          data={data}
          table="px-6 mt-12"
          itemsCard={3}
        ></CoursesStarted>
        <FeaturedCourses table="px-6"></FeaturedCourses>
        <PopularInstructors
          table="px-6"
          items={3}
          heightItems="h-[200px]"
        ></PopularInstructors>
        <AllCourses
          table="px-6"
          titleTable="max-w-[300px]"
          mobileSmaller={false}
        ></AllCourses>
        <ChooseCompanies col></ChooseCompanies>
      </Fragment>
    );
  }
  if (isTable) {
    return (
      <Fragment>
        <MenuCourses hidden></MenuCourses>
        <CoursesStarted data={data} table="px-6" itemsCard={4}></CoursesStarted>
        <Facts table="px-6"></Facts>
        <FeaturedCourses table="px-6"></FeaturedCourses>
        <PopularInstructors table="px-6" items={3}></PopularInstructors>
        <AllCourses table="px-6"></AllCourses>
        <ChooseCompanies col></ChooseCompanies>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <MenuCourses></MenuCourses>
      <CoursesStarted data={data}></CoursesStarted>
      <Facts></Facts>
      <FeaturedCourses></FeaturedCourses>
      {/* <PopularTopics></PopularTopics> */}
      <PopularInstructors></PopularInstructors>
      <AllCourses></AllCourses>
      <ChooseCompanies></ChooseCompanies>
    </Fragment>
  );
};

export default CoursesPage;
