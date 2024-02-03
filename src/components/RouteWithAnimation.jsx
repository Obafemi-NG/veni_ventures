import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Service from "../pages/service";
import Faq from "../pages/faq";
import Testimonials from "../pages/testimonials";
import Blog from "../pages/blog";
import Community from "../pages/Community";
import ContactUs from "../pages/ContactUs";

const RouteWithAnimation = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RouteWithAnimation;
