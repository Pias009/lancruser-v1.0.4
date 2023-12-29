import React from "react";

const sizeClasses = {
  txtLalezarRegular12659: "font-lalezar font-normal",
  txtLalezarRegular3641: "font-lalezar font-normal",
  txtLalezarRegular3172: "font-lalezar font-normal",
  txtInterBold349: "font-bold font-inter",
  txtInterBold1803: "font-bold font-inter",
  txtInterBold2039: "font-bold font-inter",
  txtInterBold5308: "font-bold font-inter",
  txtLalezarRegular8682: "font-lalezar font-normal",
  txtInterBold2563: "font-bold font-inter",
  txtInterBold409: "font-bold font-inter",
  txtInterBold10493: "font-bold font-inter",
  txtInterBold8526: "font-bold font-inter",
  txtLalezarRegular11108: "font-lalezar font-normal",
  txtInterBold7336: "font-bold font-inter",
  txtInterBold7424: "font-bold font-inter",
  txtLalezarRegular7081: "font-lalezar font-normal",
  txtInterBold7631: "font-bold font-inter",
  txtInterBold10573: "font-bold font-inter",
  txtInterBold10803: "font-bold font-inter",
  txtLalezarRegular632: "font-lalezar font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
