import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Shared/Button/PrimaryButton/PrimaryButton";

const Appointments = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-130px]" src={doctor} alt="" />
      </div>
      <div className="text-center flex-1 px-5">
        <h3 className="text-primary font-bold ">Appointment</h3>
        <h2 className="text-4xl font-bold text-white">
          Make an appointment Today
        </h2>
        <p className="text-white py-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="py-2">
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Appointments;
