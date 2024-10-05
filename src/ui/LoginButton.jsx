import React from "react";

const LoginButton = ({ onClick, children, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1a73e8] text-[11px] md:text-[16px] text-white pt-1 pb-2 px-2 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default LoginButton;
