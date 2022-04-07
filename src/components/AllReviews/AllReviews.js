import React from "react";

const AllReviews = (props) => {
  const { name, rating, review, img } = props.review;
  return (
    <div className="border-4 p-3 rounded-lg">
      <span className="flex items-center mb-4">
        <img className="w-14 h-14 rounded-full mr-4" src={img} alt="" />
        <h2 className="text-lg font-bold">{name}</h2>
      </span>
      <p className="font-bold"><span className="text-green-500">Ratings :</span> {rating}</p>
      <p><span className="text-red-600 font-bold">Review : </span>{review}</p>
    </div>
  );
};

export default AllReviews;
