"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [available, setAvailable] = useState(true);

  const handleSearch = () => {
    // search logic
  };

  return (
    <section
      
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center 
                 px-6 md:px-12 pt-12 pb-40 md:pb-60 lg:pb-32" 
      style={{ backgroundImage: "url('/assets/Background.jpg')" }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* HERO TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white pt-10 md:pt-20 px-4 md:pl-24">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-2 text-[#03045E] sm:whitespace-nowrap">
    Bridging Care Beyond Boundaries
  </h1>
  <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 sm:whitespace-nowrap">
    — Your Doctor, <span className="text-[#0077B6]">Just A Click Away.</span>
  </h2>
  <p className="text-sm sm:text-base md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 text-[#002b5c] font-normal">
    Seamless Virtual Healthcare That Connects <br className="hidden sm:block" /> Patients And Doctors
    Anytime, Anywhere.
  </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-8 mb-12 justify-center md:justify-start">
            <Link
              href="/book"
              className="bg-[#0074cc] hover:bg-[#005fa3] text-white 
                         px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold 
                         text-sm md:text-lg text-center w-full sm:w-auto"
            >
              Appointment
            </Link>

            <div className="flex items-center space-x-3 md:space-x-4">
              <Link
                href="/video"
                className="bg-[#0074cc] hover:bg-[#005fa3] text-white 
                          w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center 
                          justify-center text-lg md:text-xl"
              >
                ▶
              </Link>
              <span className="text-[#03045E] font-medium text-base md:text-lg">
                Watch Video
              </span>
            </div>
          </div>
        </div>

        {/* DOCTOR IMAGE SECTION */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0 max-w-lg mx-auto">
          <div className="relative w-full max-w-[480px] h-[550px]"> 

            {/* Navy Blue Background */}
            <div
              className="absolute bg-[#03045E] rounded-3xl w-3/4 h-2/3 md:w-[450px] md:h-[400px]" 
              style={{
                top: "25%",
                left: "40%",
                transform: "translateX(-40%)",
                zIndex: 0,
              }}
            />

            {/* Doctor Image */}
            <Image
              src="/assets/doctor.png"
              alt="Doctor"
              width={2000}
              height={2000}
              className="relative z-10 w-auto h-full max-h-[500px]" 
              style={{
                objectFit: "cover",
                marginTop: "40px", 
                marginLeft: "-15px",
              }}
            />

            {/* 24/7 Service */}
            <Image
  src="/assets/7_service.png"
  alt="24/7 Service"
  width={152}
  height={71}
 
  className="absolute z-20 w-[120px] h-auto md:w-[152px] md:h-[71px] 
             top-[120px] right-0 md:top-[90px] md:right-0" 
/>

            {/* Our Professionals */}
            <Image
              src="/assets/proffesionals.png"
              alt="Our Professionals"
              width={175}
              height={73}
              className="absolute z-20 w-[140px] h-auto md:w-[175px] md:h-[73px]
                         bottom-[40px] left-0 md:bottom-[40px] md:left-[-10px]" 
            />
          </div>
        </div>
      </div>
      
      {/* SEARCH BOX */}
      <div
        className="
          relative md:absolute 
          mt-12 md:mt-0 
          left-1/2 transform -translate-x-1/2 
          bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-300 
          px-6 py-8 
          w-[95%] max-w-[1240px] z-30 
          md:bottom-[-40px] lg:bottom-[-10px]" 
      >
        <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
          Find A Doctor
        </h3>

        <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap gap-4 items-center justify-between">
          <div className="flex-1 w-full min-w-[200px]">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#90E0EF] rounded-lg focus:outline-none focus:border-[#00B4D8] text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="flex-1 w-full min-w-[200px]">
            <input
              type="text"
              placeholder="State Your Issue"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#90E0EF] rounded-lg focus:outline-none focus:border-[#00B4D8] text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center space-x-3 px-4 py-2 flex-grow sm:flex-grow-0">
            <span className="text-gray-900 font-medium whitespace-nowrap">Available</span>
            <button
              onClick={() => setAvailable(!available)}
              className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${available ? "bg-[#00B4D8]" : "bg-gray-300"}`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${available ? "translate-x-6" : "translate-x-0"}`}
              />
            </button>
          </div>

          <button
            onClick={handleSearch}
            className="bg-[#00B4D8] hover:bg-[#0077B6] text-white font-semibold
                       px-8 py-3 rounded-lg transition-colors duration-200
                       whitespace-nowrap w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}