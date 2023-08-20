import React from "react";
import Button from "../button/Button";

const UdemyBusiness = ({
  table = "grid grid-cols-2 gap-24",
  image = false,
}) => {
  return (
    <section className="page-container pt-20 h-full pb-36">
      <div className={`udemy-business ${table} max-w-[900px] mx-auto`}>
        <div className="">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
            alt=""
            className="udemy-logo w-[200px] mb-5"
          />
          <h1 className="text-3xl font-bold mb-5">
            Upskill your team with Udemy Business
          </h1>
          <div className="flex items-center gap-5 mb-2">
            <div className="ml-2">
              <div className="w-2 h-2 bg-darkudemy rounded-full"></div>
            </div>
            <p className="text-lg">
              Unlimited access to 19,000+ top Udemy courses, anytime, anywhere
            </p>
          </div>
          <div className="flex items-center gap-5 mb-2">
            <div className="ml-2">
              <div className="w-2 h-2 bg-darkudemy rounded-full"></div>
            </div>
            <p className="text-lg">
              International course collection in 14 languages
            </p>
          </div>
          <div className="flex items-center gap-5 mb-2">
            <div className="ml-2">
              <div className="w-2 h-2 bg-darkudemy rounded-full"></div>
            </div>
            <p className="text-lg">Top certifications in tech and business</p>
          </div>
          <Button className="bg-darkudemy font-bold text-white mt-5" borderNone>
            Get Udemy Business
          </Button>
          <Button className="ml-2 font-bold">Learn more</Button>
        </div>
        <div className={`${image}`}>
          <img
            src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={`udemy-business ${table} max-w-[900px] mx-auto mt-24`}>
        <div className="order-last flex flex-col justify-center items-start">
          <h1 className="text-3xl font-bold mb-5">Become an instructor</h1>
          <p className="text-lg">
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <Button className="bg-darkudemy font-bold text-white mt-5" borderNone>
            Start teaching today
          </Button>
        </div>
        <div className={`${image}`}>
          <img
            src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default UdemyBusiness;
