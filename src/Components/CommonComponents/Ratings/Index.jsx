import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";

const Ratings = ({ rating = 3.5 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      return <IoIosStar key={index} className="text-[#FFAD33]" />;
    } else if (rating >= index + 0.5) {
      return (
        <IoStarHalfOutline key={index} className="text-[#FFAD33]" />
      );
    } else {
      return <FaRegStar key={index} className="text-[#FFAD33]" />;
    }
  });
  return <div className="flex items-center">{stars}</div>;
};

export default Ratings;
