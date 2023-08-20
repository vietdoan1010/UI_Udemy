import React, { Fragment } from "react";
import BannerTeaching from "../components/banner/BannerTeaching";
import ChooseCompanies from "../components/layout/ChooseCompanies";
import TeacherHistory from "../components/layout/TeacherHistory";
import Alone from "../components/others/Alone";
import BecomeAnInstructor from "../components/others/BecomeAnInstructor";
import ContributeTo from "../components/others/ContributeTo";
import HowToBegin from "../components/others/HowToBegin";
import ReasonsStart from "../components/others/ReasonsStart";
import useViewport from "../hooks/useViewport";

const TeachingOnUdemyPage = () => {
  const { width } = useViewport();
  const isMobileSmaller = width <= 414;
  const isMobile = width >= 415 && width <= 768;
  const isTable = width > 768 && width <= 1024;

  if (isMobileSmaller) {
    return (
      <Fragment>
        <BannerTeaching
          height="h-[200px]"
          positionText="top-1/4 left-[40px]"
          hiddenText
          absoluteNone
        ></BannerTeaching>
        <ReasonsStart
          grid="flex flex-col gap-6"
          paddingParent="px-4"
          textSize="text-2xl"
        ></ReasonsStart>
        <ContributeTo
          grid="grid grid-cols-3 gap-5"
          size="text-3xl"
          padding="px-8"
        ></ContributeTo>
        <HowToBegin
          col="flex-col-reverse"
          padding="px-5"
          hiddenNavigate
        ></HowToBegin>
        <TeacherHistory
          grid="flex flex-col"
          width="max-w-[500px]"
          height="h-auto"
          padding={"py-5"}
        ></TeacherHistory>
        <Alone
          translate
          flexBox="flex-col items-center"
          hiddenImageRight
          padding="px-5"
          margin="my-16"
        ></Alone>
        <BecomeAnInstructor
          textCenter="text-center px-5"
          textSize={2}
          btnWFull
        ></BecomeAnInstructor>
        <ChooseCompanies col gridLogo="grid grid-cols-3"></ChooseCompanies>
      </Fragment>
    );
  }
  if (isMobile) {
    return (
      <Fragment>
        <BannerTeaching
          height="h-[400px]"
          positionText="top-1/4 left-[40px]"
        ></BannerTeaching>
        <ReasonsStart
          grid="grid grid-cols-3 gap-12"
          paddingParent="px-4"
        ></ReasonsStart>
        <ContributeTo size="text-4xl" padding="px-8"></ContributeTo>
        <HowToBegin
          col="flex-col-reverse"
          padding="px-5"
          hiddenNavigate
        ></HowToBegin>
        <TeacherHistory
          grid="flex flex-col"
          width="max-w-[500px]"
          height="h-auto"
          padding={"py-5"}
        ></TeacherHistory>
        <Alone
          translate
          flexBox="flex-col items-center"
          hiddenImageRight
        ></Alone>
        <BecomeAnInstructor></BecomeAnInstructor>
        <ChooseCompanies col></ChooseCompanies>
      </Fragment>
    );
  }
  if (isTable) {
    return (
      <Fragment>
        <BannerTeaching></BannerTeaching>
        <ReasonsStart></ReasonsStart>
        <ContributeTo size="text-5xl" padding="px-16"></ContributeTo>
        <HowToBegin></HowToBegin>
        <TeacherHistory></TeacherHistory>
        <Alone></Alone>
        <BecomeAnInstructor></BecomeAnInstructor>
        <ChooseCompanies col></ChooseCompanies>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <BannerTeaching></BannerTeaching>
      <ReasonsStart></ReasonsStart>
      <ContributeTo></ContributeTo>
      <HowToBegin></HowToBegin>
      <TeacherHistory></TeacherHistory>
      <Alone></Alone>
      <BecomeAnInstructor></BecomeAnInstructor>
      <ChooseCompanies></ChooseCompanies>
    </Fragment>
  );
};

export default TeachingOnUdemyPage;
