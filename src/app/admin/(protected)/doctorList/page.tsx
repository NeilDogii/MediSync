import AddDoctorButton from "@/components/AdminComponents/AddDoctorButton";
import { DataTable } from "@/components/AdminComponents/data-table";
import { doctorColumns } from "@/components/AdminComponents/doctorColumns";
import SidebarAdmin from "@/components/AdminComponents/SidebarAdmin";
import { fetchDoctors } from "@/utils/requests/data/admin";

// const doctorData: Doctor[] = [
//   {
//     id: "1",
//     name: "Dr. Raj Malhotra",
//     specialization: "CARDIOLOGY",
//     phone: "9876543210",
//     email: "raj@medisync.com",
//     isActive: true,
//     password: "raj123",
//     username: "rajmalhotra",
//   },
//   {
//     id: "2",
//     name: "Dr. Ananya Sen",
//     specialization: "NEUROLOGY",
//     phone: "9123456780",
//     email: "ananya@medisync.com",
//     isActive: true,
//     password: "ananya123",
//     username: "ananyasen",
//   },
//   {
//     id: "3",
//     name: "Dr. Arjun Patel",
//     specialization: "ORTHOPEDICS",
//     phone: "9012345678",
//     email: "arjun@medisync.com",
//     isActive: false,
//     password: "arjun123",
//     username: "arjunpatel",
//   },
//   {
//     id: "4",
//     name: "Dr. Meera Iyer",
//     specialization: "DERMATOLOGY",
//     phone: "8899776655",
//     email: "meera@medisync.com",
//     isActive: true,
//     password: "meera123",
//     username: "meeraiyer",
//   },
// ];

export default async function DoctorListPage() {
  const doctorList = await fetchDoctors();
  const totalDoctors = doctorList.length;
  const activeDoctors = doctorList.filter((d) => d.isActive).length;
  const blockedDoctors = doctorList.filter((d) => !d.isActive).length;
  return (
    <>
      <SidebarAdmin />

      <div className="ml-64 px-8 py-6">
        {/*  Page Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Doctor Management
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage all registered doctors, their account access, and status from
            here.
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
            <p className="text-2xl font-semibold text-green-600">
              {activeDoctors}
            </p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-sm text-gray-500">Blocked Doctors</p>
            <p className="text-2xl font-semibold text-red-600">
              {blockedDoctors}
            </p>
          </div>
        </div>

        {/*  Table Section */}
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold mb-3">Doctor List</h2>
            <AddDoctorButton />
          </div>

          <div className="overflow-x-auto">
            <DataTable columns={doctorColumns} data={doctorList} />
          </div>
        </div>
      </div>
    </>
  );
}
