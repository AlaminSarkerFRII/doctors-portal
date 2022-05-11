import React from "react";

const AppointmentService = ({ service }) => {
  const { _id, name, slots } = service;

  return (
    <div className="card lg:w-lg bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2 className="card-title text-secondary text-center">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length ? "Spaces" : "space"} Available
        </p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <button
            disabled={slots.length === 0}
            className="btn btn-secondary uppercase"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
