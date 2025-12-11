"use client"

import React, { useEffect, useState } from "react"
import SidebarDoctor from "@/components/DoctorComponents/SidebarDoctor"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Eye } from "lucide-react"

type Patient = {
  id: string
  name: string
  age: number
  gender: string
  condition: string
  phone: string
  lastVisit: string
  status: "Active" | "Follow-up Needed"
}


async function fetchPatients(): Promise<Patient[]> {
 

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Amit Sharma",
          age: 32,
          gender: "Male",
          condition: "General Checkup",
          phone: "9876543210",
          lastVisit: "2025-02-01",
          status: "Active",
        },
        {
          id: "2",
          name: "Sara Kapoor",
          age: 25,
          gender: "Female",
          condition: "Blood Report Review",
          phone: "9123456780",
          lastVisit: "2025-01-28",
          status: "Follow-up Needed",
        },
        {
          id: "3",
          name: "John Mathew",
          age: 40,
          gender: "Male",
          condition: "Follow-up Consultation",
          phone: "9012345678",
          lastVisit: "2025-02-10",
          status: "Active",
        },
        {
          id: "4",
          name: "Anjali Rao",
          age: 29,
          gender: "Female",
          condition: "Skin Allergy",
          phone: "8899776655",
          lastVisit: "2025-01-15",
          status: "Follow-up Needed",
        },
      ])
    }, 700)
  )
}

export default function MyPatients() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<Patient | null>(null)

  
  useEffect(() => {
    fetchPatients().then((data) => {
      setPatients(data)
      setLoading(false)
    })
  }, [])

  // Filter based on search input
  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <SidebarDoctor />

      <div className="ml-64 min-h-screen p-8 bg-[#D2F0F6]">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900">My Patients</h1>
        <p className="text-gray-600 mb-8">List of all patients you have consulted.</p>

        {/* Search Bar */}
        <div className="mb-5 flex justify-end">
          <Input
            type="text"
            placeholder="Search patient..."
            className="w-72 bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={loading}
          />
        </div>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-600 text-lg">Loading patients...</p>
        )}

        {/* Empty State */}
        {!loading && filteredPatients.length === 0 && (
          <p className="text-center text-gray-600 text-lg">
            No patients found.
          </p>
        )}

        {/* Patient Table */}
        {!loading && filteredPatients.length > 0 && (
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Patient</TableHead>
                  <TableHead className="font-semibold">Age</TableHead>
                  <TableHead className="font-semibold">Gender</TableHead>
                  <TableHead className="font-semibold">Condition</TableHead>
                  <TableHead className="font-semibold">Last Visit</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredPatients.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                        <User size={20} />
                      </div>
                      <span>{p.name}</span>
                    </TableCell>

                    <TableCell>{p.age}</TableCell>
                    <TableCell>{p.gender}</TableCell>
                    <TableCell>{p.condition}</TableCell>
                    <TableCell>{p.lastVisit}</TableCell>

                    <TableCell>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          p.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {p.status}
                      </span>
                    </TableCell>

                    <TableCell className="text-right">
                      <Button
                        size="icon"
                        className="bg-[#0077B6] hover:bg-[#005f8c]"
                        onClick={() => setSelected(p)}
                      >
                        <Eye size={18} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Patient Details Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-[380px] p-6 rounded-2xl shadow-xl">

              <h2 className="text-xl font-semibold mb-4">{selected.name}</h2>

              <p><strong>Age:</strong> {selected.age}</p>
              <p><strong>Gender:</strong> {selected.gender}</p>
              <p><strong>Phone:</strong> {selected.phone}</p>
              <p><strong>Last Visit:</strong> {selected.lastVisit}</p>
              <p><strong>Condition:</strong> {selected.condition}</p>
              <p><strong>Status:</strong> {selected.status}</p>

              <Button
                onClick={() => setSelected(null)}
                className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white"
              >
                Close
              </Button>
            </div>
          </div>
        )}

      </div>
    </>
  )
}
