import React from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-center">
      <div className="bg-blue-100 p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-[#1a73e8] text-lg font-bold">{title}</h3>
    </div>
  );
};

export default ServiceCard;
