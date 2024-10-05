import React from "react";
import Carousel from "../Components/Carousel";
import Forms from "../Components/Forms";

const LoginPage = () => {
  return (
    <div>
      <Carousel children={<Forms />} />
    </div>
  );
};

export default LoginPage;
