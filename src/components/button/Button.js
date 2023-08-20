import React from "react";

const Button = ({
  onClick,
  className = "",
  full = false,
  mtAuto = false,
  square = false,
  borderNone = false,
  type = "button",
  bgColor = "primary",
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${square ? square : "py-2 px-4"} ${
        borderNone ? "" : "border border-slate-900"
      } ${mtAuto ? "mt-auto" : ""} ${full ? "w-full" : ""} ${className} ${
        borderNone ? "hover:opacity-80" : "hover:bg-slate-200"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
