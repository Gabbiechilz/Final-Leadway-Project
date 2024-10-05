import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { FaBolt, FaPaintRoller, FaCouch, FaWrench } from "react-icons/fa"; // Example icons

const ServicesGrid = () => {
  const services = [
    { icon: <FaBolt size={24} />, title: "Electrical Service" },
    { icon: <FaPaintRoller size={24} />, title: "Painting" },
    { icon: <FaCouch size={24} />, title: "Furniture Repair" },
    { icon: <FaWrench size={24} />, title: "Plumbing" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
