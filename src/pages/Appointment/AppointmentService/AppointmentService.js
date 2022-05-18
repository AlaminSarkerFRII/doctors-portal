import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots, price } = service;

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
          saepe.
        </p>
        <p>
          Price:
          <small className="text-error font-bold px-2">${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
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
