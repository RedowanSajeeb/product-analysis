import React from 'react';
import useReviewsLoad from '../../Utilities/ReviewsDataLoad';
import AllReviews from '../AllReviews/AllReviews';

const Reviews = () => {
    const [reviews,setReviews] = useReviewsLoad([]);
    return (
        <div className='grid grid-cols-3 gap-4 mt-10 mx-14 bg-blue-200'>
           {
               reviews.map(review => <AllReviews
               key={review.id}
               review={review}
               ></AllReviews>)
           } 
        </div>
    );
};

export default Reviews;