'use client'
import React from 'react'

export type PatientInfo = {
    count: number | string
    percent: number | string
    color?: 'green' | 'red'
    trend?: React.ReactNode | string
}

export const samplePatients: PatientInfo[] = [
  { count: 40, percent: 51, color: 'green', trend: '↗' },
  { count: 64, percent: 20, color: 'red', trend: '↘' },
]

export function getTotalVisits(): number {
  return samplePatients.reduce((sum, p) => sum + Number(p.count), 0)
}

type Props = {
    count: number | string
    percent: number | string
    color?: 'green' | 'red'
    trend?: React.ReactNode | string
}

export default function PatientCard({ count, percent, color = 'green', trend }: Props) {
    return (
        <div
            className="bg-white/90 text-black rounded-xl w-[220px] h-[100px] px-5 py-4 shadow-md flex flex-col justify-between transition-transform transform hover:-translate-y-1 hover:scale-105"
        >
            <p className="text-lg font-medium text-gray-600">New Patients</p>
            <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-semibold ${color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                    {count}
                </h3>

                <span
                    className={`text-xs px-2 py-1 rounded-lg flex items-center gap-1 ${color === 'green'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                        }`}
                >
                    {percent}% <span>{trend}</span>
                </span>
            </div>
        </div>
    )
}
