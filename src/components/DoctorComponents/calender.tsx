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
            className={`bg-white/90 rounded-2xl shadow-md p-4 sm:p-5 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
                <button
                    onClick={prevMonth}
                    className="p-2 sm:p-3 hover:bg-gray-200 rounded-full transition"
                >
                    <ChevronLeft size={18} className="sm:w-5 sm:h-5" color="#0077B6" />
                </button>

                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
                    {months[month]} {year}
                </h2>

                <button
                    onClick={nextMonth}
                    className="p-2 sm:p-3 hover:bg-gray-200 rounded-full transition"
                >
                    <ChevronRight size={18} className="sm:w-5 sm:h-5" color="#0077B6" />
                </button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 text-center text-xs sm:text-sm font-semibold text-gray-600 mb-2 sm:mb-3">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                    <div key={d}>{d}</div>
                ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm">
                {days.map((day, i) => {
                    if (day === null) return <div key={i}></div>

                    const isToday =
                        day === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear()

                    return (
                        <div
                            key={i}
                            className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200
            ${isToday
                                    ? 'bg-[#0077B6] text-white font-bold shadow-md'
                                    : 'text-gray-700 hover:bg-[#0077B6]/10 hover:text-[#0077B6]'
                                }`}
                        >
                            {day}
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
