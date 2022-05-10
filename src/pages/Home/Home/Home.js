import React from "react";
import Appointments from "../Appointments/Appointments";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Services from "../Services/Services/Services";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Services />
      <Appointments />
    </div>
  );
};

export default Home;
