import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import useViewport from "../../hooks/useViewport";

const Main = () => {
  const { width } = useViewport();
  const isMobileSmaller = width <= 414;
  const isMobile = width >= 415 && width <= 768;
  const isTable = width > 768 && width <= 1024;
  if (isMobileSmaller) {
    return (
      <Fragment>
        <Header
          hiddenMultiple
          hiddenUdemyBusiness
          widthSearch={"w-[320px]"}
          btnMenu
          between
        ></Header>
        <Outlet></Outlet>
        <Footer mobile="p-4" mobileSmaller="" grid></Footer>
      </Fragment>
    );
  }
  if (isMobile) {
    return (
      <Fragment>
        <Header
          hiddenMultiple
          hiddenUdemyBusiness
          widthSearch={"w-[320px]"}
          btnMenu
          between
        ></Header>
        <Outlet></Outlet>
        <Footer mobile="p-4"></Footer>
      </Fragment>
    );
  }
  if (isTable) {
    return (
      <Fragment>
        <Header hiddenUdemyBusiness widthSearch={"w-[320px]"}></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
