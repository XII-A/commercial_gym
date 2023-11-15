import React from "react";
import Rating from "./Rating";
import person3 from "../../../public/person3.png";
import Image from "next/image";
const ReviewCard = ({
  ratingValue = 3.5,
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quas, voluptatibus, quos voluptates iure quia quibusdam voluptate quod doloribus fugit. Quisquam voluptatum, quas, voluptatibus, quos voluptates iure quia quibusdam voluptate quod doloribus fugit.",
  personImage = person3,
  personName = "Frinando D. T.",
  personRole = "Fitness Trainer",
  id = 0,
  active = false,
}) => {
  return (
    <div
      className={`${
        active ? "flex" : "hidden"
      } bg-[#0D0D0D] flex flex-col w-full p-12 h-full rounded-xl transition-all duration-300 ease-in-out`}
    >
      <div className="w-full flex flex-row justify-end items-center">
        <Rating ratingValue={ratingValue} />
      </div>
      <div className="text-white text-base font-urban font-normal mt-4">
        {description}
      </div>
      <div className="flex flex-row mt-4 items-center">
        <div>
          <Image
            className="w-16 h-16 border-2 border-transparent rounded-full "
            src={personImage}
            alt=""
            width={0}
            height={0}
          />
        </div>
        <div className="flex flex-col ml-2 font-urban text-white ">
          <div className="text-lg">{personName}</div>
          <div className="text-base text-[#757575]">{personRole}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
