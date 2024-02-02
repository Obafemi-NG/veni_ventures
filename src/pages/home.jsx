import React from "react";
import Hero from "../sections/Hero";
import Service from "../sections/service";
import Plans from "../sections/Plans";
import Feedback from "../sections/Feedback";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Plans />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
