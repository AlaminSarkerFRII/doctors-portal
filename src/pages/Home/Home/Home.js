import React from "react";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import Footer from "../../Shared/Footer/Footer";
import Testimonial from "../../Testimonials/Testimonial/Testimonial";
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
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
