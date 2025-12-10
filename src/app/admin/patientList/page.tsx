import { DataTable } from "@/components/AdminComponents/data-table"
import { patientColumns, Patient } from "@/components/AdminComponents/patientColumns"
import SidebarAdmin from "@/components/AdminComponents/SidebarAdmin"

const patientData: Patient[] = [
  {
    id: "1",
    name: "Rohit Verma",
    age: 32,
    phone: "9898989898",
    loginId: "rohit@medisync.com",
    status: "Active",
    password: "rohit123",
  },
  {
    id: "2",
    name: "Sneha Gupta",
    age: 26,
    phone: "9876543210",
    loginId: "sneha@medisync.com",
    status: "Active",
    password: "sneha123",
  },
  {
    id: "3",
    name: "Amit Sharma",
    age: 45,
    phone: "9123456789",
    loginId: "amit@medisync.com",
    status: "Blocked",
    password: "amit123",
  },
  {
    id: "4",
    name: "Priya Das",
    age: 29,
    phone: "9012345678",
    loginId: "priya@medisync.com",
    status: "Active",
    password: "priya123",
  },
]

// ✅ Stats
const totalPatients = patientData.length
const activePatients = patientData.filter(p => p.status === "Active").length
const blockedPatients = patientData.filter(p => p.status === "Blocked").length

export default function PatientListPage() {
  return (
    <>
      <SidebarAdmin />

      <div className="ml-64 px-8 py-6">
        {/* ✅ Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Patient Management</h1>
          <p className="text-sm text-gray-600 mt-1">
            View and manage all registered patients and their account access.
          </p>
        </div>

        {/* ✅ Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Patients</p>
            <p className="text-2xl font-semibold">{totalPatients}</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-sm text-gray-500">Active Patients</p>
            <p className="text-2xl font-semibold text-green-600">{activePatients}</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-sm text-gray-500">Blocked Patients</p>
            <p className="text-2xl font-semibold text-red-600">{blockedPatients}</p>
          </div>
        </div>

        {/* ✅ Table */}
        <div className="bg-white border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Patient List</h2>

          <div className="overflow-x-auto">
            <DataTable columns={patientColumns} data={patientData} />
          </div>
        </div>
      </div>
    </>
  )
}

