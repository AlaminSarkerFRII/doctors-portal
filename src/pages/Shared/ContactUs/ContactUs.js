import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../Button/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className="my-28">
      <div className="text-center">
        <h4 className="text-xl font-bold text-primary">Contact Us</h4>
        <h2 className="text-4xl font-bold text-white py-3">
          Stay connected with us
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="form-control  w-full max-w-xs mb-4">
          <input
            type="email"
            placeholder="write your email"
            className="input input-bordered w-full max-w-xs mb-2 "
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mb-2 "
          />
          <textarea
            className="textarea textarea-bordered mb-2 "
            placeholder="write your massage"
          ></textarea>
        </div>
      </div>
      <div className="text-center py-2">
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default ContactUs;
