import React from "react";

const ProfileCard = ({ image, name, description }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-center h-[215px]">
      {/* Flex row to display image and name side by side */}
      <div className="flex items-center mb-4">
        <div className="rounded-full overflow-hidden h-16 w-16 mr-4">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <h3 className="text-[#121212] text--[16px] font-semibold">{name}</h3>
      </div>

      <p className="text-[#121212] text-[16px] text-center mt-2">
        {description}
      </p>
    </div>
  );
};

export default ProfileCard;
