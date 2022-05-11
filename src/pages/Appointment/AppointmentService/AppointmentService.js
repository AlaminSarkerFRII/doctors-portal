import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;

  return (
    <div className="card lg:w-lg bg-base-100 shadow-xl ">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
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
          <label
            for="booking-modal"
            disabled={slots.length === 0}
            className="btn btn-sm btn-secondary uppercase"
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
