import React from "react";
import "../Header/Header.css";

const ReviewsInHome = (props) => {
  const { name, rating, review, img } = props.review;
  return (
    <div className="border-4 p-3 mb-3 rounded-lg bg-blue-400">
      <span className="flex items-center mb-4">
        <img className="w-14 h-14 rounded-full mr-4" src={img} alt="" />
        <h1 className="text-lg font-bold">{name}</h1>
      </span>
      <p className="font-bold text-amber-900">Ratings:5-/ {rating}</p>
      <p className="text-lg "><span className="text-blue-600 font-bold">Comment :</span> {review}</p>
    </div>
  );
};

export default ReviewsInHome;
