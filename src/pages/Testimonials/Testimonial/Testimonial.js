import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "california",
      review: "",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "california",
      review: "",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      location: "california",
      review: "",
      img: people3,
    },
  ];
  return (
    <section className="my-28">
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold text-primary">Testimonial</h1>
            <h2 className="text-3xl">what our patients say</h2>
          </div>
          <div>
            <img src={quote} className="w-24 lg:w-48" alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Testimonial;
