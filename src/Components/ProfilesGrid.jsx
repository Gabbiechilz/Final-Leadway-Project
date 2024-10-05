import React from "react";
import ProfileCard from "../ui/ProfileCard"; // Import the ProfileCard Component

const ProfilesGrid = () => {
  const profiles = [
    {
      image: "https://via.placeholder.com/150",
      name: "TOLANI CLARK",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc facilisi congue vel ipsum ullamcorper molestie morbi. Tristique ",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "TOLANI CLARK",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc facilisi congue vel ipsum ullamcorper molestie morbi. Tristique ",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "TOLANI CLARK",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc facilisi congue vel ipsum ullamcorper molestie morbi. Tristique ",
    },

    {
      image: "https://via.placeholder.com/150",
      name: "TOLANI CLARK",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc facilisi congue vel ipsum ullamcorper molestie morbi. Tristique ",
    },
  ];

  return (
    <div className="bg-[#0d47a1] py-20 px-10 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile.name}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilesGrid;
