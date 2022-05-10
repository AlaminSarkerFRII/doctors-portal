import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div ClassName="hero min-h-screen ">
      <div ClassName="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} ClassName="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 ClassName="text-5xl font-bold">Box Office News!</h1>
          <p ClassName="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button ClassName="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
