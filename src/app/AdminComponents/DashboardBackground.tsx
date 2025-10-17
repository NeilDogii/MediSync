'use client'
import React from 'react'

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
      </div>
    </div>
  )
}
