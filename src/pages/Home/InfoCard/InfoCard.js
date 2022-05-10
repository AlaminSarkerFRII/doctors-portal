import React from "react";

const InfoCard = ({ img, cardTitle, cardBody, bgColor }) => {
  return (
    <div className={`card lg:card-side bg-accent shadow-xl ${bgColor}`}>
      <figure className="pl-4">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardBody}</p>
      </div>
    </div>
  );
};

export default InfoCard;
