import React from "react";
import { Link } from "react-router-dom";
import homeImgpc from "../../Images/home5.jpg";
import useReviews from "../../Utilities/ReviewsDataLoad";
import ReviewsInHome from "../ReviewsInHome/ReviewsInHome";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews([]);
  return (
    <div>
      <img className="w-13 relative" src={homeImgpc} alt="" />
      <div className="absolute honda-container text-zinc-900 right-1/3 left-1/3">
        <h1 className="font-bold text-5xl bg-gray-100 text-zinc-900  text-center p-2 rounded">
        Gsmart-pc-uild group
        </h1>
      </div>
      <div className="mt-2 mx-9 mb-16">
        <p className="font-medium  text-2xl text-zinc-900 ">
        Computing_
        <br />
  “A computer once beat me at chess, but it was no match for me at kick boxing.”
— Emo Philips
<br />
“Computer Science is no more about computers than astronomy is about telescopes.”
— Edsger W. Dijkstra
<br />
“The computer was born to solve problems that did not exist before.”
— Bill Gates
        </p>
        <Link to="/reviews">
          <button className="border-3 border-solid  bg-blue-600  text-white py-3 px-5 rounded-md text-lg mt-7 mb-20 ml-44">
            <p>🔴Live Demo...</p>
          </button>
        </Link>
      </div>
      <div className="mx-20 mt-16">
        <p className="border-2 bg-slate-600"></p>
        <h1 className="text-3xl font-bold my-8 text-center">👥Customer Reviews(6)</h1>
        {reviews.slice(0, 3).map((review) => (
          <ReviewsInHome key={review.id} review={review}></ReviewsInHome>
        ))}
       <Link to='/reviews'>
       <button className=" border-2 border-solid bg-blue-600 text-white py-2 px-14 rounded-md text-lg mt-7 mb-20 ml-32">
        <p>Reviews See ALL..</p>
      </button>
       </Link>
      </div>
    </div>
  );
};

export default Home;
