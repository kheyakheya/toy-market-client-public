import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl glass">
        <figure className="px-10 pt-10" >
        <img className="h-24 w-24 rounded-full  border-pink-200 border-4" src={review.profileImage} alt="girl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">{review.name}</h2>
            <p>{review.feedback}</p>
            
        </div>
    </div>
    );
};

export default ReviewCard;