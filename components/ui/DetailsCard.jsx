"use client";

import { useState } from "react";

import { MdOutlineNavigateNext } from "react-icons/md";

const DetailsCard = ({ title, children, icon, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleAccordion = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div
      className={` bg-grey text-black my-4 rounded ${
        isOpen ? "border-b-2" : ""
      } ${className} transition-opacity duration-500 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">
          <span className="p-0 inline-block mr-2 align-middle">{icon}</span>
          {title}
        </h3>
        <span
          className={`text-2xl font-bold transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          {isOpen ? <MdOutlineNavigateNext /> : <MdOutlineNavigateNext />}
        </span>
      </button>
      {isOpen && <div className={`px-6 pb-4 mx-8`}>{children}</div>}
    </div>
  );
};

export default DetailsCard;
