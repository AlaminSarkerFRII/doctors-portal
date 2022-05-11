import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentService from "../AppointmentService/AppointmentService";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selected }) => {
  // for modal

  const [treatment, setTreatment] = useState(null);

  // set services
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-secondary text-center font-bold text-3xl">
        Available Appointment on {format(selected, "PP")}
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4">
        {services.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentService>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
