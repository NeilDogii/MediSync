'use client'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  className?: string
}

export default function Calendar({ className = '' }: Props) {
  const today = new Date()
  const [currentDate, setCurrentDate] = useState(new Date())

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()


  const appointmentsFromAPI = [
    { date: "2025-02-03" },
    { date: "2025-02-08" },
    { date: "2025-02-12" },
    { date: "2025-02-15" },
    { date: "2025-02-21" },
  ]

  
  const appointmentDates = appointmentsFromAPI
    .map((appointment) => {
      const d = new Date(appointment.date)
      if (d.getMonth() === month && d.getFullYear() === year) {
        return d.getDate()
      }
      return null
    })
    .filter(Boolean) as number[] // removes nulls

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startDay = firstDay.getDay()

  const days: (number | null)[] = []
  for (let i = 0; i < startDay; i++) days.push(null)
  for (let i = 1; i <= daysInMonth; i++) days.push(i)

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1))

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]

  return (
    <div
      className={`bg-white/95 rounded-2xl shadow-lg p-5 w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto border border-gray-200 ${className}`}
    >

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 hover:bg-gray-200 rounded-full transition">
          <ChevronLeft size={20} color="#0077B6" />
        </button>

        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-wide">
          {months[month]} {year}
        </h2>

        <button onClick={nextMonth} className="p-2 hover:bg-gray-200 rounded-full transition">
          <ChevronRight size={20} color="#0077B6" />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-xs sm:text-sm font-semibold text-gray-500 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm">
        {days.map((day, i) => {
          if (day === null) return <div key={i}></div>

          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()

          const isAppointment = appointmentDates.includes(day)

          return (
            <div key={i} className="relative flex justify-center items-center">
              <div
                className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200
                ${isToday
                    ? 'bg-[#0077B6] text-white font-bold shadow-md'
                    : 'text-gray-700 hover:bg-[#0077B6]/10 hover:text-[#0077B6]'
                  }`}
              >
                {day}
              </div>

              {/* 🔴 Red Dot for Appointment */}
              {isAppointment && (
                <span className="absolute bottom-1 h-2 w-2 bg-red-500 rounded-full"></span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
