import React from "react";

const HeaderButton = ({ onClick, children, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1a73e8] text-[16px] text-white pt-1 pb-2 pl-2 pr-6 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default HeaderButton;
