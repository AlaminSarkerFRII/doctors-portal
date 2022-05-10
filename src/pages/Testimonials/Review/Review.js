import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.review}</p>
        <div class="flex items-center ">
          <div className="avatar online mr-10">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h2 class="card-title">{review.name}</h2>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
