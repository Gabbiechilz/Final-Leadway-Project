import React from "react";
import SignInForm from "../Components/SignInForm";
import Carousel from "../Components/Carousel";
const SignInPage = () => {
  return (
    <div>
      <Carousel children={<SignInForm />} />
    </div>
  );
};

export default SignInPage;
