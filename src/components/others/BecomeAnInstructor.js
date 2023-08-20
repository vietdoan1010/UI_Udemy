import React from "react";
import Button from "../button/Button";

const BecomeAnInstructor = ({
  textCenter = "",
  textSize = 4,
  btnWFull = false,
}) => {
  return (
    <section
      className={`flex flex-col items-center justify-center ${textCenter} bg-[#F7F9FA] py-20`}
    >
      <h1 className={`text-${textSize}xl font-bold mb-5`}>
        Become an instructor today
      </h1>
      <h2
        className={`text-${
          textSize / 2 === 1 ? "" : textSize / 2
        }xl mb-5 max-w-[480px] text-center`}
      >
        Join one of the world's largest online learning marketplaces.
      </h2>
      <Button
        className="bg-black text-white font-bold py-4 w-[320px]"
        borderNone
        full={btnWFull}
      >
        Get started
      </Button>
    </section>
  );
};

export default BecomeAnInstructor;
