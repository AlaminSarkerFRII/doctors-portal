import React from "react";
import { format } from "date-fns";
const AvailableAppointment = ({ selected }) => {
  return (
    <div>
      <h2 className="text-secondary text-center font-bold text-3xl">
        Available Appointment on :{format(selected, "PP")}
      </h2>
    </div>
  );
};

export default AvailableAppointment;
