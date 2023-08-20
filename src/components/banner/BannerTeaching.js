import React from "react";
import Button from "../button/Button";

const BannerTeaching = ({
  height = "h-[600px]",
  positionText = "top-1/3 left-[70px]",
  absoluteNone = "absolute",
  hiddenText = false,
}) => {
  return (
    <div className={`w-full ${height} relative`}>
      <div className="overlay absolute inset-0"></div>
      <img
        src={`https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg`}
        alt=""
        className="w-full h-full object-cover"
      />
      {!hiddenText && (
        <div className={`${absoluteNone} ${positionText} w-[300px]`}>
          <div className="flex flex-col gap-x-3">
            <h1 className="text-5xl font-bold">Come teach with us</h1>
            <p className="text-lg my-4">
              Become an instructor and change lives — including your own
            </p>
            <Button className="bg-black text-white font-bold py-4" borderNone>
              Get started
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerTeaching;
