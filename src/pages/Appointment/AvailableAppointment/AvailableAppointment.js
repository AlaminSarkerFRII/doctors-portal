import React, { useEffect, useState } from "react";
import { format } from "date-fns";
const AvailableAppointment = ({ selected }) => {
  // set services
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json()")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-secondary text-center font-bold text-3xl">
        Available Appointment on :{format(selected, "PP")}
      </h2>
      <div>{services.map()}</div>
    </div>
  );
};

export default AvailableAppointment;
