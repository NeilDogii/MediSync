"use client";
import React, { useState } from "react";

export default function BookPageBG() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    time: ""
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/bookPageBG.jpg"
        alt="Hospital background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-24 px-4 sm:px-6 lg:px-12 xl:px-16 w-full max-w-7xl mx-auto pt-32 sm:pt-36 md:pt-40 lg:py-0 pb-12">
        {/* Left Text Section */}
        <div className="lg:w-1/2 lg:max-w-lg text-center lg:text-left space-y-4 lg:space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
            Meet the
            Best<br />
            Specialists
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Providing expert care and personalized treatments for your well-being.
          </p>
          <div className="flex sm:flex-row justify-center lg:justify-start gap-3 pt-2">
            <button className="bg-[#0077B6] hover:bg-[#075985] text-white font-semibold px-6 py-2.5 rounded-full transition-all shadow-lg text-sm">
              Get Quote Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-2.5 rounded-full transition-all text-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full max-w-sm lg:max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-7 lg:mt-12 xl:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 text-center text-[#003366]">
            Book Appointment
          </h2>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-gray-800">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#17A2B8] focus:border-transparent transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-gray-800">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#17A2B8] focus:border-transparent transition-all"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-gray-800">
                Time <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#17A2B8] focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23374151'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.5rem center",
                  backgroundSize: "1.25em 1.25em",
                }}
              >
                <option value="">Select Time</option>
                <option>10:00 AM</option>
                <option>12:00 PM</option>
                <option>2:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>

            {/* Description (replacing Department) */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-gray-800">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Describe your issue or concern"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#17A2B8] focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#0077B6] hover:bg-[#075985] text-white py-2.5 rounded-md font-semibold text-sm mt-4 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
