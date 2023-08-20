import React from "react";
import { dataReasonsStart } from "../../data/dataConfig";

const ReasonsStart = ({
  grid = "grid grid-cols-3 gap-32",
  paddingParent = "",
  textSize = "text-4xl",
}) => {
  return (
    <section className={`page-container text-center my-20 ${paddingParent}`}>
      <h1 className={`${textSize} font-bold mb-10`}>
        So many reasons to start
      </h1>
      <div className={`${grid}`}>
        {dataReasonsStart &&
          dataReasonsStart.map((items) => (
            <div className="flex flex-col items-center p-2">
              <img
                src={items.img_reason}
                alt=""
                className="w-[100px] h-[100px] mb-3"
              />
              <h2 className="text-lg font-bold mb-1">{items.title_reason}</h2>
              <p className="text-[15px] opacity-95">{items.content_reason}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ReasonsStart;
