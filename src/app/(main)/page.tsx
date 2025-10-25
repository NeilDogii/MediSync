import React from "react";
import Navbar from "../../components/UserComponents/Navbar";
import Hero from "../../components/UserComponents/Hero";
import Get_started from "../../components/UserComponents/Get_started";
import Service_card from "../../components/UserComponents/Service_card";
import Team from "../../components/UserComponents/Team";
import Testimonial from "../../components/UserComponents/Testimonial";
import Footer from "../../components/UserComponents/Footer";




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
