'use client'
import React from 'react'
import Calendar from 'react-calendar';
// import './globals.css';
import { MessageCircle } from 'lucide-react'

export default function DashboardBackground({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div
      className="flex-1 min-h-screen bg-white rounded-l-3xl overflow-hidden relative"
      style={{
        backgroundImage: "url('/assets/Background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional overlay to slightly fade the image */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Main content area */}
      <div className="relative z-10 p-6 sm:p-10">
        {children}
        {/* Heading */}
        <div className="flex justify-between items-center px-6">
          <h2 className="text-4xl font-bold tracking-wide">
            Good Morning <span className="text-[#0076B6] text-5xl font-extrabold">Dr. Kim!</span>
          </h2>
          <div className='flex items-center gap-3'>
            <MessageCircle className='cursor-pointer' />
            <button className='flex items-center justify-center px-3 py-2 hover:bg-[#00B4D8] rounded-md hover:text-white'>
              <span className='font-medium'>Get Help</span>
            </button>
          </div>
        </div>

        {/* Card section */}
        <div className='flex items-start justify-center gap-10 mt-10'>
          {/* Left card section */}
          <div
            className="relative z-11 bg-white rounded-3xl overflow-hidden mt-24 w-[815.5px] h-[312.7px] backdrop-blur-sm"
            style={{
              backgroundImage: "url('/assets/Background.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >

            <div className='flex gap-6'>
              <div className="relative z-10 p-6 sm:p-10">
                <p className="text-lg sm:text-4xl mt-6">Visits for Today</p>
                <h1 className="text-6xl sm:text-5xl font-bold mt-2">104</h1>
                <div className="flex gap-4 mt-6">
                  {/* New Patients */}
                  <div className="bg-white/90 text-black rounded-xl w-[220px] h-[100px] px-5 py-4 shadow-md flex flex-col justify-between transition-transform transform hover:-translate-y-1 hover:scale-105">
                    <p className="text-lg font-medium text-gray-600">New Patients</p>
                    <div className="flex items-center justify-between mt-2">
                      <h3 className="text-2xl font-semibold text-green-600">40</h3>
                      <span className="bg-green-100 text-green-600 text-sm px-4 py-2 rounded-lg flex items-center gap-1">
                        51% <span>↗</span>
                      </span>
                    </div>
                  </div>

                  {/* Old Patients */}
                  <div className="bg-white/90 text-black rounded-xl w-[220px] h-[100px] px-5 py-4 shadow-md flex flex-col justify-between transition-transform transform hover:-translate-y-1 hover:scale-105">
                    <p className="text-lg font-medium text-gray-600">Old Patients</p>
                    <div className="flex items-center justify-between mt-2">
                      <h3 className="text-2xl font-semibold text-red-600">64</h3>
                      <span className="bg-red-100 text-red-600 text-sm px-4 py-2 rounded-lg flex items-center gap-1">
                        20% <span>↘</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 h-full">
                <img
                  src="/assets/doctor2bgremove.png"
                  alt="Doctor"
                  className="h-[320px] object-contain translate-x-6 translate-y-2"
                />
              </div>
            </div>
          </div>
          {/* Right card section */}
          <div className="mt-24 bg-white rounded-3xl shadow-md p-6 w-[350px] h-[312.7px] flex flex-col items-center justify-center">
            <Calendar   />
          </div>
        </div>



      </div>
    </div >
  )
}
