'use client'
import React from 'react'
import Calendar from 'react-calendar'
import { MessageCircle } from 'lucide-react'
import PatientCard, { samplePatients, getTotalVisits } from './patient'

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
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm">
        <div className="relative z-10 p-6 sm:p-10">
          {children}
          <div className="flex justify-between items-center px-6">
            <h2 className="text-4xl font-bold tracking-wide">
              Good Morning{' '}
              <span className="text-[#0076B6] text-5xl font-extrabold">Dr. Kim!</span>
            </h2>
            <div className="flex items-center gap-3">
              <MessageCircle className="cursor-pointer" />
              <button className="flex items-center justify-center px-3 py-2 hover:bg-[#00B4D8] rounded-md hover:text-white">
                <span className="font-medium">Get Help</span>
              </button>
            </div>
          </div>

          <div className="flex items-start justify-center gap-10 mt-10">
            <div
              className="relative z-10 bg-white rounded-3xl overflow-hidden mt-24 w-[815.5px] h-[312.7px] backdrop-blur-sm"
              style={{
                backgroundImage: "url('/assets/Background.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="flex gap-6">
                <div className="relative z-10 p-6 sm:p-10">
                  <p className="text-lg sm:text-4xl mt-6">Visits for Today</p>
                  <h1 className="text-6xl sm:text-5xl font-bold mt-2">{getTotalVisits()}</h1>
                  <div className="flex gap-4 mt-6">
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

                <div className="absolute right-0 bottom-0 h-full">
                  <img
                    src="/assets/doctor2bgremove.png"
                    alt="Doctor"
                    className="h-[320px] object-contain translate-x-6 translate-y-2"
                  />
                </div>
              </div>
            </div>

            <div className="mt-24 bg-white rounded-3xl shadow-md p-6 w-[350px] h-[312.7px] flex flex-col items-center justify-center">
              <Calendar />
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}
