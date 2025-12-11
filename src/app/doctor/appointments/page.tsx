"use client"

import React, { useState } from "react"
import SidebarDoctor from "@/components/DoctorComponents/SidebarDoctor"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"

import { CalendarDays, Clock } from "lucide-react"

type Appointment = {
  id: string
  patient: string
  initials: string
  purpose: string
  time: string
  date: string
  status: "Upcoming" | "Completed" | "Cancelled"
}

const sampleAppointments: Appointment[] = [
  { id: "1", patient: "Amit Sharma", initials: "AS", purpose: "General Checkup", time: "9:30 AM", date: "2025-02-12", status: "Upcoming" },
  { id: "2", patient: "Sara Kapoor", initials: "SK", purpose: "Blood Report Review", time: "11:00 AM", date: "2025-02-12", status: "Upcoming" },
  { id: "3", patient: "John Mathew", initials: "JM", purpose: "Follow-up Consultation", time: "1:00 PM", date: "2025-02-11", status: "Completed" },
  { id: "4", patient: "Anjali Rao", initials: "AR", purpose: "Skin Allergy", time: "3:15 PM", date: "2025-02-10", status: "Cancelled" },
  { id: "5", patient: "Rohan Verma", initials: "RV", purpose: "Heart Checkup", time: "4:45 PM", date: "2025-02-12", status: "Upcoming" },
]

const statusColors: Record<Appointment["status"], string> = {
  Upcoming: "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
}

export default function MyAppointmentsPage() {
  const [selected, setSelected] = useState<Appointment | null>(null)
  const [open, setOpen] = useState(false)

  const upcoming = sampleAppointments.filter(a => a.status === "Upcoming")
  const completed = sampleAppointments.filter(a => a.status === "Completed")
  const cancelled = sampleAppointments.filter(a => a.status === "Cancelled")

  const handleView = (appt: Appointment) => {
    setSelected(appt)
    setOpen(true)
  }

  const Section = ({
    title,
    items
  }: {
    title: string
    items: Appointment[]
  }) => (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {items.length === 0 && (
        <p className="text-gray-500 text-sm">No {title.toLowerCase()}.</p>
      )}

      <div className="space-y-4">
        {items.map((appt) => (
          <Card key={appt.id} className="shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              
              {/* Patient Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                  {appt.initials}
                </div>

                <div>
                  <p className="text-lg font-semibold">{appt.patient}</p>
                  <p className="text-sm text-gray-500">{appt.purpose}</p>
                </div>
              </div>

              {/* Date + Time */}
              <div className="flex flex-col text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <Clock size={16} /> {appt.time}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <CalendarDays size={16} /> {appt.date}
                </div>
              </div>

              {/* Status */}
              <Badge className={`${statusColors[appt.status]} px-3 py-1`}>
                {appt.status}
              </Badge>

              {/* View Button */}
              <Button
                onClick={() => handleView(appt)}
                className="bg-[#0077B6] hover:bg-[#005f8c]"
              >
                View
              </Button>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <SidebarDoctor />

      <div className="ml-64 min-h-screen p-8 bg-[#D2F0F6]">

        <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
        <p className="text-gray-600 mb-6">
          View and manage all your upcoming and past consultations.
        </p>

        <Card className="p-6 shadow-lg">

          <Section title="Upcoming Appointments" items={upcoming} />
          <Section title="Completed Appointments" items={completed} />
          <Section title="Cancelled Appointments" items={cancelled} />

        </Card>

        {/* VIEW MODAL */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="rounded-2xl">
            <DialogHeader>
              <DialogTitle>{selected?.patient}</DialogTitle>
              <DialogDescription>
                Appointment details for the selected patient.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-2 text-gray-800 mt-3">
              <p><strong>Purpose:</strong> {selected?.purpose}</p>
              <p><strong>Time:</strong> {selected?.time}</p>
              <p><strong>Date:</strong> {selected?.date}</p>
              <p><strong>Status:</strong> {selected?.status}</p>
            </div>

            <DialogFooter>
              <Button
                onClick={() => setOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>
    </>
  )
}
