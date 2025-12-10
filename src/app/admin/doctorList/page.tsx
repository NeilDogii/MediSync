import { DataTable } from "@/components/AdminComponents/data-table"
import { doctorColumns, Doctor } from "@/components/AdminComponents/doctorColumns"
import SidebarAdmin from "@/components/AdminComponents/SidebarAdmin"

const doctorData: Doctor[] = [
  {
    id: "1",
    name: "Dr. Raj Malhotra",
    specialization: "Cardiologist",
    phone: "9876543210",
    loginId: "raj@medisync.com",
    status: "Active",
    password: "raj123",
  },
  {
    id: "2",
    name: "Dr. Ananya Sen",
    specialization: "Neurologist",
    phone: "9123456780",
    loginId: "ananya@medisync.com",
    status: "Active",
    password: "ananya123",
  },
  {
    id: "3",
    name: "Dr. Arjun Patel",
    specialization: "Orthopedic Surgeon",
    phone: "9012345678",
    loginId: "arjun@medisync.com",
    status: "Blocked",
    password: "arjun123",
  },
  {
    id: "4",
    name: "Dr. Meera Iyer",
    specialization: "Dermatologist",
    phone: "8899776655",
    loginId: "meera@medisync.com",
    status: "Active",
    password: "meera123",
  },
]


const totalDoctors = doctorData.length
const activeDoctors = doctorData.filter(d => d.status === "Active").length
const blockedDoctors = doctorData.filter(d => d.status === "Blocked").length

export default function DoctorListPage() {
  return (
    <> 
      <SidebarAdmin />

    
      <div className="ml-64 px-8 py-6">  

        {/*  Page Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Doctor Management</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage all registered doctors, their account access, and status from here.
          </p>
        </div>

        {/*  Info Cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Doctors</p>
            <p className="text-2xl font-semibold">{totalDoctors}</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-sm text-gray-500">Active Doctors</p>
            <p className="text-2xl font-semibold text-green-600">{activeDoctors}</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-sm text-gray-500">Blocked Doctors</p>
            <p className="text-2xl font-semibold text-red-600">{blockedDoctors}</p>
          </div>
        </div>

        {/*  Table Section */}
        <div className="bg-white border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Doctor List</h2>

          <div className="overflow-x-auto">
            <DataTable columns={doctorColumns} data={doctorData} />
          </div>
        </div>

      </div>
    </>
  )
}
