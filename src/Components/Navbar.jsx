import React from "react";
import LoginButton from "../ui/LoginButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="  flex justify-between items-center px-[40px] bg-[#ffffff]">
        <img src="./Assets/logo.svg" alt="logo" />
        <div className="hidden md:flex md:gap-10">
          <p className="text-[16px] text-[#121212]">How it works </p>
          <p className="text-[16px] text-[#121212]">Services</p>
          <p className="text-[16px] text-[#121212]"> Contact us </p>
        </div>
        <Link to="/LoginPage">
          <LoginButton>Login/Sign-Up</LoginButton>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
