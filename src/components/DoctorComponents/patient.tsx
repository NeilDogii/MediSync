'use client'
import React from 'react'

export type AppointmentInfo = {
  title: string
  count: number
  color?: 'green' | 'red' | 'blue'
}

export const samplePatients: AppointmentInfo[] = [
  { title: 'Checkups', count: 12, color: 'blue' },
  { title: 'Reports', count: 5, color: 'green' },
]

export function getTotalVisits(): number {
  return samplePatients.reduce((sum, p) => sum + Number(p.count), 0)
}

type Props = {
  title: string
  count: number
  color?: 'green' | 'red' | 'blue'
}

export default function PatientCard({ title, count, color = 'blue' }: Props) {
  const colorMap = {
    blue: 'text-blue-600 bg-blue-100',
    green: 'text-green-600 bg-green-100',
    red: 'text-red-600 bg-red-100',
  }

  return (
    <div className="bg-white/90 text-black rounded-xl w-[220px] h-[100px] px-5 py-4 shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1 hover:scale-105">
      
      <p className="text-lg font-medium text-gray-600">{title}</p>

      <div className="flex items-center justify-between">
        <h3 className={`text-2xl font-semibold ${colorMap[color].split(' ')[0]}`}>
          {count}
        </h3>

        <span className={`px-3 py-1 rounded-md text-sm ${colorMap[color]}`}>
          Today
        </span>
      </div>
    </div>
  )
}
