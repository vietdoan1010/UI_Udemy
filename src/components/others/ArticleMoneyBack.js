import React from "react";

const ArticleMoneyBack = () => {
  return (
    <div className="flex items-center gap-5 border border-slate-200 p-5">
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
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>

      <h3 className="text-[16px] font-bold">
        Not sure? All courses have a 30-day money-back guarantee
      </h3>
    </div>
  );
};

export default ArticleMoneyBack;
