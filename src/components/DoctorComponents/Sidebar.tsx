'use client'
import React from 'react'
import { LayoutGrid, Calendar, Clock, Settings } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="h-screen w-28 bg-[#005FA3] flex flex-col items-center py-6 space-y-8">
      {/* Logo */}
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-shadow-md">
        <img src="./assets/logoimglogo.png" alt="logo" />
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col items-center space-y-10 mt-10">
        {/* Dashboard */}
        <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00B4D8] text-white shadow-md transition-all hover:scale-105">
          <LayoutGrid size={24} />
        </button>

        {/* Calendar */}
        <Link href="/doctor/calender" className="w-12 h-12 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-[#00B4D8]/20 transition-all">
          <button className="w-12 h-12 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-[#00B4D8]/20 transition-all">
            <Calendar size={24} />
          </button>
        </Link>

        {/* Timer/Stats */}
        <button className="w-12 h-12 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-[#00B4D8]/20 transition-all">
          <Clock size={24} />
        </button>

        {/* Settings */}
        <button className="w-12 h-12 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-[#00B4D8]/20 transition-all">
          <Settings size={24} />
        </button>
      </nav>

      {/* Spacer + Bottom */}
      <div className="flex-grow" />

      {/* Profile Circle */}
      <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center cursor-pointer border-2 border-[#00B4D8]/60">
        <img
          src="/assets/doctor.png"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>
    </aside>
  )
}
