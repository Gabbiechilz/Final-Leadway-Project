import React from "react";
import ProfileDetailForm from "../Components/ProfileDetailForm";
import Carousel from "../Components/Carousel";

const ProfilePage = () => {
  return (
    <div>
      <Carousel children={<ProfileDetailForm />} />
    </div>
  );
};

export default ProfilePage;
