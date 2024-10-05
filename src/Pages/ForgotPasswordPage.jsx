import React from "react";
import Carousel from "../Components/Carousel";
import ForgotPasswordForm from "../Components/ForgotPasswordForm";
const ForgotPasswordPage = () => {
  return (
    <div>
      <Carousel children={<ForgotPasswordForm />} />
    </div>
  );
};

export default ForgotPasswordPage;
