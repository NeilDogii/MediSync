import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Get_started from "../Components/Get_started";
import Service_card from "../Components/Service_card";
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";




export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Get_started />
      <Service_card />
      <Team />
      <Testimonial />
      <Footer />
    </>
  )
}
