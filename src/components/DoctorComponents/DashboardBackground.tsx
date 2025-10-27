'use client'
import React from 'react'
import PatientCard, { samplePatients, getTotalVisits } from './patient'
import PatientList, { samplePatientList } from './patientList'
import Calender from './calender'
import { MessageCircle } from 'lucide-react'

export default function DashboardBackground({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <>
      {/* Dashboard Wrapper */}
      <div
        className="flex-1 min-h-screen bg-white rounded-l-3xl overflow-y-auto relative"
        style={{
          backgroundColor: '#D2F0F6',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 ">
          {/* Content Container */}
          <div className="relative z-10 p-6 sm:p-10">
            {children}

            {/* Header */}
<div
  className="flex justify-between items-center px-6
             max-[950px]:gap-4 max-[950px]:items-start
             max-[750px]:flex-col max-[750px]:items-center max-[750px]:gap-3 max-[750px]:text-center"
>
  <h2 className="text-4xl font-bold tracking-wide max-[950px]:text-3xl max-[750px]:text-2xl">
    Good Morning
    <span className="text-[#0076B6] text-5xl font-extrabold block max-[950px]:text-4xl max-[750px]:text-3xl max-[750px]:leading-tight">
      Dr. Kim!
    </span>
  </h2>

  {/* 🔹 Message + Help + Logout in one line */}
  <div className="flex items-center gap-4 max-[950px]:mt-0">
    <MessageCircle className="cursor-pointer text-[#0077B6] hover:text-[#00B4D8] transition-all" />
    <button className="flex items-center justify-center px-3 py-2 rounded-md text-[#0077B6] hover:bg-[#00B4D8] hover:text-white transition-all">
      <span className="font-medium">Get Help</span>
    </button>
    <button
      className="flex items-center justify-center px-4 py-2 bg-[#0077B6] text-white rounded-md hover:bg-[#00B4D8] transition-all"
      onClick={() => {
        localStorage.clear()
        window.location.href = '/login'
      }}
    >
      Logout
    </button>
  </div>
</div>


            {/* Main section - Visits + Calendar (Patient List moved below Visits Card) */}
            <div
              className="flex items-start justify-center gap-10 mt-10
                         max-[950px]:gap-6 max-[950px]:px-2
                         max-[750px]:flex-col max-[750px]:items-center"
            >
              <div className="flex flex-col items-start gap-6 max-[750px]:items-center">
                {/* Visits Card */}
                <div
                  className="relative z-10 bg-white rounded-3xl overflow-hidden mt-24 w-[815.5px] h-[312.7px] backdrop-blur-sm
                             max-[1100px]:w-[760px]
                             max-[950px]:w-[680px] max-[950px]:h-[300px] max-[950px]:mt-20
                             max-[750px]:w-full max-[750px]:h-auto max-[750px]:mt-8"
                  style={{
                    backgroundImage: "url('/assets/Background.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="flex gap-6 max-[750px]:flex-col max-[750px]:items-center">
                    <div className="relative z-10 p-6 sm:p-10 max-[750px]:text-center">
                      <p className="text-lg sm:text-4xl max-[950px]:text-xl mt-6">
                        Visits for Today
                      </p>
                      <h1 className="text-6xl sm:text-5xl font-bold mt-2 max-[950px]:text-4xl">
                        {getTotalVisits()}
                      </h1>
                      <div className="flex gap-4 mt-6 flex-wrap justify-center">
                        {samplePatients.map((p, i) => (
                          <PatientCard
                            key={i}
                            count={p.count}
                            percent={p.percent}
                            color={p.color}
                            trend={p.trend}
                          />
                        ))}
                      </div>
                    </div>

                    <div
                      className="absolute right-0 bottom-0 h-full
                                 max-[1100px]:translate-x-4
                                 max-[950px]:translate-x-2 max-[950px]:right-2 max-[950px]:bottom-2 max-[950px]:h-[280px]
                                 max-[750px]:relative max-[750px]:right-auto max-[750px]:bottom-auto"
                    >
                      <img
                        src="/assets/doctor2bgremove.png"
                        alt="Doctor"
                        className="h-[320px] object-contain translate-x-6 translate-y-2
                                   max-[1100px]:h-[300px]
                                   max-[950px]:h-[260px] max-[950px]:translate-x-3 max-[950px]:translate-y-1
                                   max-[750px]:translate-x-0 max-[750px]:translate-y-0 max-[750px]:h-[220px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Patient List */}
                <div
                  className="mt-6 bg-white rounded-3xl shadow-md p-6 w-[350px] h-[425px]
                             max-[1100px]:w-[340px]
                             max-[950px]:w-[320px] max-[950px]:h-[380px]
                             max-[750px]:w-full max-[750px]:h-auto"
                >
                  <h2 className="text-lg font-semibold mb-3">Patient List</h2>
                  <div className="max-h-[350px] overflow-y-auto space-y-4 pr-2">
                    <PatientList items={samplePatientList} />
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div
                className="mt-24 flex flex-col items-center justify-center
                           max-[950px]:mt-16 max-[950px]:w-[320px] max-[950px]:h-[300px]
                           max-[750px]:mt-6 max-[750px]:w-full max-[750px]:h-auto"
              >
                <Calender />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
