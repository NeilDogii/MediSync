'use client'
import React from 'react'

export type AppointmentItem = {
  id: string | number
  initials: string
  name: string
  purpose: string
  time: string
  color?: 'pink' | 'blue' | 'teal' | 'gray'
}

export const samplePatientList: AppointmentItem[] = [
  { id: 1, initials: 'SM', name: 'Samantha M.', purpose: 'Checkup', time: '9:15 AM', color: 'pink' },
  { id: 2, initials: 'AD', name: 'Arun D.', purpose: 'Routine Checkup', time: '10:30 AM', color: 'blue' },
  { id: 3, initials: 'DJ', name: 'Deepali J.', purpose: 'Lab Report', time: '8:50 AM', color: 'teal' },
  { id: 4, initials: 'SM', name: 'Sidharth M.', purpose: 'Follow-up', time: '11:15 AM', color: 'pink' },
  { id: 5, initials: 'RK', name: 'Rohan K.', purpose: 'Skin Allergy Consult', time: '12:45 PM', color: 'gray' },
]

type Props = {
  items?: AppointmentItem[]
  className?: string
}

type Color = 'pink' | 'blue' | 'teal' | 'gray'

const colorMap: Record<Color, { ring: string; avatarBg: string; pillBg: string; pillText: string }> = {
  pink: { ring: 'ring-pink-400/30', avatarBg: 'bg-pink-100 text-pink-700', pillBg: 'bg-pink-100', pillText: 'text-pink-700' },
  blue: { ring: 'ring-blue-400/30', avatarBg: 'bg-blue-100 text-blue-700', pillBg: 'bg-blue-100', pillText: 'text-blue-700' },
  teal: { ring: 'ring-teal-400/30', avatarBg: 'bg-teal-100 text-teal-700', pillBg: 'bg-teal-100', pillText: 'text-teal-700' },
  gray: { ring: 'ring-gray-300/40', avatarBg: 'bg-gray-100 text-gray-700', pillBg: 'bg-gray-100', pillText: 'text-gray-700' },
}

export default function patientList({ items = samplePatientList, className = '' }: Props) {
  return (
    <div className={`w-full ${className}`}>
      {items.map((it) => {
        const c = colorMap[it.color ?? 'gray']
        return (
          <div
            key={it.id}
            className="flex items-center justify-between gap-4 p-3 mb-3 rounded-lg hover:bg-white/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${c.avatarBg} ${c.ring} ring-2`}>
                {it.initials}
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-900">{it.name}</div>
                <div className="text-xs text-gray-500">{it.purpose}</div>
              </div>
            </div>

            <div className={`text-xs px-3 py-1 rounded-full ${c.pillBg} ${c.pillText}`}>
              {it.time}
            </div>

          </div>
        )
      })}
    </div>
  )
}
