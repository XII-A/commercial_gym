import React from "react";
import { IoFitness } from "react-icons/io5";

const Card = ({
  title = "Card Title",
  description = "lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  icon = <IoFitness size={32} />,
  selected = false,
}) => {
  return (
    <div
      className={
        selected
          ? "flex flex-col justify-center items-start w-72 h-60 bg-primary-default rounded-2xl pl-5 text-white font-urban transition-all duration-300 ease-linear"
          : "flex flex-col justify-center items-start w-72 h-60 bg-[#0D0D0D] rounded-2xl pl-5 text-white font-urban transition-all duration-300 ease-linear"
      }
    >
      <div
        className={
          selected
            ? "text-white mb-5 transition-all duration-300 ease-linear"
            : "text-primary-default mb-5 transition-all duration-300 ease-linear"
        }
      >
        {icon}
      </div>
      <div className="font-semibold text-2xl mb-2">{title}</div>
      <div className="text-sm text-left w-11/12">{description}</div>
    </div>
  );
};

export default Card;
