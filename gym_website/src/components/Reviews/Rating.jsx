import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Rating = ({ ratingValue = 3.5 }) => {
  let fullStars = Math.floor(ratingValue);
  let halfStars = Math.ceil(ratingValue % 1);
  let emptyStars = 5 - fullStars - halfStars;
  return (
    <div class="flex items-center">
      {[...Array(fullStars)].map((star, i) => {
        return (
          <FaStar
            className="text-yellow-500 "
            size={24}
            key={i}
            style={{ marginRight: "5px" }}
          />
        );
      })}

      {[...Array(halfStars)].map((star, i) => {
        return (
          <FaStarHalfAlt
            className="text-yellow-500 "
            size={24}
            key={i}
            style={{ marginRight: "5px" }}
            strokeWidth={0.5}
          />
        );
      })}
      {[...Array(emptyStars)].map((star, i) => {
        return (
          <FaRegStar
            className="text-yellow-500 "
            size={24}
            key={i}
            style={{ marginRight: "5px" }}
            strokeWidth={0.5}
          />
        );
      })}
    </div>
  );
};

export default Rating;
